$(document).on("ready", function () {
  $(".vertical-center-4 .slider").slick({});

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".slider-nav",
  });
});

$(".slider-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  fade: false,
});
