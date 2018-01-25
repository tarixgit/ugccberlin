const sequelize = require('sequelize');

"use strict";
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        admin: DataTypes.BOOLEAN,
        userId: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // create one to many relationship
                User.hasMany(models.Post);
            }
        }
    });
    return User;
};