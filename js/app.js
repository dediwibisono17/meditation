$(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // arrows: false,
    autoplaySpeed: 2000,
    fade: true
    // dots: true
})

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});