$(document).ready(function () {
  // Magnific-Popup - https://dimsemenov.com/plugins/magnific-popup/documentation.html
  // Project Popup
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    // other options
  });

  // Counter
  $(".counterUp").counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials Carousel
  $(".testimonials").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
  });

  // Sticky Header
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  // Scroll Top Animation
  $("#scrollTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "1000"
    );
  });
  // Scroll Top Fade
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $("#scrollTop").css("opacity", 1);
    } else {
      $("#scrollTop").css("opacity", 0);
    }
  });

  // Preloader
  $(".preloader").fadeOut();
});
