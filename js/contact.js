$(function() {

// Selectors

var $fullname = $('#fullname'),
    $fullnameError = $('#fullname-error'),
    $email = $('#email'),
    $emailError = $('#email-error'),
    $message = $('#message'),
    $messageError = $('#message-error'),
    $title = $('#title'),
    $titleError = $('#title-error');

// Validate Contact Form

function validateName(fullname){
	if(fullname.length >= 3) {
		$fullname.removeClass('error');
		$fullnameError.hide();
		return true;
	}
	else{
		$fullname.addClass('error');
		$fullnameError.show();
		return false;
	}
}

  function validateEmail(email) {
    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
    if (re.test(email)) {
      $email.removeClass('error');
      $emailError.hide();
      return true;
    }
    else {
      $email.addClass('error');
      $emailError.show();
      return false;
    }
}


function validateMessage(message) {
    if (message.length > 0) {
      $message.removeClass('error');
      $messageError.hide();
      return true;
    }
    else {
      $message.addClass('error');
      $messageError.show();
      return false;
    }
  } 

function validateTitle(title) {
    if (title.length > 0) {
      $title.removeClass('error');
      $titleError.hide();
      return true;
    }
    else {
      $title.addClass('error');
      $titleError.show();
      return false;
    }
  }

// Form Submission


  $('form').submit(function(event){

    var fullname = $fullname.val(),
        email = $email.val(),
        message = $.trim($message.val());
        title = $.trim($title.val());

    if (validateName(fullname) & validateEmail(email) & validateMessage(message) & validateTitle(title)) {
      return true; //submit form.
    }
    else {
      event.preventDefault();  //prevent form from submitting!
    }
  });


});