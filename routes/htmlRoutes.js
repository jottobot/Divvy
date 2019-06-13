const express = require('express');
const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller');
const htmlController = require('../controllers/html-controller');

const router = express.Router();

// Load index page
router.get('/', htmlController.index);

// Load example page and pass in an example by id
router.get('/example/:id', htmlController.example);

// Render 404 page for any unmatched routes
router.get('*', htmlController.notARoute);


module.exports = router;