const dbUtils = require('../utils/userDBUtils');

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

exports.getCreatePingPage = (req, res, next) => {
    res.render('members/createPing', {
        pageTitle: "Create Ping"
    });
}