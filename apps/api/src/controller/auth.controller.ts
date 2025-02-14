import {Elysia, t} from "elysia";
import Container from "typedi";
import { getDB } from "../util/di";
import { users } from "../db/schema/users";
import {eq} from 'drizzle-orm'
import { jwt } from '@elysiajs/jwt'
import { tokens } from "../db/schema/tokens";
import { nanoid } from "nanoid";

export const authController = new Elysia({prefix: '/auth'})
.post("/register", async ({body: {steamID}, error}) => {

    const db = getDB();

    const userSelectResult = await db.query.users.findFirst({where: eq(users.steamID, steamID)});

    if(!userSelectResult) return error(401, "Unauthorized");


    await db.insert(users).values({steamID, created: Date.now()})

    // generate initial auth token for creating messages

    const token = nanoid(32);

    const hasher = new Bun.CryptoHasher("sha256", process.env.HMAC_SECRET);

    hasher.update(token);

    const tokenHMAC = hasher.digest("hex")

    await db.insert(tokens).values({steamID, token: tokenHMAC, created: Date.now()})

    return {success: true, message: 'User was registered!', data: token}
}, {
    body: t.Object({
        steamID: t.String({pattern: 'STEAM_[10]:[10]:[0-9]+'}) // Verifies it's an actual steamID
    })
})



