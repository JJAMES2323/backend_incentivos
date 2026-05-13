import { Pool } from 'pg';
import { env } from '../../config/env';

export const pool = new Pool ({
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    ssl: { rejectUnauthorized: false },
    family: 4,
});

pool.query('SELECT 1')
  .then(() => console.log('PostgreSQL conectado'))
  .catch((err) => console.error('Error PostgreSQL', err));