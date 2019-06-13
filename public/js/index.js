$(document).ready(function () {

  // Opening modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the opening modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get add bill button
  // var delModalBill = document.getElementById("addBill");

  // Get view bill button
  // var delModalBill2 = document.getElementById("viewBill");

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
    $("#signupform").hide();
    $("#signinform").hide();
  };

  // When the user clicks on <span> (x), add bill and view bill close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  // delModalBill.onclick = function() {
  //   modal.style.display = "none";
  // };
  // delModalBill2.onclick = function() {
  //   modal.style.display = "none";
  // };

  $("#signin").click(function () {
    $("#signinform").show();
    $("#signupform").hide();
  });
  $("#signup").click(function () {
    $("#signupform").show();
    $("#signinform").hide();
  });

<<<<<<< HEAD

  // Add smooth scrolling after modal
  $("#signupbtn").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($(".card").offset().top)
    }, 200);
  });

  $("#login").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($(".card").offset().top)
    }, 200);
  });


  function addBillToUser(userEmail, billId) {
    const apiUrl = 'http://localhost:3000/api/users/addbill/'

    $.ajax({
      url: apiUrl,
      method: 'POST',
      // data: newUser,
=======

  // Add smooth scrolling after modal
  $("#signupbtn").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($(".card").offset().top)
    }, 200);
  });

  $("#login").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($(".card").offset().top)
    }, 200);
  });



  //function create a bill
  function createBill(billId) {
    var queryURL = "http://localhost:3000/api/bills/"
    $.ajax({
      url: queryURL + billId,
      method: "POST"
    }).then(function (response) {
      console.log(response);
    });
  }

  //function delete bill with bill ID
  function deleteBill(billId) {
    var queryURL = "http://localhost:3000/api/bills/delete/"
    $.ajax({
      url: queryURL + billId,
      method: "DELETE"
    }).then(function (response) {
      console.log(response);
    });
  }

  //function get all bills as an array
  $.ajax({
    url: "http://localhost:3000/api/bills/",
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

  //function get all users assciated will bill
  function getAllUsersForBill(billId) {
    var queryURL = "http://localhost:3000/api/bills/"
    $.ajax({
      url: queryURL + billId,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    });
  }

  // update existing bill
  function updateBill(billId) {
    var queryURL = "http://localhost:3000/api/bills/update"
    $.ajax({
      url: queryURL + billId,
      method: "PUT",
      data: {
        id: 1,
        title: "water",
        Company: "PSE",
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
>>>>>>> 663beb79646d40a53228da4d0593bf9581a97f25
    }).then(response => {
      console.log(response)
    });
  }

<<<<<<< HEAD
  function getUserByEmail(email) {
    const getUserapiUrl = 'http://localhost:3000/api/users/email';
    $.ajax({
      url: getUserapiUrl,
      method: 'GET',
      data: email,
    }).then(response => {
      console.log(response)
    });

  }

=======
  }
  //function add bill to user
  function addBillToUser(userEmail, billId) {
    const apiUrl = 'http://localhost:3000/api/users/addbill/'

    $.ajax({
      url: apiUrl,
      method: 'POST',
      data: {
        "email": "Sally@gmail.com",
        "billId": 1,
        "percentOwed": 34
      }
    }).then(response => {
      console.log(response)
    });
  }

  //function create new user
>>>>>>> 663beb79646d40a53228da4d0593bf9581a97f25
  function createUser() {
    const createUserApiUrl = 'http://localhost:3000/api/users/'
    const newUser = {
      firstName: 'Sally',
      lastName: 'Smite',
      email: 'Sally@email.com',
      phoneNumber: '4253828183'
    }

    $.ajax({
      url: createUserApiUrl,
      method: 'POST',
      data: newUser,
    }).then(response => {
      console.log(response)
    });
  }

<<<<<<< HEAD



});
=======
});
>>>>>>> 663beb79646d40a53228da4d0593bf9581a97f25
