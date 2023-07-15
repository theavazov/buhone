var clientsSwiper = new Swiper(".clients-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    prevEl: ".clients-prev",
    nextEl: ".clients-next",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1200,
  breakpoints: {
    580: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var feedbacksSwiper = new Swiper(".feedbacks-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    prevEl: ".feedbacks-prev",
    nextEl: ".feedbacks-next",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1200,
});
