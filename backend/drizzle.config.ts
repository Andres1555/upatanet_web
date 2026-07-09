import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/database/schemas/schema.ts',
  out: './src/database/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_PATH || './src/upatanet.db',
  },
});
