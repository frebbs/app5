const pingDBUtils = require('../utils/pingDBUtils');

exports.postCreatePing = (req, res, next) => {
    const {title, body} = req.body

    const userPing = pingDBUtils.createUserPing(title, body, req.session.profile.id)

    userPing.save()
        .catch(err => {
            console.log(err)
        })

    res.redirect('/members')
}