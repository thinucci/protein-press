// When document is ready run the code below

  $(function() {


//CALCULATE
    
   $('#calculate').click(function() {

	var input = $('#weight').val();

   	
   	if(input > 0) {

	  	var minimum = input * 1.2;
	  	var maximum = input * 2.2;
	  	$('#totalIntakeMin').text(minimum + 'g' + '' + '-' + '');
	  	$('#totalIntakeMax').text(maximum + 'g');
	  	$('#invalidInput').text('');
	}

	else {
		$('#totalIntakeMin').text('');
	  	$('#totalIntakeMax').text('');
		$('#invalidInput').text('Not a valid weight number.').css('color','red');
	}
    
   });


});
  
    
