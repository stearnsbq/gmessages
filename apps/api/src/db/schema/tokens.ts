import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { users } from "./users";
import { relations } from "drizzle-orm";


export const tokens = sqliteTable('tokens', {
    tokenID: integer().primaryKey({autoIncrement: true}),
    created: integer().notNull(),
    token: text().notNull(),
    steamID: text().references(() => users.steamID).notNull()
});



export const tokenUser = relations(tokens, ({ one }) => ({
    user: one(users, {
        fields: [tokens.steamID],
        references: [users.steamID]
    }),
}));