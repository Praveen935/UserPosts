const express = require("express");
const app = express();
app.use(express.json());
app.set('view engine', 'pug');
const {sequelize} = require('./database');
posts_controller = require('./controllers/posts');
users_controller = require('./controllers/users');

const userRouter = express.Router();
const postsRouter = express.Router({mergeParams: true});
userRouter.use('/:userId/posts', postsRouter);
userRouter.get("/users", users_controller.users);

userRouter.route('/')
    .get(users_controller.users);

postsRouter.route('/')
    .get(posts_controller.posts);

app.use('/users', userRouter);

// test db connection
sequelize.authenticate()
    .then(()=>console.log("database connected"))
    .catch(err=>console.log("failed"))

const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("server is running");
});
