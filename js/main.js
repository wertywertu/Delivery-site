var swiper = new Swiper(".cont-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1170: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".cont-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cont-slider-next",
      prevEl: ".cont-slider-prev",
    },
  });
  var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    speed: 800
  });