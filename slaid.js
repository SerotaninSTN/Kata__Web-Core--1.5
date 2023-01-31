const btn = document.querySelector('.swiper-button')
const btnHide = document.querySelector('.swiper-button--hide')
const slides = Array.from(document.querySelectorAll('.swiper-slide'))
const swiperBrend = document.querySelector('.page-main__swiper-brend')
const swiperContainer = document.querySelector('.swiper-container')

function openSlides() {
    btn.addEventListener('click', () => {
        slides.forEach(item => item.classList.remove('hidden'));
        btn.classList.add('hidden');
        btnHide.classList.remove('hidden');
        swiperBrend.classList.add('page-main__swiper-brend--open')
        swiperContainer.classList.add('swiper-container--open')
})
}

function hideSlides(count) {
    btnHide.addEventListener('click', () => {
        slides.forEach((item, index) => {
            item.classList.add('hidden');

            if (index <= count) item.classList.remove('hidden');
        })
        btnHide.classList.add('hidden');
        btn.classList.remove('hidden');
        swiperBrend.classList.remove('page-main__swiper-brend--open')
        swiperContainer.classList.remove('swiper-container--open')
    })
}




function responsel1() {
if (window.innerWidth>1119) {
    
    const ind = 7;
    slides.forEach((item, index) => {
        item.classList.add('hidden')
        if (index <= ind) {
            item.classList.remove('hidden')
        } else if (index > ind) {
            btn.classList.remove('hidden');
        }
        openSlides();
        hideSlides(ind);
})
}
}

responsel1()


function responsel2() {
    if (window.innerWidth <=1119 && window.innerWidth > 767) {
        const ind = 5;
        slides.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= ind) {
                item.classList.remove('hidden')
            } else if (index > ind) {
                btn.classList.remove('hidden');
            }
            openSlides();
            hideSlides(ind);
           
           })   
    }
}
responsel2()
