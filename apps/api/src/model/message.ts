import { t } from "elysia";


export const Message = t.Object({
    message: t.String(),
    map: t.String(),
    posX: t.Number(),
    posY: t.Number(),
    posZ: t.Number(),
    rotX: t.Number(),
    rotY: t.Number(),
    rotZ: t.Number()
})

export enum MessageAction{
    UPVOTE = 'upvote',
    DOWNVOTE = 'downvote'
}