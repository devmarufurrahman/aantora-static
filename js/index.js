const navbars = document.querySelectorAll('.menu-btn')

navbars.forEach(e=>{
    e.addEventListener("click",function(){
        navbars.forEach(nav=>nav.classList.remove('active'));
        this.classList.add('active')
    })
})




// back to top up 

// Get the button
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







//! feature product slider 


