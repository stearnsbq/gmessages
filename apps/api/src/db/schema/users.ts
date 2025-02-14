import {
  sqliteTable,
  text,
  integer,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { Many, relations } from "drizzle-orm";
import { tokens } from "./tokens";
import { messages } from "./messages";

export const users = sqliteTable("users", {
  steamID: text().notNull().primaryKey(),
  created: integer().notNull(),
  lastSentMessageTime: integer(),
});

export const userTokens = relations(users, ({ many }) => ({
  tokens: many(tokens),
  messages: many(messages),
}));
