export default {
    name: 'TEST',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'test',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://localhost:27017/node-es6-test',
    },
    jwtSecret: 'my-api-secret',
    jwtDuration: '2 hours'
};