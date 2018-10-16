(function($) {
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
      $(".header").css({ background: "#eeeeee" });
    }
    if (50 > scrolled) {
      $(".header").css({ background: "none" });
    }
  };

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


  let rev = $(".rev-slider");
  rev
    .on("init", function(event, slick, currentSlide) {
      let cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      cur.removeClass("slick-snext").removeClass("slick-sprev");
      slick.$prev = prev;
      slick.$next = next;
    })
    .on("beforeChange", function(event, slick, currentSlide, nextSlide) {
      console.log("beforeChange");
      let cur = $(slick.$slides[nextSlide]);
      console.log(slick.$prev, slick.$next);
      slick.$prev.removeClass("slick-sprev");
      slick.$next.removeClass("slick-snext");
      (next = cur.next()), (prev = cur.prev());
      prev.prev();
      prev.next();
      prev.addClass("slick-sprev");
      next.addClass("slick-snext");
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass("slick-next").removeClass("slick-sprev");
    });

  rev.slick({
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    dots: false,
    focusOnSelect: true,
    arrows: true,
    navText: ["../img/prev.png", "../img/next.png"],
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "",
    swipe: true,
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
                adaptiveHeight: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ],
    customPaging: function(slider, i) {
      return "";
    }
  });
})(jQuery);
