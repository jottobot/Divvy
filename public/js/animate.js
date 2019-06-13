$(document).ready(function () {
  // Opening modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the opening modal
  var btn = document.getElementById('myBtn');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // Get add bill button
  // var delModalBill = document.getElementById("addBill");

  // Get view bill button
  // var delModalBill2 = document.getElementById("viewBill");

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
    $('#signupform').hide();
    $('#signinform').hide();
  };

  // When the user clicks on <span> (x), add bill and view bill close the modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
  // delModalBill.onclick = function() {
  //   modal.style.display = "none";
  // };
  // delModalBill2.onclick = function() {
  //   modal.style.display = "none";
  // };

  // showing sign in/sign up
  $('#signin').click(function () {
    $('#signinform').show();
    $('#signupform').hide();
  });
  $('#signup').click(function () {
    $('#signupform').show();
    $('#signinform').hide();
  });

  // showing modal to add payers
  $('#addusers').click(function () {
    $('#modal2').show();
  });

  // addusers modal
  var modal2 = document.getElementById('modal2');
  // Get the <span> element that closes the modal
  var spann = document.getElementsByClassName('close')[0];
  // close addusers modal
  spann.onclick = function () {
    modal2.style.display = 'none';
  };

  // adding emails modal
  $('#addemails').click(function(){
    var inputBill = $('#inputemail').val();
    $('#emails > tbody').append('<tr><td>' + inputBill + '</tr></td>');
  });

  // Add smooth scrolling after modal
  $('#signupbtn').on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.card').offset().top)
    }, 200);
  });
  $('#login').on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($('.card').offset().top)
    }, 200);
  });
  $("#addnewbill").on('click', function (event) {
    $('html, body').animate({
      scrollTop: ($("#addBillForm").offset().top)
    }, 200);
  });





});
