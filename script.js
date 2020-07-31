$(document).ready(function () {

    $('#disappear').click(function () {
        $('p').toggle();
    });

    $('#color').click(function () {
        $('h1').css('background-color', 'blue');
        $('h1').css('color', 'red');
    });

    $('#funny').click(function (){
        $('img').fadeIn();
        $('img').fadeOut();
    });

    $('#append').click(function (){
        $('.cool').append("<strong>The long boring paragraph keeps getting longer!</strong>")
    });

    $('#bottom').on('mouseover', function() {
        $(this).css('background-color', 'yellow');
        $(this).css();
    });

    $('.something').click(function (){
        $('.something').slideUp();
    });

    $('h3').on('mouseover', function(){
        $('h3').addClass('red');
        $('h3').before('<b>I go before you!</b>');
    });



})

