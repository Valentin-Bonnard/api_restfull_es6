import express from 'express';
import expressValidation from 'express-validation';
import bodyParser from 'body-parser';
import routes from '../server/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount all routes on /api path
app.use('/api', routes);

app.use((err, request, response, next) => {
  if (err instanceof expressValidation.ValidationError) {
    response.status(err.status).json(err);
  } else {
    response.status(500)
      .json({
        status: err.status,
        message: err.message
      });
  }
});

/**
 *  Exporting our app so it can be used as module
 */

export default app;