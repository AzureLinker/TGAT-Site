var swiper = new Swiper(".slide-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: false,
    fade: true,
    grabCursor: true,
    centerSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      727: {
        slidesPerView: 2
      },
      1104: {
        slidesPerView: 3
      }, 
      1473: {
        slidesPerView: 4
      },
      1867: {
        slidesPerView: 5
      }
    }
  });