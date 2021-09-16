const User = require('../models/usersModel');

exports.postCreateNewUser = async(req, res, next) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    })
     await newUser.save()
         .catch(err => console.log(err))

    res.redirect('/login')
}

exports.postAuthenticateUser = async (req, res, next) => {
    const {username, password} = req.body;

    User.findOne({username})
        .then( (user) => {
            console.log(user)
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
}