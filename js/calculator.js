$(function() {

//Selectors

var $intakeMin = $('#totalIntakeMin'),
    $intakeMax = $('#totalIntakeMax'),
    $invalid = $('#invalidInput'),
    $choiceKg = $('#weightNumberType option[value="kg"]'),
    $choiceLb = $('#weightNumberType option[value="lb"]'),
    $Unit = $('#weightUnit');
//Calculate

$('#weightNumberType').change(function() {
    var eventTypeName = $("#weightNumberType option:selected");

    if (eventTypeName.is($choiceKg) ) {
      $Unit.text('Body Weight (kg): ');
    }

    else if (eventTypeName.is($choiceLb) ){
      $Unit.text('Body Weight (lb): ');
    }

});
    
 $('#calculate').click(function(){

  	var input = $('#weight').val();

    if ($choiceLb.is(':selected') & input > 0) {
      var minimum = input * 1;
      var maximum = input * 1.5;
      // $('#weightUnit').text('Body Weight (lb): ');
      $intakeMin.text(minimum + 'g - ');
      $intakeMax.text(maximum + 'g');
      $invalid.text('');
      
    } 

    else if ($choiceKg.is(':selected') & input > 0) {
      var minimum = input * 2.2;
      var maximum = input * 3.3;
      // $('#weightUnit').text('Body Weight (kg): ');
      $intakeMin.text(minimum + 'g - ');
      $intakeMax.text(maximum + 'g');
      $invalid.text('');
    }

    else{
      $intakeMin.text('');
      $intakeMax.text('');
      $invalid.text('Not a valid weight number.').css('color','red');

    }
  
  });

    

});