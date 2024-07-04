import path from 'path';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

//Authorization
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

export const JWT_SECRET = 'JWT_SECRET';
export const APP_DOMAIN = 'APP_DOMAIN';

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

//multers
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

//CLOUDINARY
export const CLOUDINARY = {
  CLOUD_NAME: 'CLOUD_NAME',
  API_KEY: 'API_KEY',
  API_SECRET: 'API_SECRET',
};

export const ENABLE_CLOUDINARY = 'ENABLE_CLOUDINARY';
