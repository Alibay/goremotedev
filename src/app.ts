import express from 'express';
import config from 'config';
import router from './routes';
import errorHandler from './error/handler';
import ejsLayouts from 'express-ejs-layouts';
import { logger } from './factories/logger';

const app = express();
const port = config.get('port');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(ejsLayouts);
app.use(router);
app.use(errorHandler);

process.on('uncaughtException', (err) => {
  logger.fatal('Uncaught Exception', err);
})

app.listen(port, () => {
  logger.info(config, `Server's runnig on localhost:${port}`);
});
