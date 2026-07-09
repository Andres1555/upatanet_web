import app from './app';
import { envConfig } from './config/env.config';

const PORT = envConfig.port;

app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Entorno: ${envConfig.nodeEnv}`);
});
