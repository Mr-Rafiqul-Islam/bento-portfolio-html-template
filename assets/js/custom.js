(function ($) {
  "use strict";

  // for mobile menu control js
  $(".menu-control-btn").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").addClass("open");
  });
  $(".sidebar-close-btn, .mobile-menu-overlay").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").removeClass("open");
  });
})(jQuery);
