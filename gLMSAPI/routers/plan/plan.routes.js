const express = require('express');
const router = express.Router();
const { createplan,updatePlan,getPlan,deletePlan,getPlanById } = require('../../controllers/plan/plan.controllers');

router.post('/createplan',createplan);

router.put('/updateplan/:id',updatePlan);

router.put('/deleteplan/:id',deletePlan);

router.get('/getplan',getPlan);
router.get('/getPlanById/:id',getPlanById);

module.exports=router;

