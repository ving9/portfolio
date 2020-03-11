$(function(){
  var mySwiper = new Swiper ('.main_slider', {
   // Optional parameters
   loop: true,
   autoplay: true,

   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
   });
   
   let s1_slide = $('.swiper-wrapper .swiper-slide'),
        s1_slideF = $('.swiper-wrapper .swiper-slide:first-child'),
        s1_slideL = $('.swiper-wrapper .swiper-slide:last-child'),
        s1_num = s1_slide.index(),
        s1_numF = s1_slideF.index(),
        s1_numL = s1_slideL.index();

   var mySwiper2 = new Swiper ('.s1_slider', {
    // Optional parameters
    loop: false,
    autoplay: false,
    autoHeight:true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },
    });
    
    // var howManySlides = $('.swiper-wrapper .swiper-slide').length;
    // function onSlideChangeStart(){
    //   $(".s1_slider .swiper-button-prev,.s1_slider .swiper-button-next").removeClass('hide');
    //   if(s1_num == 0) {
    //       $(".s1_slider .swiper-button-prev").addClass('hide');
    //   }else if(s1_num == howManySlides) {
    //       $(".s1_slider .swiper-button-next").addClass('hide');
    //   }
    // };
    // setInterval(onSlideChangeStart,100);

    // function arrowfix(){
    //   if(s1_slideF){
    //     $('.swiper-button-prev').hide();
    //   }else if(s1_num == s1_numL){
    //     $('.swiper-button-next').hide();
    //   }else{
    //     $('.swiper-button-prev').show();
    //     $('.swiper-button-next').show();
    //   }
    // };
    // arrowfix();


    

    $('.s1_slide .s1_slider:gt(0)').hide();
    $('.s1_btn_tab li').click(function(){
        // e.preventDefault();
        // $('.s1_btn_tab a').removeClass('on');
        // $(this).find('a').addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
        let s1 = $(this).index();
        $('.s1_slide .s1_slider').hide();
        $('.s1_slide .s1_slider').eq(s1).show();
    });
    $('.m_btn').click(function(){
      $('.side_bg').stop().fadeIn(250);
      $('.side_bg .side_wrap').stop().css({"transform":"translate(0)"});
      $('html,body').stop().css({'overflow':'hidden'});
    });
    $('.side_close').click(function(){
      $('.side_bg').stop().fadeOut(500);
      $('.side_bg .side_wrap').stop().css({"transform":"translate(100%)"});
      $('html,body').stop().css({'overflow':'auto'});
    });
    $('.side_menu li a').click(function(){
      $(this).parent().siblings().find('.depth2').stop().slideUp();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find('a').stop().removeClass('on');
      $(this).stop().toggleClass('on');
    });
});
