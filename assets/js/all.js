"use strict";

//Aos
AOS.init({
  once: true
}); //swipers

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
