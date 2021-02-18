module.exports = (sequelize, Sequelize) => {
    return sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        external_user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        address: {
            type: Sequelize.JSON
        },
        phone: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.JSON
        }
    })
}