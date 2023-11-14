const LmsPlan = require("../../models/plan");

//  create route
const createplan = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ status: "Failure", message: "Bad request" });
    } else {
      req.body.plCreatedDate = Date.now();
      // req.body.plEidtedDate = Date.now();
      req.body.plDeleteStatus = false;
      req.body.plIpAdderss = req.connection.remoteAddress;
      req.body.plUserAgent = req.headers["user-agent"];
      req.body.plDeviceType = req.device.type;
      req.body.plTimeStamp = Date.now();
      const data = await LmsPlan.create(req.body);
      res.status(200).json({
        status: "Succes",
        message: "Data Stored into the DataBase",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failure",
      message: "oops! something went wrong",
      err: err,
    });
  }
};

//  edit route
const updatePlan = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const record = await LmsPlan.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }

    const updatedRecord = await record.update(data);

    res
      .status(200)
      .json({ success: "Data Updated Successfully", result: updatedRecord });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", err: error });
  }
};

// Example delete route
const deletePlan = async (req, res) => {
  try {
    const id = req.params.id;
    const data = { plDeleteStatus: "YES" }; // Define the data to update plDeleteStatus
    const record = await LmsPlan.findByPk(id);
    if (!record) {
      return res.status(404).json({ error: "Record not found" });
    }
    const updatedRecord = await record.update(data);
    res.status(200).json({
      success: "Record Successfully Marked as Deleted",
      result: updatedRecord,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", err: error });
  }
};

const { Op } = require("sequelize");

const getPlan = async (req, res) => {
  try {
    const { count, rows: allData } = await LmsPlan.findAndCountAll({
      where: {
        [Op.and]: [
          {
            plDeleteStatus: {
              [Op.or]: {
                [Op.not]: "Yes",
                [Op.is]: null,
              },
            },
          },
        ],
      },
    });

    if (count === 0) {
      return res.status(404).json({ error: "No records found" });
    }

    res.status(200).json({
      success: "All Data Retrieved Successfully",
      data: allData,
      count: count,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", err: error });
  }
};

const getPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID parameter is required" });
    }

    // Fetch data for the specific item based on the provided ID
    const specificData = await LmsPlan.findByPk(id);

    if (!specificData) {
      return res.status(404).json({ error: "Record not found" });
    }

    res
      .status(200)
      .json({ success: "Data Retrieved Successfully", data: specificData });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", err: error });
  }
};

module.exports = { createplan, updatePlan, deletePlan, getPlan, getPlanById };
