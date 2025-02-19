(function ($) {
  "use strict";

  // Theme control js
  $(document).ready(function () {
    // Load the theme from localStorage and apply it
    const storedTheme = localStorage.getItem("theme") || "light";
    $("html").attr("data-bs-theme", storedTheme);

    // Toggle theme and store it in localStorage
    function toggleTheme() {
      const newTheme = $("html").attr("data-bs-theme") === "light" ? "dark" : "light";
      $("html").attr("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
    $("#themeToggleButton").on("click", toggleTheme);
  });

  // for mobile menu control js
  $(".menu-control-btn").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").addClass("open");
  });
  $(".sidebar-close-btn, .mobile-menu-overlay").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").removeClass("open");
  });

  // Parallax scroll effect js
  $(".move-with-cursor").each(function () {
    var $this = $(this);
    $(document).on("mousemove", function (e) {
      var t = e.clientX,
        e = e.clientY;
      $this.css({
        transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: `translate(${0.01 * t}px, ${0.01 * e}px) rotate(${
          0.01 * (t + e)
        }deg)`,
      });
    });
  });
  
})(jQuery);
