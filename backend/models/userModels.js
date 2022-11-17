import Sequelize from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Users = db.define('users', {
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
      len: [3, 100] // length of character [min, max]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
    }
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false, //artinya field ini tidak boleh kosong
    validate: {
      notEmpty: true,
    }
  }
}, {
  freezeTableName: true,
})

export default Users; 