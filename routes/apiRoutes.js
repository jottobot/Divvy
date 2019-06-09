const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller')

const router = express.Router();


router.get('/bills', billController.getAllBills);



router.get('/users', userController.getAllUsers)

router.get('/users/email/:email', userController.getUserByEmail)

router.post('/users', userController.createUser)


module.exports = router;
