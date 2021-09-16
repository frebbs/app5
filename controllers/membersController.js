const dbUtils = require('../utils/dbUtils');

exports.getMembersHomePage = (req, res, next) => {
    res.render('members/index', {
        pageTitle: "Members page"
    })
}

exports.getMembersProfilePage  = async (req, res, next) => {

    res.render('members/profile', {
        pageTitle: "Members Profile",
        userProfile: await dbUtils.findLoggedInUser(req.session.profile.id)
    });
}