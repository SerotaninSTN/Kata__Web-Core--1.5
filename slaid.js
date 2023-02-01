const btn = document.querySelector('.swiper-button')
const btnHide = document.querySelector('.swiper-button--hide')
const swiperBrend = document.querySelector('.page-main__swiper-brend')
const swiperContainer = document.querySelector('.swiper-container')

function openSlides() {
    btn.addEventListener('click', () => {
     
        btn.classList.add('hidden');
        btnHide.classList.remove('hidden');
        swiperBrend.classList.add('page-main__swiper-brend--open')
        swiperContainer.classList.add('swiper-container--open')
})
}

function hideSlides(count) {
    btnHide.addEventListener('click', () => {
        btnHide.classList.add('hidden');
        btn.classList.remove('hidden');
        swiperBrend.classList.remove('page-main__swiper-brend--open')
        swiperContainer.classList.remove('swiper-container--open')
    })
}




function responsel() {

        openSlides();
        hideSlides();
}

responsel()

