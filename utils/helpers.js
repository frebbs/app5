exports.isAuthenticated = (req, res, next) => {
    if(!req.session.profile) {
        return res.render('login', {
            pageTitle: "Please Login",
            message: "You must be logged in to view this page"
        })
    } else {
        next()
    }
}