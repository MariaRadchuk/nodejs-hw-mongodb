import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/constants.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import { createDirIfNotExist } from './utils/createDirIfNotExist.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    await createDirIfNotExist(TEMP_UPLOAD_DIR);
    await createDirIfNotExist(UPLOAD_DIR);
    setupServer();
  } catch (error) {
    console.error('Failed to initialize MongoDB connection:', error);
    process.exit(1);
  }
};

bootstrap();
