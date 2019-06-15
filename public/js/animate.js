$(document).ready(function () {
  $('#addbillcard').hide();
  $('#viewbills').hide();

  // Opening modal
  var modal = document.getElementById('myModal');
  // Get the button that opens the opening modal
  var btn = document.getElementById('myBtn');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
    $('#signupform').hide();
    $('#signinform').hide();
  };

  // When the user clicks on <span> (x), the sign in and sign up get out of the opening modal
  span.onclick = function () {
    modal.style.display = 'none';
  };
  $('#signupbutton').click(function () {
    modal.style.display = 'none';
    $('#addbillcard').show();
    $('#viewbills').show();
  });
  $('#signinbutton').click(function () {
    modal.style.display = 'none';
    $('#addbillcard').show();
    $('#viewbills').show();
  });

  // Add smooth scrolling after modal
  $('#signupbutton').on('click', function () {
    $('html, body').animate({
      scrollTop: ($('#addbillcard').offset().top)
    }, 200);
  });
  $('#signinbutton').on('click', function () {
    $('html, body').animate({
      scrollTop: ($('#addbillcard').offset().top)
    }, 200);
  });

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
  $('#addbillsubmit').click(function () {
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
  $('#addemails').click(function () {
    var inputBill = $('#inputemail').val();
    $('#emails > tbody').append('<tr><td>' + inputBill + '</tr></td>');
  });

  // smooth scrolling up to add a bill
  $('#addnewbill').on('click', function () {
    $('html, body').animate({
      scrollTop: ($('#addbillcard').offset().top)
    }, 200);
  });





});