import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { Many, relations } from "drizzle-orm";
import { tokens } from "./tokens";
import { messages } from "./messages";

const users = sqliteTable("users", {
  steamID: text().notNull().primaryKey(),
  created: integer().notNull(),
  lastSentMessageTime: integer(),
});

const userTokens = relations(users, ({ many }) => ({
  tokens: many(tokens),
  messages: many(messages),
}));


export {users, userTokens}