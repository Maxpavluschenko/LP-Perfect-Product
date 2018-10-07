$(function() {
  $(".menuBurger").on("click", function() {
    $(".menu").slideToggle(300, function() {
      if ($(this).css("display") === "none") {
        $(this).removeAttr("style");
      }
    });
  });
});

let scrolled;
window.onscroll = function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 50) {
    $(".header").css({ background: "#e2e2e2" });
  }
  if (50 > scrolled) {
    $(".header").css({ background: "none" });
  }
};

/*--------- jQuery ----------*/
(function($) {
  $(document).ready(function() {
    $(".file-upload input[type=file]").change(function() {
      let filename = $(this)
        .val()
        .replace(/.*\\/, "");
      $("#filename").val(filename);
    });
  });

  $(".products-link").click(function(prod) {
    prod.preventDefault();
    $(".other").removeClass("other");
    $(this).addClass("other-active");
  });

  $(document).ready(function() {
    $(".center").slick({
      autoplay: false,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      speed: 900,
      arrows: true,
      navText: ["../img/prev.png", "../img/next.png"],
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });
  });
})(jQuery);
