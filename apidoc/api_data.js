define({ 'api': [
  {
    'type': 'get',
    'url': '/bills/',
    'title': 'Get all bills as array',
    'name': 'GetAllBills',
    'group': 'Bill',
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> return array of all bills. Return empty array if no bills exist:',
          'content': '    HTTP/1.1 200 OK\n    [\n    {\n        "id": 1,\n        "title": "water",\n        "Company": "PSE",\n        "Amount": "301",\n        "BillDue": "2019-06-11T04:11:06.000Z",\n        "BillPaid": false,\n        "createdAt": "2019-06-11T04:11:06.000Z",\n        "updatedAt": "2019-06-11T04:11:06.000Z"\n    }\n]',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'Bill'
  },
  {
    'type': 'delete',
    'url': '/bills/delete/:billId',
    'title': 'Delete bill with bill id',
    'name': 'billDelete',
    'group': 'Bill',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'billId',
            'description': '<p>Bills unique ID.</p>'
          }
        ]
      }
    },
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> returns number of bills deleted (returns 0 if no bills deleted):',
          'content': 'HTTP/1.1 200 OK\n    1',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'Bill'
  },
  {
    'type': 'get',
    'url': '/bills/:billId',
    'title': 'Get all users for bill id',
    'name': 'getUsersForBill',
    'group': 'Bill',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'billId',
            'description': '<p>Bills unique ID.</p>'
          }
        ]
      }
    },
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> returns array of users for the bill id:',
          'content': '    HTTP/1.1 200 OK\n[\n  {\n      "id": 1,\n      "firstName": "Bobby",\n      "lastName": "Jones",\n      "email": "Bobby@email.com",\n      "phoneNumber": "206999999",\n      "createdAt": "2019-06-11T04:11:06.000Z",\n      "updatedAt": "2019-06-11T04:11:06.000Z",\n      "UserBill": {\n          "percentOwed": 67,\n          "createdAt": "2019-06-11T04:13:57.000Z",\n          "updatedAt": "2019-06-11T04:13:57.000Z",\n          "BillId": 1,\n          "UserId": 1\n      }\n  }\n]',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'Bill'
  },
  {
    'type': 'post',
    'url': '/bills/',
    'title': 'Create new bill',
    'name': 'postNewBill',
    'group': 'Bill',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'title',
            'description': '<p>Title of bill</p>'
          },
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'Company',
            'description': '<p>Company name for bill</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'Amount',
            'description': '<p>Bill amount as number</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Date',
            'optional': false,
            'field': 'BillDue',
            'description': '<p>Bill due date must be Date object</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Boolean',
            'optional': false,
            'field': 'BillPaid',
            'description': '<p>Bill has been fully paid</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body new bill object example usage:',
        'content': '  {\n title: "water",\n Company: "PSE",\n Amount: 300.5,\n BillDue: Date.now(),\n BillPaid: false,\n}',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> Returns newly created bill object',
          'content': '{\n "id": 5,\n "title": "water",\n "Company": "PSE",\n "Amount": 300.5,\n "BillDue": "2019-06-11T04:13:57.000Z",\n "BillPaid": false,\n "updatedAt": "2019-06-12T17:22:09.454Z",\n "createdAt": "2019-06-12T17:22:09.454Z"\n}',
          'type': 'json'
        }
      ]
    },
    'error': {
      'examples': [
        {
          'title': 'Error-Response Example:',
          'content': '    {\n    "name": "SequelizeDatabaseError",\n    "parent": {\n        "code": "ER_TRUNCATED_WRONG_VALUE",\n        "errno": 1292,\n        "sqlState": "22007",\n        "sqlMessage": "Incorrect datetime value: \'Invalid date\' for column \'BillDue\' at row 1",\n        "sql": "UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?"\n    },\n    "original": {\n        "code": "ER_TRUNCATED_WRONG_VALUE",\n        "errno": 1292,\n        "sqlState": "22007",\n        "sqlMessage": "Incorrect datetime value: \'Invalid date\' for column \'BillDue\' at row 1",\n        "sql": "UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?"\n    },\n    "sql": "UPDATE `Bills` SET `title`=?,`Company`=?,`Amount`=?,`BillDue`=?,`BillPaid`=?,`updatedAt`=? WHERE `id` = ?"\n}',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'Bill'
  },
  {
    'type': 'put',
    'url': '/bills/update',
    'title': 'Update existing bill',
    'name': 'update',
    'group': 'Bill',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'id',
            'description': '<p>Unique id of bill</p>'
          },
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'title',
            'description': '<p>Title of bill</p>'
          },
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'Company',
            'description': '<p>Company name for bill</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'Amount',
            'description': '<p>Bill amount as number</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Date',
            'optional': false,
            'field': 'BillDue',
            'description': '<p>Bill due date must be Date object</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Boolean',
            'optional': false,
            'field': 'BillPaid',
            'description': '<p>Bill has been fully paid</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body update bill object example usage:',
        'content': '{    \n id: 1\n title: "water",\n Company: "PSE",\n Amount: 300.5,\n BillDue: Date.now(),\n BillPaid: false,\n}',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> Returns number of bills updated as array',
          'content': '[\n 1\n]',
          'type': 'json'
        },
        {
          'title': 'Success-Response -> Bill does not exist so no bills updated',
          'content': '[\n  0\n]',
          'type': 'json'
        }
      ]
    },
    'error': {
      'examples': [
        {
          'title': 'Error-Response Example:',
          'content': '{\n    "name": "SequelizeDatabaseError",\n    "parent": {\n        "code": "ER_TRUNCATED_WRONG_VALUE",\n        "errno": 1292,\n        "sqlState": "22007",\n        "sqlMessage": "Incorrect datetime value: \'Invalid date\' for column \'BillDue\' at row 1",\n        "sql": "INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);"\n    },\n    "original": {\n        "code": "ER_TRUNCATED_WRONG_VALUE",\n        "errno": 1292,\n        "sqlState": "22007",\n        "sqlMessage": "Incorrect datetime value: \'Invalid date\' for column \'BillDue\' at row 1",\n        "sql": "INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);"\n    },\n    "sql": "INSERT INTO `Bills` (`id`,`title`,`Company`,`Amount`,`BillDue`,`BillPaid`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?);"\n}',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'Bill'
  },
  {
    'type': 'get',
    'url': '/users/',
    'title': 'Get all users as array',
    'name': 'GetAllUsers',
    'group': 'User',
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> return array of all users. Return empty array if no users exist:',
          'content': '    HTTP/1.1 200 OK\n   [\n    {\n        "id": 1,\n        "firstName": "Bobby",\n        "lastName": "Jones",\n        "email": "Bobby@email.com",\n        "phoneNumber": "206999999",\n        "createdAt": "2019-06-11T04:11:06.000Z",\n        "updatedAt": "2019-06-11T04:11:06.000Z"\n    },\n]',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'User'
  },
  {
    'type': 'post',
    'url': '/users/addbill/',
    'title': 'Add bill to user',
    'name': 'addBillToUser',
    'group': 'User',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'email',
            'description': '<p>User email</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'billId',
            'description': '<p>Bill id unique integer</p>'
          },
          {
            'group': 'Parameter',
            'type': 'Number',
            'optional': false,
            'field': 'percentOwed',
            'description': '<p>Percentage owed as integer by user for bill</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body example usage:',
        'content': '{\n  "email": "Sally@gmail.com",\n  "billId": 1,\n  "percentOwed": 34    \n}',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> Returns newly created UserBill object in array',
          'content': '[\n  {\n      "percentOwed": 34,\n      "createdAt": "2019-06-12T18:06:53.249Z",\n      "updatedAt": "2019-06-12T18:06:53.249Z",\n      "BillId": 1,\n      "UserId": 4\n  }\n]',
          'type': 'json'
        }
      ]
    },
    'error': {
      'examples': [
        {
          'title': 'Error-Response Example: If bill does not exist -> return void. If email does not exist -> return {}. If email already connected to bill -> return void. ',
          'content': ' {\n    "name": "SequelizeValidationError",\n    "errors": [\n        {\n            "message": "Validation max on percentOwed failed",\n            "type": "Validation error",\n            "path": "percentOwed",\n            "value": 101,\n            "origin": "FUNCTION",\n            "instance": {\n                "BillId": null,\n                "UserId": null,\n                "percentOwed": 101,\n                "updatedAt": "2019-06-12T18:13:17.177Z"\n            },\n            "validatorKey": "max",\n            "validatorName": "max",\n            "validatorArgs": [\n                100\n            ],\n            "original": {\n                "validatorName": "max",\n                "validatorArgs": [\n                    100\n                ]\n            }\n        }\n    ]\n}',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'User'
  },
  {
    'type': 'post',
    'url': '/users/',
    'title': 'Create new user',
    'name': 'createUser',
    'group': 'User',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'firstName',
            'description': '<p>First name of user</p>'
          },
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'lastName',
            'description': '<p>Last name of user</p>'
          },
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'email',
            'description': '<p>User email as string</p>'
          },
          {
            'group': 'Parameter',
            'type': 'phoneNumber',
            'optional': false,
            'field': 'User',
            'description': '<p>phone number as string</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body new user object example usage:',
        'content': '  {\nfirstName: \'Sally\',\nlastName: \'Smite\',\nemail: \'Sally@email.com\',\nphoneNumber: \'4253828183\'\n }',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> Returns newly created user object',
          'content': '{\n "id": 4,\n "firstName": "Sally",\n "lastName": "Smite",\n "email": "Sally@gmail.com",\n "phoneNumber": "4253828183",\n "updatedAt": "2019-06-12T18:01:24.479Z",\n "createdAt": "2019-06-12T18:01:24.479Z"\n}',
          'type': 'json'
        }
      ]
    },
    'error': {
      'examples': [
        {
          'title': 'Error-Response Example:',
          'content': ' {\n    "name": "SequelizeValidationError",\n    "errors": [\n        {\n            "message": "Validation isEmail on email failed",\n            "type": "Validation error",\n            "path": "email",\n            "value": "Sallygmail.com",\n            "origin": "FUNCTION",\n            "instance": {\n                "id": null,\n                "firstName": "Sally",\n                "lastName": "Smite",\n                "email": "Sallygmail.com",\n                "phoneNumber": "4253828183",\n                "updatedAt": "2019-06-12T18:02:01.289Z",\n                "createdAt": "2019-06-12T18:02:01.289Z"\n            },\n            "validatorKey": "isEmail",\n            "validatorName": "isEmail",\n            "validatorArgs": [\n                {\n                    "allow_display_name": false,\n                    "require_display_name": false,\n                    "allow_utf8_local_part": true,\n                    "require_tld": true\n                }\n            ],\n            "original": {\n                "validatorName": "isEmail",\n                "validatorArgs": [\n                    {\n                        "allow_display_name": false,\n                        "require_display_name": false,\n                        "allow_utf8_local_part": true,\n                        "require_tld": true\n                    }\n                ]\n            }\n        }\n    ]\n}',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'User'
  },
  {
    'type': 'get',
    'url': '/users/bills',
    'title': 'Get all bills associated with a user\'s email',
    'name': 'getBillsForUser',
    'group': 'User',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'email',
            'description': '<p>Users email as a string</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body example:',
        'content': ' {\n"email": "Bobby@email.com"\n}',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> return array of all bills for user. Return empty array if no bills for user exist. Populates \'UserBill\' property',
          'content': '    HTTP/1.1 200 OK\n  [\n    {\n        "id": 1,\n        "title": "water",\n        "Company": "PSE",\n        "Amount": "301",\n        "BillDue": "2019-06-11T04:11:06.000Z",\n        "BillPaid": false,\n        "createdAt": "2019-06-11T04:11:06.000Z",\n        "updatedAt": "2019-06-11T04:11:06.000Z",\n        "UserBill": {\n            "percentOwed": 67,\n            "createdAt": "2019-06-11T04:13:57.000Z",\n            "updatedAt": "2019-06-11T04:13:57.000Z",\n            "BillId": 1,\n            "UserId": 1\n        }\n    }\n]',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'User'
  },
  {
    'type': 'get',
    'url': '/users/bills/populate',
    'title': 'Get all bills associated with a user\'s email and populate each bill with every user associated with that bill',
    'name': 'getBillsForUserPopulateUsers',
    'group': 'User',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'email',
            'description': '<p>Users email as a string</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body example:',
        'content': ' {\n"email": "Bobby@email.com"\n}',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> return array of nested arrays of all user populated bills for user. Each nested array represents a bill. Return empty array if no bills for user exist. Populates \'UserBill\' property of each user',
          'content': '    HTTP/1.1 200 OK\n [\n    [\n        {\n            "id": 1,\n            "firstName": "Bobby",\n            "lastName": "Jones",\n            "email": "Bobby@email.com",\n            "phoneNumber": "206999999",\n            "createdAt": "2019-06-11T04:11:06.000Z",\n            "updatedAt": "2019-06-11T04:11:06.000Z",\n            "UserBill": {\n                "percentOwed": 67,\n                "createdAt": "2019-06-11T04:13:57.000Z",\n                "updatedAt": "2019-06-11T04:13:57.000Z",\n                "BillId": 1,\n                "UserId": 1\n            }\n        },\n        {\n            "id": 2,\n            "firstName": "Sally",\n            "lastName": "Smite",\n            "email": "Sally@email.com",\n            "phoneNumber": "4253828183",\n            "createdAt": "2019-06-11T04:11:06.000Z",\n            "updatedAt": "2019-06-11T04:11:06.000Z",\n            "UserBill": {\n                "percentOwed": 30,\n                "createdAt": "2019-06-11T04:11:22.000Z",\n                "updatedAt": "2019-06-11T04:11:22.000Z",\n                "BillId": 1,\n                "UserId": 2\n            }\n        }\n    ],\n    [\n        {\n            "id": 1,\n            "firstName": "Bobby",\n            "lastName": "Jones",\n            "email": "Bobby@email.com",\n            "phoneNumber": "206999999",\n            "createdAt": "2019-06-11T04:11:06.000Z",\n            "updatedAt": "2019-06-11T04:11:06.000Z",\n            "UserBill": {\n                "percentOwed": 67,\n                "createdAt": "2019-06-11T04:14:17.000Z",\n                "updatedAt": "2019-06-11T04:14:17.000Z",\n                "BillId": 2,\n                "UserId": 1\n            }\n        }\n    ]\n]',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'User'
  },
  {
    'type': 'get',
    'url': '/users/email',
    'title': 'Get user by email',
    'name': 'getUserByEmail',
    'group': 'User',
    'parameter': {
      'fields': {
        'Parameter': [
          {
            'group': 'Parameter',
            'type': 'String',
            'optional': false,
            'field': 'email',
            'description': '<p>Users email as a string</p>'
          }
        ]
      }
    },
    'examples': [
      {
        'title': 'Request body example:',
        'content': ' {\n"email": "Bobby@email.com"\n}',
        'type': 'json'
      }
    ],
    'success': {
      'examples': [
        {
          'title': 'Success-Response -> return array with user object. Return empty array if user does not exist.',
          'content': '    HTTP/1.1 200 OK\n [\n    {\n        "id": 1,\n        "firstName": "Bobby",\n        "lastName": "Jones",\n        "email": "Bobby@email.com",\n        "phoneNumber": "206999999",\n        "createdAt": "2019-06-11T04:11:06.000Z",\n        "updatedAt": "2019-06-11T04:11:06.000Z"\n    }\n]',
          'type': 'json'
        }
      ]
    },
    'version': '0.0.0',
    'filename': 'routes/apiRoutes.js',
    'groupTitle': 'User'
  }
] });
