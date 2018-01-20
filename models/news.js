const sequelize = require('sequelize');

"use strict";
module.exports = function(sequelize, DataTypes) {
    var New = sequelize.define("New", {
        title: DataTypes.STRING,
        text: DataTypes.TEXT,
        date: DataTypes.DATE,
        user: DataTypes.STRING,
    }, {
    });
    return New;
};