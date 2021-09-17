const Ping = require('../models/pingModel');

exports.createUserPing = (title, body, id) => {
    return new Ping({
        title: title,
        body: body,
        user: id
    })
}