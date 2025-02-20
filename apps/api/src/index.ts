import { Context, Elysia } from "elysia";
import {authController} from './controller/auth.controller';
import {msgController} from './controller/messages.controller';
import { AnyD1Database, drizzle } from 'drizzle-orm/d1';
import Container from "typedi";
import { jwt } from '@elysiajs/jwt'
import * as schema from "./db/schema"  

const app = new Elysia({aot: false})
.use(jwt({name: 'jwt', secret: process.env.JWT_SECRET || 'default-secret'}))
.use(authController)
.use(msgController)


export interface Env {
  DB: AnyD1Database;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,
    
  ): Promise<Response> {

    const db = drizzle(env.DB, {schema});

    Container.set('DrizzleDB', db);
    Container.set('env', env)


    return await app.fetch(request)
  },
}