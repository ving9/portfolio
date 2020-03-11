    $(function(){
        $('.quick_side li').click(function(){
            $(this).addClass('on');
            let num = $(this).index();
            console.log(num);
            if (num==0){
                $('body,html').stop().animate({scrollTop:0},1000)
            }else if(num==1){
                $('body,html').stop().animate({scrollTop:1277},1000)
            }else if(num==2){
                $('body,html').stop().animate({scrollTop:2302},1000)
            }else if(num==3){
                $('body,html').stop().animate({scrollTop:3302},1000)
            }else if(num==4){
                $('body,html').stop().animate({scrollTop:4442},1000)
            }else if(num==5){
                $('body,html').stop().animate({scrollTop:5482},1000)
            }else if(num==6){
                $('body,html').stop().animate({scrollTop:6482},1000)
            }else if(num==7){
                $('body,html').stop().animate({scrollTop:7482},1000)
            }else if(num==8){
                $('body,html').stop().animate({scrollTop:8465},1000)
            }else if(num==9){
                $('body,html').stop().animate({scrollTop:9615},1000)
            }else if(num==10){
                $('body,html').stop().animate({scrollTop:10692},1000)
            }else{
                $('body,html').stop().animate({scrollTop:11832},1000)
            };
        });

        $(window).scroll(function(){
            let y = $(document).scrollTop()
            console.log(y);
            if(y>=1277){
                $('.header').addClass('on');
            }
            else{
                $('.header').removeClass('on')
            };
            if(0<=y && y<1227){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(0).addClass('on');
            }else if(1227<=y && y<2302){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(1).addClass('on');
            }else if(2302<=y && y<3302){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(2).addClass('on');
            }else if(3302<=y && y<4442){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(3).addClass('on');
            }else if(4442<=y && y<5482){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(4).addClass('on');
            }else if(5482<=y && y<6482){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(5).addClass('on');
            }else if(6482<=y && y<7482){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(6).addClass('on');
            }else if(7482<=y && y<8465){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(7).addClass('on');
            }else if(8465<=y && y<9615){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(8).addClass('on');
            }else if(9615<=y && y<10692){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(9).addClass('on');
            }else if(10692<=y && y<11832){
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(10).addClass('on');
            }else{
                $('.quick_side ul li').removeClass('on')
                $('.quick_side ul li').eq(11).addClass('on');
            }
            if(y>1200 && y<2302){
                $('.section2 .case').addClass('on')
            }else if(y>2200 && y<3302){
                $('.sec3_img01').addClass('on')
                $('.sec3_img02').addClass('on')
            }else if(y>3202 && y<4442){
                $('.sec4_img02').addClass('on')
                $('.s4_img').addClass('on')
            }else if(y>4342 && y<5482){
                $('.sec5_img02').addClass('on')
                $('.sec5_img03').addClass('on')
            }else if(y>5382 && y<6482){
                $('.s6_img01').addClass('on')
                $('.s6_img02').addClass('on')
            }else if(y>6382 && y<7482){
                $('.s7_img01').addClass('on')
            }else if(y>8365 && y<9615){
                $('.s9_tit').addClass('on')
                $('.s9_img').addClass('on')
            }else if(y>9515 && y<10692){
                $('.section10').addClass('on')
            }else if(y>10592 && y<11832){
                $('.section11').addClass('on')
            }else if(y>11732 && y<12680){
                $('.section12').addClass('on')
            }else if(y==0 || y>=14000){
                $('.section2 .case').removeClass('on')
                $('.sec3_img01').removeClass('on')
                $('.sec3_img02').removeClass('on')
                $('.sec4_img02').removeClass('on')
                $('.s4_img').removeClass('on')
                $('.sec5_img02').removeClass('on')
                $('.sec5_img03').removeClass('on')
                $('.s6_img01').removeClass('on')
                $('.s6_img02').removeClass('on')
                $('.s7_img01').removeClass('on')
                $('.s9_tit').removeClass('on')
                $('.s9_img').removeClass('on')
                $('.section10').removeClass('on')
                $('.section11').removeClass('on')
                $('.section12').removeClass('on')
            }
        });

        $('.color_left li').click(function(){
            let colorNum = $(this).index();
            console.log(colorNum);
            $('.s10_color ul li').removeClass('on');
            $(this).addClass('on');
            $('.s10_mobile ul li').removeClass('on');
            $('.s10_case_left li').eq(colorNum).addClass('on');
        });
        $('.color_right li').click(function(){
            let colorNum = $(this).index();
            console.log(colorNum);
            $('.s10_color ul li').removeClass('on');
            $(this).addClass('on');
            $('.s10_mobile ul li').removeClass('on');
            $('.s10_case_right li').eq(colorNum).addClass('on');
        });


        $('.btn_down1').click(function(){
            $('body,html').animate({scrollTop:1277},1000)
        });
        $('.btn_down2').click(function(){
            $('body,html').animate({scrollTop:2302},1000)
        });
        $('.btn_down3').click(function(){
            $('body,html').animate({scrollTop:3302},1000)
        });
        $('.btn_down4').click(function(){
            $('body,html').animate({scrollTop:4442},1000)
        });
        $('.btn_down5').click(function(){
            $('body,html').animate({scrollTop:5482},1000)
        });
        $('.btn_down6').click(function(){
            $('body,html').animate({scrollTop:6482},1000)
        });
        $('.btn_down7').click(function(){
            $('body,html').animate({scrollTop:7482},1000)
        });
        $('.btn_down8').click(function(){
            $('body,html').animate({scrollTop:8465},1000)
        });
        $('.btn_down9').click(function(){
            $('body,html').animate({scrollTop:9615},1000)
        });
        $('.btn_down10').click(function(){
            $('body,html').animate({scrollTop:10692},1000)
        });
        $('.btn_down11').click(function(){
            $('body,html').animate({scrollTop:11832},1000)
        });
        $('.s8_bgslide').slick({
            autoplay: false,
            arrows: true,
            autoplaySpeed: 3000,
            pauseOnHover: false,
            swipe: false,
            dots: false,
            fade: true,
            // vertical: false,
            // slidesToShow: 3,
            // slidesToScroll: 1,
            // variableWidth: true,
            // centerMode: true,
        });

    });
