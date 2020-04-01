const 
    btn_menu = document.querySelector('.btn_menu'),
    modal_wrap = document.querySelector('.modal_wrap'),
    section4 = document.getElementById('section4'),
    menu_contact = document.querySelector('.menu_contact'),
    btn_pageup = document.querySelector('.btn_pageup');


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

function modal_close() {
    btn_menu.classList.remove('select');
    modal_wrap.style.display = "none";
    document.body.style.overflow = "visible";
};

menu_contact.onclick = function() {
    window.scrollTo(0, section4.offsetTop);
    modal_close();
};

window.addEventListener('scroll', function() {
    if (window.pageYOffset > document.body.offsetHeight*0.7) {
        btn_pageup.style.opacity=1;
        btn_pageup.style.transform="scale(1)";
    }else {
        btn_pageup.style.opacity=0;
        btn_pageup.style.transform="scale(0)"
    };
});

btn_pageup.onclick = function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}