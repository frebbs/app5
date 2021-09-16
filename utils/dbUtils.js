const User = require('../models/usersModel');

exports.findLoggedInUser = (id) => {
    return User.findById(id)
        .then((user) => {
            return {
                username: user.username,
                profileID: user._id.toString(),
                createdAt: user.createdAt
            };
        })
        .catch((err) => {
            console.log(err)
        })
}