$(document).ready(function () {

  const submitBillElem = $('#TODO');
  const createUserElem = $('#TODO');


  submitBillElem.click(function() {
    const billData = 'STUFF';
    createBill(billData);
  });

  //function create a bill
  function createBill(billData) {
    var queryURL = 'http://localhost:3000/api/bills/';
    $.ajax({
      url: queryURL,
      method: 'POST',
      data: {
        title: billData.title,
        Company: billData.Company,
        Amount: billData.Amount,
        BillDue: billData.BillDue,
        BillPaid: billData.BillPaid,
      }
    }).then(function (response) {
      console.log(response);
    });
  }

  //function delete bill with bill ID
  function deleteBill(billId) {
    var queryURL = 'http://localhost:3000/api/bills/delete/';
    $.ajax({
      url: queryURL + billId,
      method: 'DELETE'
    }).then(function (response) {
      console.log(response);
    });
  }

  //function get all bills as an array
  function getAllBills() {
    $.ajax({
      url: 'http://localhost:3000/api/bills/',
      method: 'GET'
    }).then(function (response) {
      console.log(response);
    });
  }

  //function get all users assciated will bill
  function getAllUsersForBill(billId) {
    var queryURL = 'http://localhost:3000/api/bills/';
    $.ajax({
      url: queryURL + billId,
      method: 'GET'
    }).then(function (response) {
      console.log(response);
    });
  }

  // update existing bill
  function updateBill(billId) {
    var queryURL = 'http://localhost:3000/api/bills/update';
    $.ajax({
      url: queryURL + billId,
      method: 'PUT',
      data: {
        id: 1,
        title: 'water',
        Company: 'PSE',
        Amount: 300.5,
        BillDue: Date.now(),
        BillPaid: false,
      },
    }).then(function (response) {
      console.log(response);
    });
  }
  //function get user by email
  function getUserByEmail(email) {
    const getUserapiUrl = 'http://localhost:3000/api/users/email';
    $.ajax({
      url: getUserapiUrl,
      method: 'GET',
      data: email,
    }).then(response => {
      console.log(response);
    });
  }

  //function add bill to user
  function addBillToUser(data) {
    const apiUrl = 'http://localhost:3000/api/users/addbill/';

    $.ajax({
      url: apiUrl,
      method: 'POST',
      data: {
        'email': data.userEmail,
        'billId': data.billId,
        'percentOwed': data.percentOwed
      }
    }).then(response => {
      console.log(response);
    });
  }

  //function create new user
  function createUser(userData) {
    const createUserApiUrl = 'http://localhost:3000/api/users/';
    const newUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    };

    $.ajax({
      url: createUserApiUrl,
      method: 'POST',
      data: newUser,
    }).then(response => {
      console.log(response);
    });
  }

});
