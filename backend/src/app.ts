import * as path from 'path';

import express from 'express';
import logger from 'morgan';
import cors from 'cors';
// import rateLimit from 'express-rate-limit';

// Routes
import indexRouter from './routes/index';
import apiRouter from './routes/api';
// Create Express server
export const app = express();

// const apiLimiter = rateLimit({
// 	// 15 minutes
//   windowMs: 15 * 60 * 1000,
// 	// Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   max: 100,
// 	// Return rate limit info in the `RateLimit-*` headers
//   standardHeaders: true,
// 	// Disable the `X-RateLimit-*` headers
//   legacyHeaders: false,
// });

// Apply the rate limiting middleware to API calls only
// app.use('/api', apiLimiter)

// app.use('*', apiLimiter);

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(logger('dev'));

app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/api', apiRouter);
