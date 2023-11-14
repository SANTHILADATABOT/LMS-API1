const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../lib/config/database");

const Company = sequelize.define(
  "lmscompany",
  {
    cpId: {
      type: DataTypes.INTEGER(100),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    cpUUID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    cpCompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpAdminName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpAdminMail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpIndustry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpCountry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpCreatedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpEditedUserId: {
      type: DataTypes.INTEGER,
    },
    cpCreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cpEditedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cpStatus: {
      type: DataTypes.BOOLEAN,
    },
    cpDeleteStatus: {
      type: DataTypes.BOOLEAN,
    },
    cpIpAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpDeviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpUserAgent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cpTimeStamp: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // Set freezeTableName option to true
  },
);

sequelize.sync().then(() => {
    console.log('Companies table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = Company;