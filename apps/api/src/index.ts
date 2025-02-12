import { Context, Elysia } from "elysia";
import {authController} from './controller/auth';
import { Env } from "bun";

const app = new Elysia({aot: false})
.get("/", () => "Hello Elysia")
.use(authController)



export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,
    
  ): Promise<Response> {

    return await app.fetch(request)
  },
}