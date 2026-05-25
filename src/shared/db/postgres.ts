import { Pool } from 'pg';
import { env } from '../../config/env';

const ssl = !env.DATABASE_URL.includes('localhost')
  ? { rejectUnauthorized: false }
  : false;

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl,
});

pool.query('SELECT 1')
  .then(() => console.log('PostgreSQL conectado'))
  .catch((err) => console.error('Error PostgreSQL', err));