const headerLogo = document.querySelector('[data-header-logo]');
const headerUl = document.querySelector('[data-header-ul]'); 
const btn = document.querySelector('[data-header-btn]'); 

btn.addEventListener('click',(e)=>{
    changeBtnBackground();
    openNav();
})


function changeBtnBackground(){
    if(btn.classList.contains('btn-close')){
        btn.classList.remove('btn-close');
        btn.classList.add('btn-open');
    }else if(btn.classList.contains('btn-open')){
        btn.classList.add('btn-close');
        btn.classList.remove('btn-open');
    }
}

function openNav(){
    if(headerUl.classList.contains('header-ul-close')){
        headerUl.classList.remove('header-ul-close');
    }else{
        headerUl.classList.add('header-ul-close');
    }
}