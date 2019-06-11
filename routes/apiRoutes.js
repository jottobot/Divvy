const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller')

const router = express.Router();


router.get('/bills', billController.getAllBills);

<<<<<<< HEAD
// router.get('/bills/:billId', billController.getUsersForBill)


router.get('/users', userController.getAllUsers)

router.get('/users/bills/', userController.getBillsForUser);

router.get('/users/email/', userController.getUserByEmail)

router.post('/users', userController.createUser)

router.post('/users/addbill', userController.addBillToUser)


=======
router.post("/routes/apiRoutes", billcontroller.postNewBill)

router.delete("/routes/apiRoutes:id", billController.BillDelete)
router.put("/routes/apiRoutes", billController.put)
>>>>>>> 27cff595892c87e6e9613cb17628dbf6c3f870ab
module.exports = router;
