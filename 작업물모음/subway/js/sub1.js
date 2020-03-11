$(function(){
    let btn_cate = $('.btn_category'),
        cate_list = $('.category_list'),
        cate_list_li = $('.category_list li');

    btn_cate.click(function(){
        $(this).stop().toggleClass('on');
        cate_list.stop().slideToggle();
    });
    cate_list_li.click(function(){
        cate_list_li.stop().removeClass('active')
        $(this).stop().addClass('active')
    });
});