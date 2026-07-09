import dotenv from 'dotenv';

dotenv.config();
//esta carpeta es todo la config del env mosca y ojo pelao
export const envConfig = {

  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',


  db: {
    path: process.env.DB_PATH || './data/upatanet.db',
  },


  jwt: {
    secret: process.env.JWT_SECRET || 'default_secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },


  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',


  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10),
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),
  },
};
