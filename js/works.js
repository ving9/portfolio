$(function(){
    $('.s2_design').slick({
        dots: true,
        infinite: true,
        speed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                }
            }
        ]
    });
});
    