import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_H8cvzT0MmpYW@ep-young-fire-a1zkgds3-pooler.ap-southeast-1.aws.neon.tech/ai-room-redesign?sslmode=require&channel_binding=require',
  },
});