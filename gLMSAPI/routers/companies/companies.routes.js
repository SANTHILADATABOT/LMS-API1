const express = require('express');
const { createCompany, getCompanies, updateCompany } = require('../../controllers/companies/companies.controller');
const router = express.Router();

router.post('/create', createCompany);
router.get('/getAllCompany', getCompanies);
router.put('/updateCompany/:id', updateCompany);
module.exports = router;