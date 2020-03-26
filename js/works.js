$(function(){
    $('.s2_design').slick({
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                }
            }],
        
    });
    $('.s2_video').slick({
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                }
            }],
        
    });

    $('.s2_design .slick-slide').click(function(){
        $('body').css("overflow","hidden");
        let num = $(this).attr('data-slick-index');
        $('.design_cover li').hide();
        $('.design_cover li').eq(num).css("display","flex");
        console.log(num);
    });
    $('.design_cover li').click(function(){
        $('body').css("overflow","visible");
        $('.design_cover li').hide();
    });
});
    