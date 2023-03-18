$(document).ready(function() {
    $(".single-item").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: ".multiple-items"
    });
    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".single-item",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
