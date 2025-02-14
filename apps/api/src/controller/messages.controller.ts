import {Elysia, t} from "elysia";
import { Message, MessageAction } from "../model/message";
import { auth } from "../plugins/auth.plugin";
import { getDB } from "../util/di";
import { tokens } from "../db/schema/tokens";
import { users } from "../db/schema/users";
import {and, eq} from 'drizzle-orm'
import { messages, usersToVotedMessages } from "../db/schema/messages";
import { maps } from "../db/schema/maps";

export const authController = new Elysia({prefix: '/messages'})
.use(auth)
.post('/', async ({body, bearer, error}) => {

    const db = getDB();

    const tokenResult = await db.select().from(tokens).where(eq(tokens.token, bearer || ''));

    const result = tokenResult.at(0);

    if(!result) return error(401, 'Unauthorized');

    const steamID = result.steamID;
    
    // get user to see if they're still on cooldown for sending messages

    const userResult = (await db.select().from(users).where(eq(users.steamID, steamID))).at(0);

    if(userResult?.lastSentMessageTime && (Date.now() - userResult?.lastSentMessageTime <= parseInt(process.env.MESSAGE_COOLDOWN || '300000'))) return error(420, 'Please wait before creating another message!')

    // create map if it doesn't exist

    let mapResult = (await db.select().from(maps).where(eq(maps.name, body.map))).at(0)

    const created = Date.now()
    
    if(!mapResult) mapResult = await db.insert(maps).values({name: body.map, firstMessageWrote: created})

    const oneMonthMillis = 30 * 24 * 60 * 60 * 1000; 

    const expiry = created + oneMonthMillis;

    await db.insert(messages).values({steamID, created, expiry, mapID: mapResult!.mapID, posX: body.posX, posY: body.posY, posZ: body.posZ, rotX: body.rotX, rotY: body.rotY, rotZ: body.rotZ, message: body.message})

    return {success: true, message: 'Your message was successfully sent!'}
}, {body: Message})
.post('/:msgID/:action', async ({params: {msgID, action}, bearer, error}) => {

    const db = getDB();

    const tokenResult = await db.select().from(tokens).where(eq(tokens.token, bearer || ''));

    const result = tokenResult.at(0);

    if(!result) return error(401, 'Unauthorized');

    const steamID = result.steamID;

    // check if the user has already upvoted

    const relation = await db.select().from(usersToVotedMessages).where(and(eq(usersToVotedMessages.steamID, steamID), eq(usersToVotedMessages.msgId, msgID), eq(usersToVotedMessages.action, action)))

    if(relation.length > 0) return error(400, 'Message already voted!');

    await db.insert(usersToVotedMessages).values({steamID, msgId: msgID, action})

    return {success: true, message: `Sucessfully ${action}ed the message!`}

}, {params: t.Object({action: t.Enum(MessageAction), msgID: t.Number()})})
