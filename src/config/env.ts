import dotenv from 'dotenv';

dotenv.config();

export const env = {
    PORT: process.env.PORT!,

    DATABASE_URL: process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,

    JWT_SECRET: process.env.JWT_SECRET || 'secret',
}