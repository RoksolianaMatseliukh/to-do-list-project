import express from 'express';
import cors from 'cors';

import { apiRouter } from './routers';
import { helpersService } from './helpers';
import { config } from './configs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(apiRouter);

app.listen(config.PORT, async () => {
    console.log('server has started 🥳');
    await helpersService.createFirstListIfItDoesntExist();
});