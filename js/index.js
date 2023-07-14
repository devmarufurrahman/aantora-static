const navbars = document.querySelectorAll('.menu-btn')

navbars.forEach(e=>{
    e.addEventListener("click",function(){
        navbars.forEach(nav=>nav.classList.remove('active'));
        this.classList.add('active')
    })
})