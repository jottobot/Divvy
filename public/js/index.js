// const developmentBaseUrl = 'http://localhost:3000/';
const productionBaseUrl = 'https://vast-gorge-37663.herokuapp.com/';

const baseUrl = productionBaseUrl;

$(document).ready(function () {
  $('#addbillcard').hide();
  $('#viewbills').hide();


  // Opening modal
  var modal = document.getElementById('myModal');
  // Add Payer modal
  var modal2 = document.getElementById('modal2');
  // Add Payer modal
  var billDetailModal = document.getElementById('billDetailModal');
  // Get the button that opens the opening modal
  var openingModalBtn = document.getElementById('myBtn');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[1];

  // jQuery button elements
  const signUpElem = $('#signupbutton');
  const signInElem = $('#signinbutton');
  const submitBillElem = $('#addbillsubmit');
  const searchUserByEmailElem = $('#addUserEmail');
  const addUsersToBillElem = $('#addemails');


  // ***************************************
  // Local Storage functions
  // ***************************************
  function deleteAuthState() {
    localStorage.removeItem('authState');
  }

  function createAuthState(firstName, lastName, email) {
    deleteAuthState();
    const authState = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    localStorage.setItem('authState', JSON.stringify(authState));
  }

  function getAuthState() {
    return JSON.parse(localStorage.getItem('authState'));
  }

  // ***************************************
  // Ajax functions
  // ***************************************

  // Sign in
  function signIn(userData, callback) {
    const queryUrl = baseUrl + 'api/auth/';
    $.ajax({
      url: queryUrl,
      method: 'POST',
      data: {
        email: userData.email,
        password: userData.password,
      },
    }).then(response => {
      callback(response);
    });
  }

  // Create new user
  function createUser(userData, callback) {
    const createUserApiUrl = baseUrl + 'api/users/';
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
      userData.amountYouOwe;

      callback(response);
    });
  }

  // Add bill to user
  function addBillToUser(userData, callback) {
    const apiUrl = baseUrl + 'api/users/addbill/';

    $.ajax({
      url: apiUrl,
      method: 'POST',
      data: {
        'email': userData.email,
        'billId': userData.billId,
        'amountOwed': userData.amountOwed
      }
    }).then(response => {
      callback();
      console.log(response);
    });
  }

  // Adds a table row in adding a user to a bill modal
  function buildAddUserToBillTableRow(user, isBillCreator, payerClass) {
    let amountOwedElem;
    const userDiv = $('<div>').addClass(payerClass);
    const firstNameElem = $('<tr><td>' + user.firstName + '</tr></td>').attr('firstName', user.firstName);
    const lastNameElem = $('<tr><td>' + user.lastName + '</tr></td>').attr('last-name', user.lastName);
    const userEmailElem = $('<tr><td>' + user.email + '</tr></td>').attr('email', user.email);
    var line = $('<div>').append('<hr>');

    userDiv.append(firstNameElem, lastNameElem, userEmailElem);
    if (!isBillCreator) {
      amountOwedElem = $('<tr><td>Amount: <input type="number" min="0" class="form-control" min="0" value="0" placeholder="Enter amount" required></tr></td>');
      userDiv.append(amountOwedElem);
    }
    userDiv.append(line);

    $('#emails > tbody').append(userDiv);
  }

  //function create a bill
  function createBill(billData) {
    var queryURL = baseUrl + 'api/bills/';
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
      if (response.id) { // bill creation success
        billId = response.id;
        const amountYouOwe = billData.amountYouOwe;
        const billCreator = getAuthState();

        const userData = {
          email: billCreator.email,
          billId: billId,
          amountOwed: amountYouOwe,
        };

        addBillToUser(userData, function () { // add bill creator to bill
          addUsersToBillElem.attr('data-id', billId);
          $('.add-payer-user').remove();
          $('.bill-creater').remove();

          buildAddUserToBillTableRow(billCreator, true, 'bill-creater');

          $('#modal2').show();
        });
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


  function buildBillViewRow(bill, destination) {
    const tableRow = $('<tr>').attr('data-id', bill.id);
    const tableHead = $('<th>').attr('scope', 'row').text(bill.id);
    const titleCell = $('<td>').text(bill.title);
    const companyCell = $('<td>').text(bill.Company);
    const amountCell = $('<td>').text(bill.Amount);
    const isPaidCell = $('<td>').text(bill.BillPaid);
    const youOweCell = $('<td>').text(bill.UserBill.amountOwed);
    const addPayersBtn = $('<button type="button" class="btn btn-outline-light addPayers">Add payers</button>');
    const billDetailBtn = $('<button type="button" class="btn btn-outline-light viewBill">View Bill</button>');
    const settle = $('<button type="button" class="btn btn-outline-light settle">Pay bill</button>');
    tableRow
      .append(tableHead, titleCell, companyCell, amountCell, youOweCell, isPaidCell, addPayersBtn, billDetailBtn, settle);
    destination.append(tableRow);
  }

  //function get all users associated will bill
  function getBillsForUser(userEmail) {
    var queryURL = baseUrl + 'api/users/bills/';
    $.ajax({
      url: queryURL + userEmail,
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      response.forEach(bill => {
        buildBillViewRow(bill, $('#current-bills'));
      });
    });
  }

  function buildRowsBillDetail(payers) {
    $('.bill-payer-detail').remove();

    payers.forEach(payer => {
      const payerDiv = $('<div>').addClass('bill-payer-detail');
      const firstNameElem = $('<tr><td>' + payer.firstName + '</tr></td>');
      const lastNameElem = $('<tr><td>' + payer.lastName + '</tr></td>');
      const userEmailElem = $('<tr><td>' + payer.email + '</tr></td>');
      const amountPayerOwesElem = $('<tr><td>' + payer.UserBill.amountOwed + '</tr></td>');
      var line = $('<div>').append('<hr>');
      payerDiv.append(firstNameElem, lastNameElem, userEmailElem, amountPayerOwesElem, line);

      $('#bill-detail-users').append(payerDiv);
    });
  }

  // Get details for a single bill
  function billDetail(billId, callback) {
    var queryURL = baseUrl + 'api/bills/';
    $.ajax({
      url: queryURL + billId,
      method: 'GET',
    }).then(response => {
      callback(response);
    });
  }

  //function get all users assciated will bill and populate users
  // function getBillsForUserPopulateUsers(userEmail) {
  //   var queryURL = 'http://localhost:3000/api/users/bills/populate/';
  //   $.ajax({
  //     url: queryURL + userEmail,
  //     method: 'GET',
  //   }).then(function (response) {
  //     console.log(response);
  //   });
  // }



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
    const getUserapiUrl = baseUrl + 'api/users/email/';

    $.ajax({
      url: getUserapiUrl + email,
      method: 'GET',
    }).then(response => {
      console.log(response);
      if (response.length) {
        const user = response[0];

        buildAddUserToBillTableRow(user, false, 'add-payer-user');
      } else {
        // ADD ALERT FOR NO USER FOUND
        // $('.alert').toggleClass('in out');
        // return false;
        


        alert('Email address not found. Please have user make an account.');
        console.log('user email does not exist');
      }
    });
  }

  // Saves user authentication and scrolls page down to create bill section
  function directUserAfterAuth(response) {
    console.log(response);
    if (response.id) { // user found
      createAuthState(response.firstName, response.lastName, response.email);
      getBillsForUser(response.email);
      $('.username').append(response.firstName + '.');

      modal.style.display = 'none';
      $('#addbillcard').show();
      $('#viewbills').show();
      $('html, body').animate({
        scrollTop: ($('#addbillcard').offset().top)
      }, 200);
    } else {
      alert('Please enter a valid email address OR make an account.');
    }
  }


  // ***************************************
  // Onclick handler functions
  // ***************************************

  // When the user clicks on the button, open the modal
  openingModalBtn.onclick = function () {
    modal.style.display = 'block';
    $('#signupform').hide();
    $('#signinform').hide();
  };

  span.onclick = function () {
    modal2.style.display = 'none';
    billDetailModal.style.display = 'none';
  };

  // Handle sign in on click
  signInElem.click(function (event) {
    event.preventDefault();
    const userData = {
      email: $('#signinemail').val().trim(),
      password: $('#signinpassword').val().trim()
    };
    signIn(userData, directUserAfterAuth);
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
    createUser(userData, directUserAfterAuth);
  });

  // Handle submit bill on click
  submitBillElem.click(function () {
    const billData = {
      title: $('#inputbill').val().trim(),
      Company: $('#inputcompany').val().trim(),
      Amount: $('#inputprice').val().trim(),
      // BillDue: $('#dueDate').val(),
      BillPaid: $('.paid:checked').val(),
      amountYouOwe: $('#price-you-owe').val(),
    };

    createBill(billData);
  });

  // Handle search for user email
  searchUserByEmailElem.click(function () {
    const userEmail = $('#inputemail').val();
    getUserByEmail(userEmail);
    $('#inputemail').val('');
  });

  $(document).on('click', '.addPayers', function (event) {
    event.preventDefault();
    var billId = $(this).parent().attr('data-id');
    $('.add-payer-user').remove();
    $('.bill-creater').remove();
    addUsersToBillElem.attr('data-id', billId);
    $('#modal2').show();
  });

  $(document).on('click', '.viewBill', function (event) {
    event.preventDefault();
    var billId = $(this).parent().attr('data-id');
    $('#billDetailModal').show();
    billDetail(billId, function (response) {
      console.log(response);
      buildRowsBillDetail(response);
    });
  });

  // Handle add users to bill click
  addUsersToBillElem.click(function () {
    $('.add-payer-user').each((index, value) => {
      const email = $(value).find('[email]').attr('email');
      const amountOwed = $(value).find('input').val();
      const billId = $(this).attr('data-id');
      const dataToSend = {
        email: email,
        amountOwed: amountOwed,
        billId: billId
      };
      console.log(dataToSend);
      addBillToUser(dataToSend, function () {
        $('#modal2').hide();
      });
    });


  });

  // getBillsForUserPopulateUsersElem.click(function () {
  //   const userEmail = 'EMAIL STUFF';
  //   getBillsForUserPopulateUsers(userEmail);
  // });

  // $('#addemails').click(
  //   $('html, body').animate({
  //   scrollTop: ($('#addbillcard').offset().top)
  // }, 200));


});
