const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller')

const router = express.Router();


// router.get('/bills', billController.getAllBills);

// router.get('/bills/:billId', billController.getUsersForBill)

// router.post("/routes/apiRoutes", billcontroller.postNewBill)

// router.delete("/routes/apiRoutes:id", billController.BillDelete)

// router.put("/routes/apiRoutes", billController.put)


router.get('/users', userController.getAllUsers)

router.get('/users/bills/', userController.getBillsForUser);

router.get('/users/email/', userController.getUserByEmail)

router.post('/users', userController.createUser)

router.post('/users/addbill', userController.addBillToUser)


module.exports = router;
