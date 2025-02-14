import { defineConfig } from "drizzle-kit";



export default defineConfig({
  out: './drizzle',
  dialect: 'sqlite', 
  schema: './apps/api/src/db/schema',
  driver: 'd1-http',
  verbose: true,
  tablesFilter: ["!_cf_KV"],
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
})