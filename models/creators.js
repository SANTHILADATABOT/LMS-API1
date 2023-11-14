const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../lib/config/database");
const country = require("../models/country");
const companies = require("../models/companies");
const users = require("../models/users");

const Creators = sequelize.define(
  "lmscreators",
  {
    ctId: {
      type: DataTypes.INTEGER(100),
      autoInctement: true,
      primaryKey: true,
    },
    ctUUID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    ctName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctMail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctDesignation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ctAge: {
      type: DataTypes.INTEGER(100),
      autoInctement: false,
      allowNull: false,
    },
    ctGender:{
      type: DataTypes.ENUM("Male", "Female", "Others"),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
      defaultValue: 'Male',
    },
    ctStatus: {
      type: DataTypes.ENUM("Active", "Inactive"),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
      defaultValue: "Active",
    },
    ctCreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ctEditedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ctCreateAdminDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ctEditAdminDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ctDeleteStatus: {
      type: DataTypes.ENUM("NO", "YES"),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
      defaultValue: "NO",
    },
    ctIpAdderss: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: true,
    },
    ctDeviceType: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: true,
    },
    ctUserAgent: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    ctTimeStamp: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    freezeTableName: true, // Set freezeTableName option to true
  },
);

Creators.belongsTo(country, {
  foreignKey: 'countryId',
  targetKey: 'countryId'
});

Creators.belongsTo(companies, {
  foreignKey: 'companyId',
  targetKey: 'cpId'
});

Creators.belongsTo(users, {
  foreignKey: 'ctCreatedUserId',
  targetKey: 'id'
});

Creators.belongsTo(users, {
  foreignKey: 'ctEditedUserId',
  targetKey: 'id'
});

Creators.belongsTo(users, {
  foreignKey: 'ctCreateAdminUserId',
  targetKey: 'id'
});

Creators.belongsTo(users, {
  foreignKey: 'ctEditAdminUserId',
  targetKey: 'id'
});
//sequelize.sync();
//sequelize.sync({ force: false , alter : true })

sequelize.sync().then(() => {
  console.log('Creators table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
module.exports = Creators;