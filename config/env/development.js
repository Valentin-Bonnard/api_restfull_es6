export default {
    name: 'API',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-es6-api-dev',
    jwtSecret: 'my-api-secret',
    jwtDuration: '2 hours'
};
