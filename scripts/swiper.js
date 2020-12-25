new Swiper('.image-slider',{
    //стрелки
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    //навигация
    //буллеты ,прогрессбар
    pagination: {
        el: '.swiper-pagination',
        //булеты
        clickable:true,
    },
    //автовысота
    autoHeight:true,
    //количество слайдов для показа
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
      },
      speed: 1000,
    loop: true,
});

var swiper = new Swiper('.slider-around', {
    slidesPerView:4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      loop: true,
      navigation: {
        nextEl:'.swiper-btn-next',
        prevEl:'.swiper-btn-prev',
    },
  });