import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Storyku = db.define('Storyku', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  writer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
    story_cover: {
    type: DataTypes.STRING,
    allowNull: false
  },
  keyword: {
    type: DataTypes.STRING, // Simpan keyword sebagai string yang dipisahkan koma
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('Draft', 'Publish'), // ENUM untuk status
    allowNull: false,
    defaultValue: 'Draft'
  }
}, {
  tableName: 'storyku', // Nama tabel di database
  timestamps: false // Atur ke true jika memerlukan createdAt dan updatedAt
});

export default Storyku;
