export
const props2 = {
    // loop: true,
    // effect: 'fade',
    slidesPerView: "auto",
    centeredSlides: false,
    speed: 600,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}

// Swiper do dica
export
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