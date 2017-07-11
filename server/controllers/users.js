import User from '../models/user';

function load(request, response, next, id) {
    User.findById(id)
        .exec()
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    status: 400,
                    message: "User not found"
                });
            }
            req.dbUser = user;
            return next();
        }, (e) => next(e));
};

function get(request, response) {
    return response.json(request.dbUser);
};

function create(request, response, next) {
    User.create({
        username: request.body.username,
        password: request.body.password
    })
        .then((savedUser) => {
            return response.json(savedUser);
        }, (e) => next(e));
};

function update(request, response, next) {
    const user = request.dbUser;
    Object.assign(user, request.body);

    user.save()
        .then(() => response.sendStatus(204),
        (e) => next(e));
};

function list(request, response, next) {
    const { limit = 50, skip = 0 } = request.query;
    User.find()
        .skip(skip)
        .limit(limit)
        .exex()
        .then((users) => response.json(users),
        (e) => next(e));
};

function remove(request, response, next) {
    const user = request.dbUser;
    user.remove()
        .then(() => response.sendStatus(204),
        (e) => next(e));
};

export default {
    load,
    get,
    create,
    update,
    list,
    remove
};