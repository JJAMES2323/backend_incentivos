import { Pool } from 'pg';
import { env } from '../../config/env';

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.query('SELECT 1')
  .then(() => console.log('PostgreSQL conectado'))
  .catch((err) => console.error('Error PostgreSQL', err));