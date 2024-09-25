$(function(){
    var $slider = $('.carousel');
    var $slideContainer = $('.image-carousel-container');
    var $slides = $('.image');

    var slideWidth = $slides.width();
    var slideHeight = $slides.height();
    var slideCount = $slides.length;
    var totalWidth = slideCount * slideWidth;

    $slider.css({
        width:slideWidth,
        height:slideHeight
    })

    $slideContainer.css({
        width:totalWidth,
        marginLeft: - slideWidth
    })

    $('#left-arrow').on('click', function(){
        $slideContainer.animate({
            left: + slideWidth
        },"slow", () => {
            $('.image:last-child').prependTo('.image-carousel-container')
            $('.image-carousel-container').css('left','0')
        })
    })

    $('#right-arrow').on('click', function(){
        $slideContainer.animate({
            left: - slideWidth
        },"slow", () => {
            $('.image:first-child').appendTo('.image-carousel-container')
            $('.image-carousel-container').css('left','0')
        })
    })

})