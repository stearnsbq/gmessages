import { messages } from "./messages";
import { maps } from "./maps";
import { tokens } from "./tokens";
import { users } from "./users";

export type Messages = typeof messages.$inferSelect;
export type Maps = typeof maps.$inferSelect;
export type Tokens = typeof tokens.$inferSelect;
export type Users = typeof users.$inferSelect;