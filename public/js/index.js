
$(document).ready(function () {
  $('#addbillcard').hide();
  $('#viewbills').hide();


  // Opening modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the opening modal
  var btn = document.getElementById('myBtn');
  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName('close')[0];

  // jQuery button elements
  const signUpElem = $('#signupbutton');
  // const signInElem = $('#signinbutton');
  const submitBillElem = $('#addbillsubmit');
  const searchUserByEmailElem = $('#addUserEmail');
  const addUsersToBillElem = $('#addemails');
  const getBillsForUserPopulateUsersElem = $('#addemails');

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
      if (response.id) {
        billId = response.id;
      }
    });
  }



  //function delete bill with bill ID
  // function deleteBill(billId) {
  //   var queryURL = 'http://localhost:3000/api/bills/delete/';
  //   $.ajax({
  //     url: queryURL + billId,
  //     method: 'DELETE'
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }

  //function get all bills as an array
  // function getAllBills() {
  //   $.ajax({
  //     url: 'http://localhost:3000/api/bills/',
  //     method: 'GET'
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }

  //function get all users assciated will bill
  // function getAllUsersForBill(billId) {
  //   var queryURL = 'http://localhost:3000/api/bills/';
  //   $.ajax({
  //     url: queryURL + billId,
  //     method: 'GET'
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }

  //function get all users assciated will bill
  function getBillsForUserPopulateUsers(userEmail) {
    var queryURL = 'http://localhost:3000/api/users/bills/populate/';
    $.ajax({
      url: queryURL + userEmail,
      method: 'GET',
    }).then(function (response) {
      console.log(response);
    });
  }

  // update existing bill
  // function updateBill(billId) {
  //   var queryURL = 'http://localhost:3000/api/bills/update';
  //   $.ajax({
  //     url: queryURL + billId,
  //     method: 'PUT',
  //     data: {
  //       id: 1,
  //       title: 'water',
  //       Company: 'PSE',
  //       Amount: 300.5,
  //       BillDue: Date.now(),
  //       BillPaid: false,
  //     },
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }

  //function get user by email
  function getUserByEmail(email) {
    const getUserapiUrl = 'http://localhost:3000/api/users/email/';
    $.ajax({
      url: getUserapiUrl + email,
      method: 'GET',
    }).then(response => {
      console.log(response);
      if (response.length) {
        const user = response[0];
        const userDiv = $('<div>').addClass('add-payer-user');
        const firstNameElem = $('<tr><td>' + user.firstName + '</tr></td>').attr('firstName', user.firstName);
        const lastNameElem = $('<tr><td>' + user.lastName + '</tr></td>').attr('last-name', user.lastName);
        const userEmailElem = $('<tr><td>' + user.email + '</tr></td>').attr('email', user.email);
        const amountOwedElem = $('<tr><td>Amount: <input type="number" min="0" class="form-control" placeholder="Enter amount" required></tr></td>');

        userDiv.append(firstNameElem, lastNameElem, userEmailElem, amountOwedElem);
        $('#emails > tbody').append(userDiv);
      } else {
        console.log('user email does not exist');
      }
    });
  }

  //function add bill to user
  // function addBillToUser(userData) {
  //   const apiUrl = 'http://localhost:3000/api/users/addbill/';

  //   $.ajax({
  //     url: apiUrl,
  //     method: 'POST',
  //     data: {
  //       'email': userData.email,
  //       'billId': userData.billId,
  //       'amountOwed': userData.amountOwed
  //     }
  //   }).then(response => {
  //     console.log(response);
  //   });
  // }


  // Onclick handler functions


  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
    $('#signupform').hide();
    $('#signinform').hide();
  };

  // span.onclick = function () {
  //   modal.style.display = 'none';
  // };

  // Handle sign in on click
  $('#signinbutton').click(function (event) {
    event.preventDefault();
    const userData = {
      email: $('#signinemail').val().trim(),
      password: $('#signinpassword').val().trim()
    };
    signIn(userData);
    modal.style.display = 'none';
    $('#addbillcard').show();
    $('#viewbills').show();
    $('html, body').animate({
      scrollTop: ($('#addbillcard').offset().top)
    }, 200);

    var signinname = $('#signinname').val();
    $('.username').append(signinname + '.');
  });


  // Handle create user on click
  signUpElem.click(function () {
    event.preventDefault();

    const userData = {
      firstName: $('#signupfirstname').val().trim(),
      lastName: $('#signuplastname').val().trim(),
      email: $('#signupemail').val().trim(),
      phoneNumber: $('#signupphone').val().trim(),
      password: $('#signuppassword').val().trim()
    };
    createUser(userData);

    modal.style.display = 'none';
    $('#addbillcard').show();
    $('#viewbills').show();
    $('html, body').animate({
      scrollTop: ($('#addbillcard').offset().top)
    }, 200);

    var signupname = $('#signupfirstname').val();
    $('.username').append(signupname + '.');
  });

  // Handle submit bill on click
  submitBillElem.click(function () {
    const billData = {
      title: $('#inputbill').val().trim(),
      Company: $('#inputcompany').val().trim(),
      Amount: $('#inputprice').val().trim(),
      // BillDue: $('#dueDate').val(),
      BillPaid: $('.paid:checked').val()
    };
    createBill(billData);
    $('#modal2').show();
  });

  // Handle search for user email
  searchUserByEmailElem.click(function () {
    const userEmail = $('#inputemail').val();
    getUserByEmail(userEmail);
  });

  // Handle search for user email
  addUsersToBillElem.click(function () {
    // const userEmails = { 'STUFF************': 'STUFF*********' };
    $('.add-payer-user').each((index, value) => {
      const email = $(value).find('[email]').attr('email');
      const amountOwed = $(value).find('input').val();
      // const dataToSend = {
      //   email: email,
      //   amountOwed: amountOwed
      // }
      console.log(email);
      console.log(amountOwed);
      // addBillToUser(email);
    });
  });



  getBillsForUserPopulateUsersElem.click(function () {
    const userEmail = 'EMAIL STUFF';
    getBillsForUserPopulateUsers(userEmail);
  });

});
