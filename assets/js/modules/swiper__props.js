export
// const props = {
//     loop: true,
//     effect: 'fade',

//     autoplay: {
//         delay: 1400,
//         disableOnInteraction: true,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         dynamicBullets: true,
//     },
// }

// Swiper do dica
const props = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 15,
        },
        720: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 50,
            centeredSlides: false,

        },

        1240: {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: false,

        },
    }
}