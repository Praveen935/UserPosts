const {User} = require('../database')

exports.users = function(req, res) {
    User.findAll()
        .then(data => {
            res.render('users', {title: 'Users', users: data})
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving posts."
            });
        });
};