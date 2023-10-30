const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize'); // Assuming your Sequelize connection is set up in a file like this

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
