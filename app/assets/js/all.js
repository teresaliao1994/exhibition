//Aos
AOS.init({
  once: true,
});

//swipers
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});