$(document).ready(function() {
    // $(".single-item").slick({
    //     infinite: true,
    //     arrows: true,
    //     dots: false
    // });
    // $(".multiple-items").slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // });

    $(".single-item").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: ".multiple-items"
    });
    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".single-item",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: true
    });
});
