const db_name = process.env.DB || 'assignment'
const db_user = process.env.DB_USER || 'assignment'
const db_password = process.env.DB_PASSWORD || 'password'
const max_pool = process.env.DB_MAX_POOL || 5
const min_pool = process.env.DB_MIN_POOL || 0
const acquire = process.env.DB_POOL_ACQUIRE || 30000
const idle = process.env.DB_POOL_IDLE || 10000

const Sequelize = require('sequelize');
const UserModel = require('./models/user')
const PostModel = require('./models/post')

sequelize = new Sequelize(db_name, db_user, db_password, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: max_pool,
        min: min_pool,
        acquire: acquire,
        idle: idle
    }
});

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);

Post.belongsTo(User, {
    foreignKey: User.external_user_id
});

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })
    .catch(err=> console.log("Database sync failed: " + err.message))

module.exports = {User, Post, sequelize}



