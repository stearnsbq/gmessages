import { jwt } from '@elysiajs/jwt'
import Elysia from 'elysia'


export default new Elysia({aot: false})
.use(jwt({name: 'jwt', exp: '1y', secret: process.env.JWT_SECRET || 'default-secret'}))
