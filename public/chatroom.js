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
})
