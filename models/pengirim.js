import sequelize from '../config/sequelize.js';
import { DataTypes } from "sequelize";

const pengirim = sequelize.define('pengirim', {
    id_pengirim: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
    },
    nama_pengirim: {
      type: DataTypes.STRING,
      allowNull: false,
          validate:{
              notEmpty: true,
              len: [3, 100]
            }
    },
    notelp_pengirim: {
      type: DataTypes.INTEGER,
      allowNull: false,
          validate:{
              notEmpty: true,
              len: [3, 15]
            }
    },
    email_pengirim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat_penjemputan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    id: {
      type: DataTypes.INTEGER,
    }
  });
  
  export default pengirim;