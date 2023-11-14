const express = require('express');
const { createCreator, getCreators, updateCreator } = require('../../controllers/creators/creators.controller');
const router = express.Router();

router.post('/create', createCreator);
router.get('/getAllCreators',getCreators);
router.get('/getAllCreatorsByCompany',getCreators);
router.put('/updateCreator/:id',updateCreator);
module.exports = router;