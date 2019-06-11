const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller')

const router = express.Router();


router.get('/bills', billController.getAllBills);

router.post("/routes/apiRoutes", billcontroller.postNewBill)

router.delete("/routes/apiRoutes:id", billController.BillDelete)
router.put("/routes/apiRoutes", billController.put)
module.exports = router;
