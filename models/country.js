const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../lib/config/database");

const Country = sequelize.define(
  "country",
  {
    countryId: {
      type: DataTypes.INTEGER(100),
      autoInctement: true,
      allowNull: false,
      primaryKey: true,
    },
    countryUUID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: false,
    },
    countryCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    isEnable: {
      type: DataTypes.BOOLEAN,
    },
    dialCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, 
  }
);
sequelize.sync({ force: false , alter : true })
sequelize.sync().then(() => {
    console.log('Country table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = Country;