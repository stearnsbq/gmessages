import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { users } from "./users";
import { relations } from "drizzle-orm";
import { messages } from "./messages";


export const maps = sqliteTable('maps', {
    mapID: integer().primaryKey({autoIncrement: true}),
    workshopID: text(),
    firstMessageWrote: integer().notNull(),
    name: text().notNull()
});


export const mapMessages = relations(maps, ({ many }) => ({
    messages: many(messages)
}));