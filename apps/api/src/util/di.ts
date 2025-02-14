import Container from 'typedi';
import type { DrizzleD1Database } from 'drizzle-orm/d1'


import * as schema from "../db/schema"    


export const getDB = () => Container.get<DrizzleD1Database<typeof schema>>('DrizzleDB')