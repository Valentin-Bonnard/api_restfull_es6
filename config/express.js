import express from 'express';
import bodyParse from 'body-parser';
import routes from '../server/routes';

const app = express();

/** Mount all routes on /api path */
app.use(bodyParse.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);


/**
 *  Exporting our app so it can be used as module
 */
export default app;