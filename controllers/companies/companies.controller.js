const Company = require("../../models/companies");

const createCompany = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ status: "Failure", message: "Bad request" });
    } else {
      req.body.cpCreatedDate = Date.now();
      req.body.cpEditedDate = Date.now(); 
      req.body.cpStatus = true;
      req.body.cpDeleteStatus = false;
      req.body.cpIpAddress = req.connection.remoteAddress;
      req.body.cpUserAgent = req.headers["user-agent"];
      req.body.cpDeviceType = req.device.type;
      req.body.cpTimeStamp = Date.now();
      const data = await Company.create(req.body);
      res.status(200).json({status: "Succes",message: "Data Stored into the DataBase",data: data});
    }
  } catch (err) {
    res.status(500).json({status: "Failure", message: "oops! something went wrong",err: err});
  }
};
const getCompanies = async (req,res) => {
    try{
        let data = await Company.findAll();
        if(!data)
        {
            res.status(404).json({status: "Failure", message: "Bad request"});
        }
        else{
            res.status(200).json({status: "Succes",message: "No Company details exists.",data: data});
        }
    }
    catch(err)
    {
        res.status(500).json({status: "Failure", message: "oops! something went wrong",err: err});
    }
}
const updateCompany = async (req,res) => {
    try{
        const id = req.params.id;
        if(!id && !req.body)
        {
            res.status(404).json({status:'Failure',message:'Bad Request'})
        }
        else{
            const data = await Company.findOne({ where:{cpId:id}});
            if(!data)
            {
                res.status(404).json({status:'Failure',message:'Company Not Found'})  
            }
            else{
                data.set({
                    cpCompanyName:req.body.cpCompanyName,
                    cpAdminName:req.body.cpAdminName,
                    cpAdminMail:req.body.cpAdminMail,
                    cpIndustry:req.body.cpIndustry,
                    cpCountry:req.body.cpCountry,
                    cpCreatedUserId:req.body.cpCreatedUserId,
                    cpEditedUserId:req.body.cpEditedUserId,
                });
                await data.save();
                res.status(200).json({status: "Succes",message: "Data updated in the DataBase"}); 
            }
        }
    }
    catch(err)
    {
        res.status(500).json({status: "Failure", message: "oops! something went wrong",err: err});
    }
}
module.exports = { createCompany, getCompanies, updateCompany };
