$(document).ready(function () {

  // jQuery button elements
  const signUpElem = $('#TODO******************');
  const signInElem = $('#TODO******************');
  const submitBillElem = $('#TODO******************');
  const searchUserByEmailElem = $('#TODO******************');
  const addUsersToBillElem = $('#TODO******************');
  const getBillsForUserPopulateUsersElem = $('#TODO******************');

  // Ajax functions

  // Sign in
  function signIn(userData) {
    const queryUrl = 'http://localhost:3000/api/auth/';
    $.ajax({
      url: queryUrl,
      method: 'POST',
      data: {
        email: userData.email,
        password: userData.password,
      },
    }).then(function (response) {
      console.log(response);
    });
  }

  // Create new user
  function createUser(userData) {
    const createUserApiUrl = 'http://localhost:3000/api/users/';
    const newUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      password: userData.password,
    };

    $.ajax({
      url: createUserApiUrl,
      method: 'POST',
      data: newUser,
    }).then(response => {
      console.log(response);
    });
  }


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

  //function get all users assciated will bill
  function getBillsForUserPopulateUsers(userEmail) {
    var queryURL = 'http://localhost:3000/api/users/bills/populate';
    $.ajax({
      url: queryURL,
      method: 'GET',
      data: {
        email: userEmail,
      }
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
  function addBillToUser(userEmail) {
    const apiUrl = 'http://localhost:3000/api/users/addbill/';

    $.ajax({
      url: apiUrl,
      method: 'POST',
      data: {
        'email': userEmail.userEmail,
        'billId': Useremail.billId,
        'percentOwed': Useremail.percentOwed
      }
    }).then(response => {
      console.log(response);
    });
  }


  // Onclick handler functions

  // Handle sign in on click
  signInElem.click(function () {
    const userData = 'STUFF';
    signIn(userData);
  });

  // Handle create user on click
  signUpElem.click(function () {
    const userData = 'STUFF';
    createUser(userData);
  });

  // Handle submit bill on click
  submitBillElem.click(function () {
    const billData = 'STUFF';
    createBill(billData);
  });

  // Handle search for user email
  searchUserByEmailElem.click(function () {
    const userEmail = 'STUFF';
    getUserByEmail(userEmail);
  });

  // Handle search for user email
  addUsersToBillElem.click(function () {
    const userEmails = { 'STUFF************': 'STUFF*********' };
    userEmails.forEach(email => {
      addBillToUser(email);
    });
  });

  getBillsForUserPopulateUsersElem.click(function() {
    const userEmail = 'EMAIL STUFF';
    getBillsForUserPopulateUsers(userEmail);
  });

});
