import express from 'express';
import bodyParser from 'body-parser';
import routes from '../server/routes';

const app = express();

/** Mount all routes on /api path */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);
app.use((err, request, response, next) => {
    response.status(err.status)
        .json({
            status: err.status,
            message: err.message
        });
});


/**
 *  Exporting our app so it can be used as module
 */
export default app;