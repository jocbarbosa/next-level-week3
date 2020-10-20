import express from 'express';
import path from 'path';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './helpers/errors/handler';

import './database/connection';
const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(process.env.PORT || 3333);