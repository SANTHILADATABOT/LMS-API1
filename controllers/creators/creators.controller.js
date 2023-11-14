const Creators = require("../../models/creators");
const { DataTypes, Sequelize } = require("sequelize");

const createCreator = async (req, res) => {
    console.log('REQ BODY : ' + JSON.stringify(req.body));

    try {
        const myToken = req.cookies["token"];
        //console.log('my Sess Tok : ' + myToken);
        if(myToken) {
            if (!req.body) {
                res.status(400).json({ status: "Failure", message: "Bad request" });
            } else {
                let maxCreatorRes =   await Creators.findAll({
                    attributes: [Sequelize.fn('max', Sequelize.col('ctId')), 'ctId'],
                    raw: true,
                }).then(function(creatorRes){
                    console.log('maxCreator : ' + JSON.stringify(creatorRes) + ' CT ID  : ' + creatorRes['ctId'] + ' DOT NOT : ' + creatorRes.ctId);
                 })
                 .error(function(error){
                    console.log('error ');
                 });;
                
                console.log('MAXCREATORID : ' + maxCreatorRes.ctId);
                if(!maxCreatorRes.ctId) {
                    req.body.ctId   =   1;
                } else {
                    req.body.ctId   =   maxCreatorRes.ctId + 1;
                }

                const crypto = require('crypto');
                //console.log('GIRISH 1 HERE DEV TYPE : ' + req.device.type);
                req.body.ctCreatedDate = Date.now();
                req.body.ctStatus   =   true;
                req.body.ctDeleteStatus =   false;
                req.body.ctIpAddress    =   req.connection.remoteAddress;
                req.body.ctUserAgent    =   req.headers["user-agent"];
                //req.body.ctDeviceType =   req.device.type;
                
                req.body.ctTimeStamp    =   Date.now();
                req.body.ctUUID =   crypto.randomUUID();

                try {
                    const data  =   await Creators.create(req.body);
                    res.status(200).json({status: "Succes", message: "Creator details captured successfully", data: data});
                } catch (err) {
                    res.status(500).json({status: "Failure", message: "Error in inserting creator details",err: err});
                }
            }
        } else {
            res.status(401).json({ status: "Failure", message: "Unauthorized access." });
        }
    } catch (err) {
        res.status(500).json({status: "Failure", message: "Error in accessing the insert process of creator API",err: err});
    }
};

const getCreators = async (req,res) => {
    try{
        let data = await Creators.findAll();

        if(!data) {
            res.status(404).json({status: "Failure", message: "Bad request"});
        } else {
            res.status(200).json({status: "Succes",message: "List Of All Creator Details.",data: data});
        }
    } catch(err) {
        res.status(500).json({status: "Failure", message: "oops! something went wrong",err: err});
    }
}

const updateCreator = async (req,res) => {
    try{
        const id = req.params.id;
        if(!id && !req.body) {
            res.status(404).json({status:'Failure',message:'Bad Request'})
        } else{
            const data = await Creators.findOne({ where:{cpId:id}});

            if(!data) {
                res.status(404).json({status:'Failure',message:'Creators Not Found'})  
            } else{
                data.set({
                    ctName:req.body.ctName,
                    ctMail:req.body.ctMail,
                    ctDesignation:req.body.ctDesignation,
                    ctAge:req.body.ctAge,
                    ctGender:req.body.ctGender,
                    cpEditedUserId:req.body.cpEditedUserId,
                    cpCreatedUserId:req.body.ctCreatedUserId,
                    ctIpAdderss:req.body.ctIpAdderss,
                    ctDeviceType:req.body.ctDeviceType,
                    ctUserAgent:req.body.ctUserAgent,
                    ctTimeStamp:req.body.ctTimeStamp,
                });
                await data.save();
                res.status(200).json({status: "Succes",message: "Data updated in the Database"}); 
            }
        }
    } catch(err) {
        res.status(500).json({status: "Failure", message: "oops! something went wrong",err: err});
    }
}

module.exports = { createCreator, getCreators, updateCreator };
