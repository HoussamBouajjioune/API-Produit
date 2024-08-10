const { Sequelize } = require('sequelize');
const db = require("../config/dbconfig");

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
    host: db.HOST,
    dialect: 'mysql',
  });
  
  sequelize.sync({ force: false })
  .then(() => {
      console.log('Database synchronized');
  })
  .catch((error) => {
      console.error('Failed to synchronize database:', error);
  });
  
  
  module.exports = sequelize;