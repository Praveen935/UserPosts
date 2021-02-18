const {Post} = require('../database')

exports.posts = function(req, res) {
    Post.findAll({where: { userId: req.params.userId}})
        .then(data => {
            res.render('posts', {title: 'Posts', posts: data})
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Could not fetch posts."
            });
        });
};