import { Pool } from 'pg';
import { env } from '../../config/env';

const TZ = 'America/Bogota';

const ssl = !env.DATABASE_URL.includes('localhost')
  ? { rejectUnauthorized: false }
  : false;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl,
});

pool.on('connect', async (client) => {
  await client.query(`SET timezone = '${TZ}'`);
});

pool.query('SELECT 1')
  .then(() => console.log(`PostgreSQL conectado (timezone: ${TZ})`))
  .catch((err) => console.error('Error PostgreSQL', err));