import { Pool } from 'pg';
import { env } from '../../config/env';

export const pool = new Pool({
  connectionString: `postgresql://${env.DB_USER}:${encodeURIComponent(env.DB_PASSWORD)}@${env.DB_HOST}:${Number(env.DB_PORT)}/${env.DB_NAME}?sslmode=require`,
  ssl: { rejectUnauthorized: false },
});

pool.query('SELECT 1')
  .then(() => console.log('PostgreSQL conectado'))
  .catch((err) => console.error('Error PostgreSQL', err));