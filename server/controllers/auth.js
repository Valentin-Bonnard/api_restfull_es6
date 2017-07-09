import jwt from 'jwtwebtoken';
import config from '../../config/env';
import User from './models/user';


function anthenticate(response, request, next) {
    User.findOne({
        username: request.body.username
    })
        .exec()
        .then((user) => {
            user.comparePassword(request.body.password, (e, isMatch) => {
                if (e) return next(e);
                if (isMatch) {
                    request.user = user;
                    next();
                } else return next();
            });
        }, (e) => next(e))
};

function generateToken(request, response, next) {
    if (!request.user) return next();

    const jwtPayload = {
        id: request.user._id
    },
        jwtData = {
            expireIn: config.jwtDuration,
        },
        secret = config.jwtSecret;

    request.token = jwt.sign(jwtPayload, secret, jwtData);

    next();
};


function responseJwt(request, response) {
    if (!request.user) {
        response.status(401).json({
            error: 'Unauthorized'
        });
    } else {
        res.status(200).json({
            jwt: request.token
        });
    }
};

export default {
    authenticate, generateToken, responseJwt
};