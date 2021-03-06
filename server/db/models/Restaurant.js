const Sequelize = require('sequelize');
const db = require('../db');


const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: 1,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: 1,
    },
  },
  // Google MAPS API ATTRIBUTES
  // ratings tenative
  ratings: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: 1,
    },
  },

  priceLevel: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      len: 1,
    },
  },
  hoursOfOperation: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: 1,
    },
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      len: 1,
    },
  },
});

module.exports = Restaurant;
