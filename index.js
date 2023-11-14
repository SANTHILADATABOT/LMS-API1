/**
 * @design by milon27
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors')
const cookieparser = require('cookie-parser')
const ratelimiter = require('express-rate-limit')
const helmet = require('helmet');
const csrf_mid = require('./routers/middleware/csrf_mid');
const error_mid = require('./routers/middleware/error_mid');
const countryRoutes = require("./routers/country/country.routes");
const companyRoutes = require("./routers/companies/companies.routes");
const creatorsRoutes = require("./routers/creators/creators.routes");
const planRoutes = require('./routers/plan/plan.routes');
const { authenticateUser } = require("./lib/authentication/authorization");

const app = express();
/**
 * @middleware
 */
//url encode + json encode
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieparser());
//enable cros 
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }))
app.use(helmet());
//csrf
app.use(csrf_mid.csrfInit);
app.use(csrf_mid.csrfToken);

//rate limiter

/**
 * @routers
 */
app.get('/', (req, res) => {
    res.send('home')
})

//description use for all type DB tables @author milon27
app.use('/db', require('./routers/db/dbRouter'));
//@description auth (signup,login,logout,isLoggedIn) @author milon27
app.use (express.json ());
app.use('/auth', require('./routers/auth/authRouter'));
/*app.use (function (error, req, res, next){
    //Catch json error
    sendError (res, myCustomErrorMessage);
});*/

//@description use for all type of CRUD operation @author milon27
app.use('/data', csrf_mid.csrfProtection, require('./routers/data/dataRouter'));
//MILESTONE 1 Related Routes
app.use("/country", countryRoutes);
app.use("/companies", companyRoutes);
app.use("/plan", planRoutes);

//MILESTONE 2 Related Routes
app.use("/creators", creatorsRoutes);

//catch all error
app.use(error_mid);
const port = process.env.PORT || 2828;
app.listen(port, () => console.log(`running at http://localhost:${port} `))