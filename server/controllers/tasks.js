import User from '../models/tasks';

function load(request, response, next, id) {
    Task.findById(id)
        .exec()
        .then((user) => {
            request.dbTask = task;
            return next();
        }, (e) => next(e));
};

function get(request, response) {
    return response.json(request.dbTask);
};

function create(request, response, next) {
    Task.create({
        username: request.body.username,
        description: req.body.description
    })
        .then((savedTask) => {
            return response.json(savedTask);
        }, (e) => next(e));
};

function update(request, response, next) {
    const task = request.dbTask;
    Object.assign(task, request.body);

    task.save()
        .then((savedTask) => response.status(204),
        (e) => next(e));
};

function list(request, response, next) {
    const { limit = 50, skip = 0 } = request.query;
    Task.find()
        .skip(skip)
        .limit(limit)
        .exex()
        .then((tasks) => response.json(tasks),
        (e) => next(e));
};

function remove(request, response, next) {
    const task = request.dbTask;
    task.remove()
        .then(() => response.status(204),
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