exports.getIndexPage = (req, res, next) => {
    console.log(req.session)
    res.render('index', {
        pageTitle: 'Home Page'
    })
}

exports.getLoginPage = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login Page'
    })
}

exports.getCreateUserPage = (req, res, next) => {
    res.render('createUser', {
        pageTitle: 'Create User Page'
    })
}