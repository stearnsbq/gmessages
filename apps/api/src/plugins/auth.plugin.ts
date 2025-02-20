import { jwt } from "@elysiajs/jwt";
import Elysia, { error, t } from "elysia";
import { getDB } from "../util/di";
import { tokens } from "../db/schema/tokens";
import { eq } from "drizzle-orm";

export const auth = new Elysia({ aot: false })
  .guard(
    {
      beforeHandle: ({ headers }) => {
        const auth = headers["authorization"];

        const bearer = auth?.startsWith("Bearer ") ? auth.slice(7) : null;

        if (!bearer) return error(401, "Unauthorized");

        return { bearer };
      },
    }
  )
  .resolve( async ({ headers }) => {
        const auth = headers["authorization"] as string;

        const bearer = auth.slice(7);

        const hasher = new Bun.CryptoHasher("sha256", process.env.HMAC_SECRET);

        hasher.update(bearer);

        const tokenHMAC = hasher.digest("hex");

        const db = getDB();

        const result = await db.query.tokens.findFirst({
          where: eq(tokens.token, tokenHMAC || ""),
        });

        if (!result) return error(401, "Unauthorized");

        const steamID = result.steamID;

        return {
          bearer: tokenHMAC,
          steamID,
        };
      })


  .as("plugin");
