const {User, Post} = require('../database')
const fetch = require('node-fetch')
const base_url = 'http://jsonplaceholder.typicode.com/'

let response = fetch(base_url + 'users')
let user = response;

fetch(base_url+'users')
    .then(response => response.json())
    .then(users => {
        users.forEach(function (user) {
            user['external_user_id'] = user.id;
            delete user.id;
            User.upsert(user).then(data =>
                console.log("Successfully added user with name : " + data[0].dataValues.name)
            ).catch(err => console.log(err))
        });
    })
    .catch(err =>console.log("could not fetch user: " + err.message));

fetch(base_url+'posts')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(function (post) {
            post['external_post_id'] = post.id
            delete post.id;
            Post.upsert(post).then(data =>
                console.log("Successfully added post with name : " + data[0].dataValues.title)
            ).catch(err => console.log(err))
        });
    })
    .catch(err =>console.log("could not post: " + err.message));

