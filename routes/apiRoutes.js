const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller');

const router = express.Router();


// ***********************************************************
// API Documentation ROUTES
// ***********************************************************

// Get request for api documentation
router.use('/', express.static(__dirname + '../../apidoc'));



// ***********************************************************
// BILL ROUTES
// ***********************************************************


router.get('/bills', billController.getAllBills);
/**
 * @api {get} /bills/ Get all bills as array
 * @apiName GetAllBills
 * @apiGroup Bill
 *
 * @apiSuccessExample Success-Response -> return array of all bills. Return empty array if no bills exist:
 *     HTTP/1.1 200 OK
 *     [
    {
        "id": 1,
        "title": "water",
        "Company": "PSE",
        "Amount": "301",
        "BillDue": "2019-06-11T04:11:06.000Z",
        "BillPaid": false,
        "createdAt": "2019-06-11T04:11:06.000Z",
        "updatedAt": "2019-06-11T04:11:06.000Z"
    }
]
 */


router.get('/bills/:billId', billController.getUsersForBill);
/**
 * @api {get} /bills/:billId Get all users for bill id
 * @apiName getUsersForBill
 * @apiGroup Bill
 *
 * @apiParam {Number} billId Bills unique ID.
 *
 * @apiSuccessExample Success-Response -> returns array of users for the bill id:
 *     HTTP/1.1 200 OK
 *[
 *   {
 *       "id": 1,
 *       "firstName": "Bobby",
 *       "lastName": "Jones",
 *       "email": "Bobby@email.com",
 *       "phoneNumber": "206999999",
 *       "createdAt": "2019-06-11T04:11:06.000Z",
 *       "updatedAt": "2019-06-11T04:11:06.000Z",
 *       "UserBill": {
 *           "percentOwed": 67,
 *           "createdAt": "2019-06-11T04:13:57.000Z",
 *           "updatedAt": "2019-06-11T04:13:57.000Z",
 *           "BillId": 1,
 *           "UserId": 1
 *       }
 *   }
*]
*
*/


router.post('/bills', billController.postNewBill);
/**
 * @api {post} /bills/ Create new bill
 * @apiName postNewBill
 * @apiGroup Bill
 *
 * @apiParam {String} title Title of bill
 * @apiParam {String} Company Company name for bill
 * @apiParam {Number} Amount Bill amount as number
 * @apiParam {Date} BillDue Bill due date must be Date object
 * @apiParam {Boolean} BillPaid Bill has been fully paid
 *
 * @apiExample Request body new bill object example usage:
  *   {
  *  title: "water",
  *  Company: "PSE",
  *  Amount: 300.5,
  *  BillDue: Date.now(),
  *  BillPaid: false,
  * }
  *
  * @apiSuccessExample Success-Response -> Returns newly created bill object
  * {
  *  "id": 5,
  *  "title": "water",
  *  "Company": "PSE",
  *  "Amount": 300.5,
  *  "BillDue": "2019-06-11T04:13:57.000Z",
  *  "BillPaid": false,
  *  "updatedAt": "2019-06-12T17:22:09.454Z",
  *  "createdAt": "2019-06-12T17:22:09.454Z"
  *}
  *
  * @apiErrorExample Error-Response Example:
 *     {
    "name": "SequelizeDatabaseError",
    "parent": {
        "code": "ER_TRUNCATED_WRONG_VALUE",
        "errno": 1292,
        "sqlState": "22007",
        "sqlMessage": "Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1",
        "sql": "UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?"
    },
    "original": {
        "code": "ER_TRUNCATED_WRONG_VALUE",
        "errno": 1292,
        "sqlState": "22007",
        "sqlMessage": "Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1",
        "sql": "UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?"
    },
    "sql": "UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?"
}
 */


router.delete('/bills/delete/:id', billController.billDelete);
/**
 * @api {delete} /bills/delete/:billId Delete bill with bill id
 * @apiName billDelete
 * @apiGroup Bill
 *
 * @apiParam {Number} billId Bills unique ID.
 *
 * @apiSuccessExample Success-Response -> returns number of bills deleted (returns 0 if no bills deleted):
 *     HTTP/1.1 200 OK
        1
*/


router.put('/bills/update', billController.update);
/**
 * @api {put} /bills/update Update existing bill
 * @apiName update
 * @apiGroup Bill
 *
 * @apiParam {Number} id Unique id of bill
 * @apiParam {String} title Title of bill
 * @apiParam {String} Company Company name for bill
 * @apiParam {Number} Amount Bill amount as number
 * @apiParam {Date} BillDue Bill due date must be Date object
 * @apiParam {Boolean} BillPaid Bill has been fully paid
 *
 * @apiExample Request body update bill object example usage:
  * {
  *  id: 1
  *  title: "water",
  *  Company: "PSE",
  *  Amount: 300.5,
  *  BillDue: Date.now(),
  *  BillPaid: false,
  * }
  *
  * @apiSuccessExample Success-Response -> Returns number of bills updated as array
  *[
  *  1
  *]
*
   * @apiSuccessExample Success-Response -> Bill does not exist so no bills updated
*  [
*    0
*  ]
*
* @apiErrorExample Error-Response Example:
* {
*     "name": "SequelizeDatabaseError",
*     "parent": {
*         "code": "ER_TRUNCATED_WRONG_VALUE",
*         "errno": 1292,
*         "sqlState": "22007",
*         "sqlMessage": "Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1",
*         "sql": "INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);"
*     },
*     "original": {
*         "code": "ER_TRUNCATED_WRONG_VALUE",
*         "errno": 1292,
*         "sqlState": "22007",
*         "sqlMessage": "Incorrect datetime value: 'Invalid date' for column 'BillDue' at row 1",
*         "sql": "INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);"
*     },
*     "sql": "INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);"
* }
 */



// ***********************************************************
// CONTROLLER ROUTES
// ***********************************************************


router.get('/users', userController.getAllUsers);
/**
 * @api {get} /users/ Get all users as array
 * @apiName GetAllUsers
 * @apiGroup User
 *
 * @apiSuccessExample Success-Response -> return array of all users. Return empty array if no users exist:
 *     HTTP/1.1 200 OK
 *    [
    {
        "id": 1,
        "firstName": "Bobby",
        "lastName": "Jones",
        "email": "Bobby@email.com",
        "phoneNumber": "206999999",
        "createdAt": "2019-06-11T04:11:06.000Z",
        "updatedAt": "2019-06-11T04:11:06.000Z"
    },
]
 */


router.get('/users/bills/populate', userController.getBillsForUserPopulateUsers);
/**
 * @api {get} /users/bills/populate Get all bills associated with a user's email and populate each bill with every user associated with that bill
 * @apiName getBillsForUserPopulateUsers
 * @apiGroup User
 *
 * @apiParam {String} email Users email as a string
 *
 * @apiExample Request body example:
  *  {
* "email": "Bobby@email.com"
* }
  *
 * @apiSuccessExample Success-Response -> return array of nested arrays of all user populated bills for user. Each nested array represents a bill. Return empty array if no bills for user exist. Populates 'UserBill' property of each user
 *     HTTP/1.1 200 OK
 *  [
    [
        {
            "id": 1,
            "firstName": "Bobby",
            "lastName": "Jones",
            "email": "Bobby@email.com",
            "phoneNumber": "206999999",
            "createdAt": "2019-06-11T04:11:06.000Z",
            "updatedAt": "2019-06-11T04:11:06.000Z",
            "UserBill": {
                "percentOwed": 67,
                "createdAt": "2019-06-11T04:13:57.000Z",
                "updatedAt": "2019-06-11T04:13:57.000Z",
                "BillId": 1,
                "UserId": 1
            }
        },
        {
            "id": 2,
            "firstName": "Sally",
            "lastName": "Smite",
            "email": "Sally@email.com",
            "phoneNumber": "4253828183",
            "createdAt": "2019-06-11T04:11:06.000Z",
            "updatedAt": "2019-06-11T04:11:06.000Z",
            "UserBill": {
                "percentOwed": 30,
                "createdAt": "2019-06-11T04:11:22.000Z",
                "updatedAt": "2019-06-11T04:11:22.000Z",
                "BillId": 1,
                "UserId": 2
            }
        }
    ],
    [
        {
            "id": 1,
            "firstName": "Bobby",
            "lastName": "Jones",
            "email": "Bobby@email.com",
            "phoneNumber": "206999999",
            "createdAt": "2019-06-11T04:11:06.000Z",
            "updatedAt": "2019-06-11T04:11:06.000Z",
            "UserBill": {
                "percentOwed": 67,
                "createdAt": "2019-06-11T04:14:17.000Z",
                "updatedAt": "2019-06-11T04:14:17.000Z",
                "BillId": 2,
                "UserId": 1
            }
        }
    ]
]
 */


router.get('/users/bills/', userController.getBillsForUser);
/**
 * @api {get} /users/bills Get all bills associated with a user's email
 * @apiName getBillsForUser
 * @apiGroup User
 *
 * @apiParam {String} email Users email as a string
 *
 * @apiExample Request body example:
  *  {
* "email": "Bobby@email.com"
* }
  *
 * @apiSuccessExample Success-Response -> return array of all bills for user. Return empty array if no bills for user exist. Populates 'UserBill' property
 *     HTTP/1.1 200 OK
 *   [
    {
        "id": 1,
        "title": "water",
        "Company": "PSE",
        "Amount": "301",
        "BillDue": "2019-06-11T04:11:06.000Z",
        "BillPaid": false,
        "createdAt": "2019-06-11T04:11:06.000Z",
        "updatedAt": "2019-06-11T04:11:06.000Z",
        "UserBill": {
            "percentOwed": 67,
            "createdAt": "2019-06-11T04:13:57.000Z",
            "updatedAt": "2019-06-11T04:13:57.000Z",
            "BillId": 1,
            "UserId": 1
        }
    }
]
 */


router.get('/users/email/', userController.getUserByEmail);
/**
 * @api {get} /users/email Get user by email
 * @apiName getUserByEmail
 * @apiGroup User
 *
 * @apiParam {String} email Users email as a string
 *
 * @apiExample Request body example:
  *  {
* "email": "Bobby@email.com"
* }
  *
 * @apiSuccessExample Success-Response -> return array with user object. Return empty array if user does not exist.
 *     HTTP/1.1 200 OK
 *  [
    {
        "id": 1,
        "firstName": "Bobby",
        "lastName": "Jones",
        "email": "Bobby@email.com",
        "phoneNumber": "206999999",
        "createdAt": "2019-06-11T04:11:06.000Z",
        "updatedAt": "2019-06-11T04:11:06.000Z"
    }
]
 */



router.post('/users', userController.createUser);
/**
 * @api {post} /users/ Create new user
 * @apiName createUser
 * @apiGroup User
 *
 * @apiParam {String} firstName First name of user
 * @apiParam {String} lastName Last name of user
 * @apiParam {String} email User email as string
 * @apiParam {phoneNumber} User phone number as string
 *
 * @apiExample Request body new user object example usage:
  *   {
    * firstName: 'Sally',
    * lastName: 'Smite',
    * email: 'Sally@email.com',
    * phoneNumber: '4253828183'
 *  }
  *
  * @apiSuccessExample Success-Response -> Returns newly created user object
  *{
  *  "id": 4,
  *  "firstName": "Sally",
  *  "lastName": "Smite",
  *  "email": "Sally@gmail.com",
  *  "phoneNumber": "4253828183",
  *  "updatedAt": "2019-06-12T18:01:24.479Z",
  *  "createdAt": "2019-06-12T18:01:24.479Z"
* }
  *
  * @apiErrorExample Error-Response Example:
 *  {
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Validation isEmail on email failed",
            "type": "Validation error",
            "path": "email",
            "value": "Sallygmail.com",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "firstName": "Sally",
                "lastName": "Smite",
                "email": "Sallygmail.com",
                "phoneNumber": "4253828183",
                "updatedAt": "2019-06-12T18:02:01.289Z",
                "createdAt": "2019-06-12T18:02:01.289Z"
            },
            "validatorKey": "isEmail",
            "validatorName": "isEmail",
            "validatorArgs": [
                {
                    "allow_display_name": false,
                    "require_display_name": false,
                    "allow_utf8_local_part": true,
                    "require_tld": true
                }
            ],
            "original": {
                "validatorName": "isEmail",
                "validatorArgs": [
                    {
                        "allow_display_name": false,
                        "require_display_name": false,
                        "allow_utf8_local_part": true,
                        "require_tld": true
                    }
                ]
            }
        }
    ]
}
 */


router.post('/users/addbill', userController.addBillToUser);
/**
 * @api {post} /users/addbill/ Add bill to user
 * @apiName addBillToUser
 * @apiGroup User
 *
 * @apiParam {String} email User email
 * @apiParam {Number} billId Bill id unique integer
 * @apiParam {Number} percentOwed Percentage owed as integer by user for bill
 *
 * @apiExample Request body example usage:
  * {
  *   "email": "Sally@gmail.com",
  *   "billId": 1,
  *   "percentOwed": 34
  *}
  *
  * @apiSuccessExample Success-Response -> Returns newly created UserBill object in array
 * [
 *   {
 *       "percentOwed": 34,
 *       "createdAt": "2019-06-12T18:06:53.249Z",
 *       "updatedAt": "2019-06-12T18:06:53.249Z",
 *       "BillId": 1,
 *       "UserId": 4
 *   }
* ]
  *
  * @apiErrorExample Error-Response Example: If bill does not exist -> return void. If email does not exist -> return {}. If email already connected to bill -> return void.
 {
    "name": "SequelizeValidationError",
    "errors": [
        {
            "message": "Validation max on percentOwed failed",
            "type": "Validation error",
            "path": "percentOwed",
            "value": 101,
            "origin": "FUNCTION",
            "instance": {
                "BillId": null,
                "UserId": null,
                "percentOwed": 101,
                "updatedAt": "2019-06-12T18:13:17.177Z"
            },
            "validatorKey": "max",
            "validatorName": "max",
            "validatorArgs": [
                100
            ],
            "original": {
                "validatorName": "max",
                "validatorArgs": [
                    100
                ]
            }
        }
    ]
}
 */



module.exports = router;
