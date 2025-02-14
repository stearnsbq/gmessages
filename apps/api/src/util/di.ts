import Container from 'typedi';
import type { DrizzleD1Database } from 'drizzle-orm/d1'

export const getDB = () => Container.get<DrizzleD1Database<typeof import('../db/schema/index')>>('DrizzleDB')