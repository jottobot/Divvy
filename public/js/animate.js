$(document).ready(function () {

  // showing sign in/sign up
  $('#signin').click(function () {
    $('#signinform').show();
    $('#signupform').hide();
  });

  $('#signup').click(function () {
    $('#signupform').show();
    $('#signinform').hide();
  });

  // addusers modal
  var modal2 = document.getElementById('modal2');
  // Get the <span> element that closes the modal
  var spann = document.getElementsByClassName('close')[0];
  // close addusers modal
  spann.onclick = function () {
    modal2.style.display = 'none';
  };

  // smooth scrolling up to add a bill
  $('#addnewbill').on('click', function () {
    $('html, body').animate({
      scrollTop: ($('#addbillcard').offset().top)
    }, 200);
  });
});