import {
  check,
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { maps } from "./maps";
import { relations, sql } from "drizzle-orm";

export const messages = sqliteTable("messages", {
  messageID: integer().primaryKey({ autoIncrement: true }),
  steamID: text()
    .notNull()
    .references(() => users.steamID),
  message: text().notNull(),
  created: integer()
    .$default(() => Date.now())
    .notNull(),
  expiry: integer().notNull(),
  mapID: integer()
    .notNull()
    .references(() => maps.mapID),
  posX: real().notNull(),
  posY: real().notNull(),
  posZ: real().notNull(),
  rotX: real().notNull(),
  rotY: real().notNull(),
  rotZ: real().notNull(),
});

export const messageMap = relations(messages, ({ one }) => ({
  map: one(maps, {
    fields: [messages.mapID],
    references: [maps.mapID],
  }),
}));

export const userMap = relations(messages, ({ one }) => ({
  user: one(users, {
    fields: [messages.steamID],
    references: [users.steamID],
  }),
}));


export const usersToVotedMessages = sqliteTable(
    "users_to_voted_messages",
    {
      steamID: text()
        .notNull()
        .references(() => users.steamID),
      msgId: integer()
        .notNull()
        .references(() => messages.messageID),
      action: text().notNull()
    },
    (t) => [
      primaryKey({ columns: [t.steamID, t.msgId] }),
      check("action_check", sql`action in ('upvote', 'downvote')`)
    ]
  );

export const userUpvotedMessagesRelations = relations(users, ({ many }) => ({
  usersToUpvotedMessages: many(usersToVotedMessages),
}));

export const messagesUpvotedRelations = relations(messages, ({ many }) => ({
  usersToUpvotedMessages: many(usersToVotedMessages),
}));

export const usersToUpvotedMessagesRelations = relations(
  usersToVotedMessages,
  ({ one }) => ({
    user: one(users, {
      fields: [usersToVotedMessages.steamID],
      references: [users.steamID],
    }),
    message: one(messages, {
      fields: [usersToVotedMessages.msgId],
      references: [messages.messageID],
    }),
  })
);
