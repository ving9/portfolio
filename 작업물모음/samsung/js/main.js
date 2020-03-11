$(function(){
    $('.visual').slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        dots: true,
        fade: true,
        // vertical: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // variableWidth: true,
        // centerMode: true,
    });
    let sw = true
    $('.slide_stop').click(function(){
        if(sw==true){
            $('.visual').slick('slickPause');
            $(this).addClass('on');
            sw = false;
        }else{
            $('.visual').slick('slickPlay');
            $(this).removeClass('on');
            sw = true;
        }
    });

    $('.gnb li').hover(function(){
        $('.gnb_customer li').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('.gnb_5g').removeClass('on');
    });
    $('.gnb li').click(function(){
        $('.gnb_customer li').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('.gnb_5g').removeClass('on');
    });
    $('.gnb_customer li').hover(function(){
        $('.gnb li').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('.cus_business').removeClass('on');
        $('.gnb_customer .icon').removeClass('on');
    });
    $('.gnb_customer li').click(function(){
        $('.gnb li').removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        $('.cus_business').removeClass('on');
        $('.gnb_customer .icon').removeClass('on');
    });
});
