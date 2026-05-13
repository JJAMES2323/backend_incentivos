import 'module-alias/register';
import app from './app';
import './shared/db/postgres';
import { env } from './config/env';

const PORT = env.PORT;

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(` Servidor corriendo en puerto ${PORT}`);
});

