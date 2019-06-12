const express = require('express');

const userController = require('../controllers/user-api-controller');
const billController = require('../controllers/bill-api-controller')

const router = express.Router();

// ***********************************************************
// BILL ROUTES 
// ***********************************************************

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
router.get('/bills', billController.getAllBills);


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
router.get('/bills/:billId', billController.getUsersForBill)


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
 * @apiExample New bill object example usage:
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
router.post("/bills", billController.postNewBill);


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
router.delete("/bills/delete/:id", billController.billDelete)


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
 * @apiExample Update bill object example usage:
  *   {
  *   id: 1
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
router.put("/bills/update", billController.update)


// ***********************************************************
// CONTROLLER ROUTES 
// ***********************************************************


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
router.get('/users', userController.getAllUsers)



router.get('/users/bills/', userController.getBillsForUser);

router.get('/users/email/', userController.getUserByEmail)

router.post('/users', userController.createUser)

router.post('/users/addbill', userController.addBillToUser)


module.exports = router;
