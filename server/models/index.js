const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
    config.database, config.username, config.password, config
  );
}

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

db.users = require('../models/user.js')(sequelize, Sequelize);
db.categories = require('../models/category.js')(sequelize, Sequelize);
db.sessions = require('../models/session.js')(sequelize, Sequelize);

// associations
db.users.hasMany(db.sessions);
db.users.hasMany(db.categories);
db.sessions.belongsTo(db.users);
db.categories.belongsTo(db.users);

module.exports = db;

