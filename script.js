const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  clickable: true,
  touchRatio: 1,
  touchAngel: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  autoHeight: true,
  width: 240,
  spaceBetween: 16,
  breakpoints: {
       768: {
        enabled: false,
    width: 224,
    spaceBetween: 24,
    loop: false,
       }, 
       1120: {
        enabled: false,
        width: 240,
        spaceBetween: 32,
        loop: false,
       }
      },

  });
