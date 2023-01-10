$(document).ready(function(){
    $(".services-slick").slick({
        infinite: true,
        autoplay: true,
        speed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ],
    });

    $('.services-slick').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });
});
