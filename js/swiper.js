var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});