const User = require('../models/usersModel');
const bcrypt = require('bcrypt');
const SALT = 10

exports.postCreateNewUser = async(req, res, next) => {

    bcrypt.hash(req.body.password, SALT, (err, hash) => {

        if(err) {
            res.json({
                message: "There was an error",
                error: err
            })
        }
        const newUser = new User({
            username: req.body.username,
            password: hash
        })
        newUser.save()
            .catch(err => console.log(err))

        return res.render('login', {
            pageTitle: "Login Page",
            message: "Account Created, login with your new account"
        })
    })

}

exports.postAuthenticateUser = async (req, res, next) => {
    const {username, password} = req.body;

    if(!password) {
        return res.render('login', {
            pageTitle: "Login Page",
            message: "Please enter your password"
        })
    }

    await User.findOne({username})
        .then( (user) => {

            if(!user) {
                return res.render('login', {
                    pageTitle: "Login Page",
                    message: "Incorrect username or password"
                })
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.json({
                        message: "There was an error",
                        error: err
                    })
                }
                if(result) {
                    return res.redirect('/members')
                } else {
                    return res.render('login', {
                        pageTitle: "Login Page",
                        message: "Incorrect username or password"
                    })
                }
            })

        })
        .catch((err) => {
            console.log(err)
        })
}