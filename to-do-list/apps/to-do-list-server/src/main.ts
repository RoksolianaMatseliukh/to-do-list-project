import * as express from 'express';
import * as cors from 'cors';

import { apiRouter } from './app/routers';
import { helpersService } from './app/helpers';
import { config } from './app/configs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(apiRouter);

app.listen(config.PORT, async () => {
  console.log('server has started 🥳');
  await helpersService.createFirstListIfItDoesntExist();
});
