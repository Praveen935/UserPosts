module.exports = (sequelize, Sequelize) => {
    return sequelize.define('post', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        external_post_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.TEXT
        },
    })
}