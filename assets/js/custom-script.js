(function($) {
  "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }
    $(window).on("load", function() { 
      $(".section-loader").fadeOut("slow");
      
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              queue: true
          }
      });
   
      $('.portfolio-nav li').click(function(){
          $('.portfolio-nav .current').removeClass('current');
          $(this).addClass('current');
   
          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  queue: true
              }
           });
           return false;
      });
    });
 
      $("[data-fancybox]").fancybox({});
    	var wow = new WOW({
          mobile: false  // trigger animations on mobile devices (default is true)
      });
      wow.init();
      
    $('#portfolio-item').mixItUp();
}(jQuery));
