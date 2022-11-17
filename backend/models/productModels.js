import Sequelize from 'sequelize';
import db from '../config/database.js';
import Users from './userModels.js';

const { DataTypes } = Sequelize;

const products = db.define('Products', {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
    }
  }
}, {
  freezeTableName: true,
})

Users.hasMany(products);
products.belongsTo(Users, {foreignKey: 'userId'})

export default products; 