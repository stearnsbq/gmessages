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
.post('/', async ({body,steamID, error}) => {

    const db = getDB();

    // get user to see if they're still on cooldown for sending messages

    const userResult = await db.query.users.findFirst({where: eq(users.steamID, steamID as string)})

    if(userResult?.lastSentMessageTime && (Date.now() - userResult?.lastSentMessageTime <= parseInt(process.env.MESSAGE_COOLDOWN || '300000'))) return error(420, 'Please wait before creating another message!')

    // create map if it doesn't exist

    let mapResult = await db.query.maps.findFirst({where: eq(maps.name, body.map)});

    const created = Date.now()
    
    if(!mapResult) mapResult = (await db.insert(maps).values({name: body.map, firstMessageWrote: created}).returning()).at(0);

    const oneMonthMillis = 30 * 24 * 60 * 60 * 1000; 

    const expiry = created + oneMonthMillis;

    await db.insert(messages).values({steamID: steamID as string, created, expiry, mapID: mapResult!.mapID, posX: body.posX, posY: body.posY, posZ: body.posZ, rotX: body.rotX, rotY: body.rotY, rotZ: body.rotZ, message: body.message})

    return {success: true, message: 'Your message was successfully sent!'}
}, {body: Message})
.post('/:msgID/:action', async ({params: {msgID, action}, steamID, error}) => {

    const db = getDB();
    // check if the user has already upvoted

    const relation = await db.query.usersToVotedMessages.findFirst({where: and(eq(usersToVotedMessages.steamID, steamID as string), eq(usersToVotedMessages.msgId, msgID), eq(usersToVotedMessages.action, action))})

    if(!relation) return error(400, 'Message already voted!');

    await db.insert(usersToVotedMessages).values({steamID: steamID as string, msgId: msgID, action})

    return {success: true, message: `Sucessfully ${action}ed the message!`}

}, {params: t.Object({action: t.Enum(MessageAction), msgID: t.Number()})})
