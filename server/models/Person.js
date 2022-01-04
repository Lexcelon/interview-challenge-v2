const { DataTypes, Model } = require('sequelize');
const sequelize = require('../util/SequelizeManager');

class Person extends Model {
  // any wanted custom functionality can go in here.
}

// This function creates the actual model definition.
Person.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Person', // We need to choose the model name
});

module.exports = Person;