(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

})(jQuery);