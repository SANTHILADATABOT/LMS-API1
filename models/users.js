const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../lib/config/database");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    UUID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
  },
  {
    timestamps: true, 
  }
);
//sequelize.sync();
//sequelize.sync({ force: false , alter : true })

sequelize.sync().then(() => {
    console.log('users table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = Users;