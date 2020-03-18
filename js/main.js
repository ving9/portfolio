const 
    btn_menu = document.querySelector('.btn_menu'),
    modal_wrap = document.querySelector('.modal_wrap');


btn_menu.onclick = function() {
    btn_menu.classList.toggle('select');
    if (btn_menu.className === 'btn_menu') {
        modal_wrap.style.display = "none";
        document.body.style.overflow = "visible";
    }else if(btn_menu.className === 'btn_menu select'){
        modal_wrap.style.display = "flex";
        document.body.style.overflow = "hidden";
    };  
};


