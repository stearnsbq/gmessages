import {Elysia, t} from "elysia";

export const authController = new Elysia()
.post("/register", ({body: {steamID}}) => `Hello ${steamID}`, {
    body: t.Object({
        steamID: t.String({pattern: 'STEAM_[10]:[10]:[0-9]+'}) // Verifies it's an actual steamID
    })
})



