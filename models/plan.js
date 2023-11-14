const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../lib/config/database");

const LmsPlan = sequelize.define(
  "Lmsplan",
  {
    plId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    plPlan: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    plPlanType: {
      type: DataTypes.ENUM("Days", "Month", "Year"),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    plValidityDays: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
    },
    plPrice: {
      type: DataTypes.INTEGER(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    plCreatedUserId: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
    },
    plEidtedUserId: {
      type: DataTypes.BIGINT(20),
      allowNull: true,
    },
    plCreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    plEidtedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    plStatus: {
      type: DataTypes.ENUM("Active", "Inactive"),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
      defaultValue: "Active",
    },
    plDeleteStatus: {
      type: DataTypes.ENUM("NO", "YES"),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
      defaultValue: "NO",
    },
    plIpAdderss: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    plDeviceType: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    plUserAgent: {
      type: DataTypes.STRING(100),
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      allowNull: false,
    },
    plTimeStamp: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true, // Set freezeTableName option to true
  }
);
//sequelize.sync({ force: false , alter : true })

sequelize
  .sync()
  .then(() => {
    console.log("Lmsplan table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
module.exports = LmsPlan;
