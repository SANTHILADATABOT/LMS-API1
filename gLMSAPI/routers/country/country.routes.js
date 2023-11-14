const express = require('express');
const { addCountry, getAllCountry } = require('../../controllers/country/Country.controllers');
const router = express.Router();
router.post('/addcountry',addCountry);
router.get('/getAllCountries',getAllCountry);
module.exports = router;