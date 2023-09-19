const backButton = document.querySelector('#backToTop');
const burgerButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul'); 
const menuItems = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');

window.onscroll = function() {scrollFunction()};


//code from W3s about scrolling for two browsers
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backButton.style.display = "block";
    } else {
      backButton.style.display = "none";
    }

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('bg');
    }  else {
        header.classList.remove('bg');
    }
  }
  
//go back to top when click the button
function getToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

//function for burger Menu
function burgerMenu() {
    if (nav.classList.contains('responsive')) { //to check if the nav has class="responsive" or not 
        nav.classList.remove('responsive'); 
    } else {
        nav.classList.add('responsive');
    }
}

for (let item of menuItems) {
    item.addEventListener('click', burgerMenu);
}

backButton.addEventListener('click', getToTop)
burgerButton.addEventListener('click', burgerMenu)