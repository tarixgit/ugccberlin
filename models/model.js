const sequelize = require('sequelize');

"use strict";

module.exports = function(sequelize, DataTypes) {
    var Tarix = sequelize.define("Tarix", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // create one to many relationship
                User.hasMany(models.Post);
            }
        }
    });
    return Tarix;
};