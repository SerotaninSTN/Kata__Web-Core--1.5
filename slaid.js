const btn = document.querySelector('.swiper-button')
const swiperBrend = document.querySelector('.page-main__swiper-brend')
const swiperContainer = document.querySelector('.swiper-container')

    btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (btn.classList.contains('swiper-button')) {
            btn.classList.remove('swiper-button');
            btn.classList.add('swiper-button--hide');
           
            btn.textContent = 'Скрыть';
            swiperBrend.classList.add('page-main__swiper-brend--open')
            swiperContainer.classList.add('swiper-container--open')
        } else if(btn.classList.contains('swiper-button--hide')) {
            btn.classList.remove('swiper-button--hide');
                btn.classList.add('swiper-button');
                btn.textContent = 'Показать все';
                swiperBrend.classList.remove('page-main__swiper-brend--open')
                swiperContainer.classList.remove('swiper-container--open')
        }
      });
      
