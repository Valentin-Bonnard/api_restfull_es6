export default {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://localhost:27017/node-es6',
    },
    jwtSecret: 'my-api-secret',
    jwtDuration: '2 hours'
}