import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', 
{
    loop: true,
    centeredSlides: true,
    autoplay: 
    {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const swiper = new Swiper('.swiper-ghost', 
{
    effect: 'fade',
    loop: false,
    centeredSlides: true,
    autoplay: 
    {
        delay: 2500,
        disableOnInteraction: false,
    },
});