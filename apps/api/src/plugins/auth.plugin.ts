import { jwt } from '@elysiajs/jwt'
import Elysia, { error, t } from 'elysia'
import { getDB } from '../util/di'
import { tokens } from '../db/schema/tokens'
import {eq} from 'drizzle-orm'


export const auth = new Elysia({aot: false})
.guard({
    headers: t.Object({
        authorization: t.String({
            pattern: '^Bearer .+$'
        })
    })
})
.derive(({ headers }) => {
    const auth = headers['authorization']

    const bearer = auth?.startsWith('Bearer ') ? auth.slice(7) : null;

    if(!bearer) return;

    const hasher = new Bun.CryptoHasher("sha256", process.env.HMAC_SECRET);

    hasher.update(bearer);

    const tokenHMAC = hasher.digest("hex")

    return {
        bearer: tokenHMAC
    }
})
.onBeforeHandle(async ({bearer}) => {
    if(!bearer) return error(401, "Unauthorized");

    const db = getDB();

    const tokenExists = await db.select().from(tokens).where(eq(tokens.token, bearer));

    if(!tokenExists.length) return error(401, "Unauthorized"); 

})

.as('plugin')
