const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller')

const router = express.Router();


router.get('/bills', billController.getAllBills);

router.get('/bills/:billId', billController.getUsersForBill)

router.post("/bills/create", billController.postNewBill)

router.delete("/bills/delete/:id", billController.billDelete)

router.put("/bills/update", billController.update)


router.get('/users', userController.getAllUsers)

router.get('/users/bills/', userController.getBillsForUser);

router.get('/users/email/', userController.getUserByEmail)

router.post('/users', userController.createUser)

router.post('/users/addbill', userController.addBillToUser)


module.exports = router;
