$(function() {
    
    /* HEADER FIXED */
        
    let header = $("#header");  
    let scrollPos = $(window).scrollTop();
    
    $(window).on("scroll load resize", function() {
        
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if( scrollPos > 0) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    /* SMOOTHED SCROLL */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        
        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 1000);
    });
    
    /* OKNO */
    
$(document).ready(function() {
  $('button.myLinkModal').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });
});
    
    
});