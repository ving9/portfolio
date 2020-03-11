$(function() {
    $('.btn_close').click(function() {
        $('#top_banner').stop().slideUp(800)
    });
    // 뒷배경을 만들고 하는 방식
    // $('.gnb').mouseenter(function(){
    //     $('.depth2').stop().slideDown(500);
    // });
    // $('.gnb').mouseleave(function(){
    //     $('.depth2').stop().slideUp(500);
    // });

    // 애니메이션 주는 방식
    // $('.gnb').mouseenter(function(){
    //     $('.h_wrap').stop().animate({height:370});
    //     $('.depth2').stop().fadeIn(400)
    //     });
    // $('.h_wrap').mouseleave(function(){
    //     $('.h_wrap').stop().animate({height:103});
    //     $('.depth2').stop().fadeOut(500)
    //     });
    $('.gnb').mouseenter(function(){
        $('.h_wrap').stop().animate({height:370});
        $('.depth2').show().stop().animate({opacity:1});
    });
    $('.h_wrap').mouseleave(function(){
        $('.h_wrap').stop().animate({height:103});
        $('.depth2').show().stop().animate({opacity:0});
    });
    $('.visual').slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        swipe: false,
        dots: true,
        // fade: true,
        // vertical: true,
    });
    $('.s4_slide').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        dots: true,
        // fade: true,
        // vertical: true,
    });
    $('.side_banner02_top').click(function(){
        $('html,body').stop().animate({scrollTop:0},1000);
    });

});

    $(window).scroll(function(){
        var y = $(document).scrollTop();
        console.log(y);

    $('.s5_sns li').click(function(){
        $('.s5_sns li').removeClass('on');
        $(this).addClass('on');
    });
});
