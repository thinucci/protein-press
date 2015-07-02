$(function(){

///// DROPDOWN-TABS FOR DIET AND SUPPLEMENT PAGE //////////

$('#dietList').find('.toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).css('background-color','#ADD8E6');

    //Hide the other panels
    $(".content").not($(this).next()).slideUp('fast');
    $(".toggle").not($(this)).css('background-color','white');
    
   });

$('#supplementList').find('.toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');
    $(this).css('background-color','#ADD8E6');

    //Hide the other panels
    $(".content").not($(this).next()).slideUp('fast');
    $(".toggle").not($(this)).css('background-color','white');
    
   });

///// VIDEO CAROUSEL TABS //////////////

var $vidNut = $('.vid-nut'),
    $vidTrain = $('.vid-train'),
    $vidMotiv = $('.vid-motiv'),
    $vidComp = $('.vid-comp'),
    $tabNut = $('#tab-nut'),
    $tabTrain = $('#tab-train'),
    $tabMotiv = $('#tab-motiv'),
    $tabComp = $('#tab-comp');

$vidNut.show();

$tabNut.click(function(){
    hideAll();
    $vidNut.show();
    removeActive();
    $tabNut.addClass('activePane');

});

$tabTrain.click(function(){
    hideAll();
    $vidTrain.show();
    removeActive();
    $tabTrain.addClass('activePane');
});

$tabMotiv.click(function(){
    hideAll();
    $vidMotiv.show();
    removeActive();
    $tabMotiv.addClass('activePane');
});

$tabComp.click(function(){
    hideAll();
    $vidComp.show();
    removeActive();
    $tabComp.addClass('activePane');

});

function hideAll(){
    $vidNut.hide();
    $vidTrain.hide();
    $vidMotiv.hide();
    $vidComp.hide();
};

function removeActive(){
    $tabNut.removeClass('activePane');
    $tabTrain.removeClass('activePane');
    $tabMotiv.removeClass('activePane');
    $tabComp.removeClass('activePane');
};

///////////////// SLICK CAROUSEL


});