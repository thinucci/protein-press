$(function(){

///// DROPDOWN-TABS FOR DIET AND SUPPLEMENT PAGE //////////

$('#dietList').find('.toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).css('background-color','rgba(220,89,43,0.95)');

    //Hide the other panels
    $(".content").not($(this).next()).slideUp('fast');
    $(".toggle").not($(this)).css('background-color','white');
    
   });

$('#supplementList').find('.toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).css('background-color','rgba(220,89,43,0.95)');

    //Hide the other panels
    $(".content").not($(this).next()).slideUp('fast');
    $(".toggle").not($(this)).css('background-color','white');
    
   });

///// VIDEO CAROUSEL TABS //////////////

$('#vidSection').find('.pane').click(function(){

    //Expand or collapse this panel
    $('.vid').next().show();

    //Hide the other panels
    $('.vid').not($(this).next()).hide();
    
   });




});