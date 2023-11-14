/**
 * @design by milon27
 */
const bcryptjs = require('bcryptjs')
//const AuthModel = require('../../models/auth/AuthModel')
const Response = require('../../models/Response')
const DB_Define = require('../../utils/DB_Define')
const Define = require('../../utils/Define')
const Helper = require('../../utils/Helper')
const Users = require("../../models/users");

const AuthController = {
    /**
     * @description  
     * get email, name, pass from req.body
     * do validatioin
     * ck already have an account or not(mySql Optional,Mongo required)
     * create password hash,save into database
     * generate a jwt access token,set into http cookie
     * return new user object as response
     * @param { email, name, pass} =req.body
     * @response {error(boolean), message(String), response(object:USER)}
     */
    signUp: async (req, res) => {
        try {
            const { email, name, pass } = req.body
            //validatioin
            if (!email || !name || !pass) {
                throw new Error("Enter email,name,pass")
            }
            if (pass.length < 6) {
                throw new Error("pass length should be atleast 6 char.")
            }
            //get hash pass & save new user into db
            const hashpass = await bcryptjs.hash(pass, await bcryptjs.genSalt(10))
            const user = {
                email,
                name,
                pass: hashpass
            }
            new AuthModel().addData(DB_Define.USERS_TABLE, user, (err, results) => {
                if (err) {
                    let response = new Response(true, err.message, err);
                    res.send(response);
                } else {
                    //get token and set into cookie
                    const token = Helper.getJWTtoken(email)
                    //send token in http cookie with no expire
                    res.cookie(Define.TOKEN, token, Define.SESSION_COOKIE_OPTION)
                    delete user.pass
                    user['id'] = results.insertId
                    user['token'] = token
                    res.status(200).json(new Response(false, "user created successfully", user))
                }
            })//end db
        } catch (e) {
            let response = new Response(true, e.message, e);
            res.send(response);
        }

    },//end create user.
    login: async (req, res) => {
        try {
            //const { lmsEmail, lmsPass } = req.body;
            const lmsEmail   =   req.body.email;
            const lmsPass    =   req.body.password;
            console.log('email : ' + lmsEmail + ' pass : ' + lmsPass);
            const crypto = require('crypto');
            console.log('UUID :' + crypto.randomUUID());
            //validatioin
            /*if (!lmsEmail || !lmsPass) {
                console.log('Girish here');
                throw new Error("Enter email, password")
            }*/
            const data = await Users.findOne({where: { email: lmsEmail} , attributes: ['UUID', 'password', 'first_name', 'last_name'], });//{attributes: ['id', 'UUID', 'first_name', 'last_name']
            try {
                if(!data) {
                    res.status(404).json({status:'Failure',message:'Invalid Login'})
                } else{
                    const user = data;
                    const ckPass = await bcryptjs.compare(lmsPass, user.password);

                    if (!ckPass) {
                        throw new Error("Wrong email or password")
                    } else {
                        console.log('user' + JSON.stringify(user));
                        //get token and set into cookie
                        const token = Helper.getJWTtoken(lmsEmail);
                        console.log('token : ' + token);
                        //send token in http cookie
                        res.cookie(Define.TOKEN, token, Define.SESSION_COOKIE_OPTION)
                        user['password']    =   token;
                        //user['token']   =   token;
                        res.status(200).json(new Response(false, "user logged in successfully", user))
                    }
                }
            } catch (e) {
                console.log('Girish here 1');
                let response    =   new Response(true, e.message, e);
                res.send(response);
            }
        } catch (e) {
            let response    =   new Response(true, e.message, e);
            res.send(response);
        }
    },//login
    logout: (req, res) => {
        res.cookie(Define.TOKEN, "", Define.LOGOUT_COOKIE_OPTION)
        res.status(200).json(new Response(false, "user logged out", {}))
    },//logout
    isLoggedIn: (req, res) => {
        try {
            const token =   req.cookies.token

            if (!token) {
                throw new Error("Unauthorized Access")
            }

            //token validation
            Helper.verifyJWTtoken(token)
            res.send(true)// logged in
        } catch (e) {
            //remove the old/expire token
            res.cookie("token", "", Define.LOGOUT_COOKIE_OPTION)
            res.send(false)//not logged in
        }
    },//isLoggedIn
}

module.exports = AuthController