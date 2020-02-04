//alert('iam in')

$(function(){
    $('.js-trigger').click(function() {
        //alert('clicked')
        $('html').toggleClass('show-me') 
    });
    
    $('.conversation__header').on('click', function() {
        $('.conversation').slideToggle(300);
    });
    
    $('.chat__human').on('click', function() {
        $('.conversation').slideToggle(300);
    });
});

    // $(document).ready(function() {
    //     $("#checking").click(function() {
    //         if ($('#checkSide').is(':disabled')) {
    //             $('#checkSide').removeAttr('disabled');
    //         } else {
    //             $("#checkSide").attr('disabled', 'disabled');
    //         }
    //     });
    
    //     $("#checkSide").click(function() {
    //         if ($('#checking').is(':disabled')) {
    //             $('#checking').removeAttr('disabled');
    //         } else {
    //             $("#checking").attr('disabled', 'disabled');
    //         }
    //     });
    // });

 $(document).ready(function() {
    $("#check").click(function() {
        $("#checkSide").attr('checked', false);
        if ($(this).is(":checked")) {
            $('#btnSide').css({ 'margin-left': '100%', 'display': 'inline' });
        } else {
            $('#btnSide').css({ 'display': 'inline', 'margin-left': '0px',  });
        }
    });
});

$(window).bind('resize', function() {
    if ($("#check").is(":checked") && $(window).width() <= 968) {
        $("#checkSide").attr('checked', false);
        $('#btnSide').css({ 'margin-left': '100%', 'display': 'none' });
    }
    if ($("#check").is(":checked") && $(window).width() <= 968) {
        $('#btnSide').css({ 'display': 'inline' });
    }
    if ($(window).width() > 968) {
        $('#btnSide').css({ 'margin-left': '0px', 'display': 'inline' });
    }

    if ($(window).width() > 968 && $('.chat__name').is(':clicked')) {
        $('.conversation').css({ 'display': 'block' });
    }
    else {
        $('.conversation').css({ 'display': 'none' });
    }
});