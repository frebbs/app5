exports.getMembersHome = (req, res, next) => {
    res.render('members/index', {
        pageTitle: "Members page"
    })
}