import sequelize from '../config/sequelize.js';
import { DataTypes } from "sequelize";

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, 
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
          }
  },
  nama_lengkap: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  no_hp: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

export default User;