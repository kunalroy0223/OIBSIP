// script.js

// Initialize AOS (Animate on Scroll) with repeat and reverse on scroll
AOS.init({
  once: false,      // animations repeat every time you scroll into view
  mirror: true,     // animations also play when scrolling back up
  duration: 1000,   // animation duration in ms
  easing: 'ease-in-out'
});

// Initialize Swiper Carousel
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  },
});