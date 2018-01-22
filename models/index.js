"use strict";

let fs        = require("fs");
let path      = require("path");
let Sequelize = require("sequelize");
let env       = process.env.NODE_ENV || "development";
let config    = require(__dirname + '/../config/config.json')[env];
let sequelize = new Sequelize('ugccberlin', 'root', '123321',  {  dialect: 'mysql' });
let db        = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        let model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;




/*
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // SQLite only
    storage: 'path/to/database.sqlite',

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
}); */