(function() {
  

// слайдер о компании

const swiper = new Swiper('.about__slider', {
  spaceBetween: 24,
  slidesPerView: 3,
  initialSlide: 1,

  navigation: {
    nextEl: '.about__next',
    prevEl: '.about__prev',
  },
});

})()
