$(function(){
    $('.gnb>li').mouseenter(function(){
        $('.h_bot_wrap').stop().animate({height:280},300);
        $('.depth2').stop().show()
    });
    $('#header').mouseleave(function(){
        $('.h_bot_wrap').stop().animate({height:52},300);
        $('.depth2').stop().fadeOut(300)
    });
    $('.all_menu').click(function(){
        $('.all_menu>a').stop().toggleClass('on');
        $('.a_menu_bg').stop().fadeToggle();
    });
    $('.visual').slick({
                autoplay: true,
                arrows: true,
                autoplaySpeed: 3000,
                pauseOnHover: false,
                pauseOnFocus: false,
                swipe: false,
                dots: true,
                fade: true,
                // vertical: false,
                // slidesToShow: 3,
                // slidesToScroll: 1,
                // variableWidth: true,
                // centerMode: true,
            });
    $('.btn_top').click(function(){
        $('html,body').stop().animate({scrollTop:0},500);
    });
});
