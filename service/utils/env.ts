import dotenv from 'dotenv';

dotenv.config()

export const TOKEN_EXPIRES = process.env.TOKEN_EXPIRES as string;
export const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string;
export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string;