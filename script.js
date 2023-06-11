// Sticky Nav
window.onscroll = function () { myFunction() };
        
var navbar = document.getElementById("navbar-sticky");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// End Sticky Nav

// Side Menu
function menuIcon() {
    let x = document.getElementById("menuMobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function menuIconSticky() {
    let x = document.getElementById("menuMobileSticky");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
// End Side Menu 

// Carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// End Carousel

// Climb Section
// Define initial values
let initialBackgroundImage = "url('Assets/tab-1-bg.png')";
let initialCellValues = {
  cell1: '25 Nov 2016',
  cell2: '25 Nov 2016',
  cell3: '18 Dec 2016',
  cell4: '7 Jan 2017',
};

// Function to change the content
function mountain2Content() {
  let element = document.getElementById('climbContent');

  element.style.backgroundImage = "url('Assets/tab-2-bg.png')";

  let cell1 = document.getElementById('cell1');
  let cell2 = document.getElementById('cell2');
  let cell3 = document.getElementById('cell3');
  let cell4 = document.getElementById('cell4');

  cell1.textContent = '17 Nov 2016';
  cell2.textContent = '13 Dec 2016';
  cell3.textContent = '28 Dec 2016';
  cell4.textContent = '9 Feb 2017';
}

// Function to revert the content to initial values
function mountain1Content() {
  let element = document.getElementById('climbContent');

  element.style.backgroundImage = initialBackgroundImage;

  let cell1 = document.getElementById('cell1');
  let cell2 = document.getElementById('cell2');
  let cell3 = document.getElementById('cell3');
  let cell4 = document.getElementById('cell4');

  cell1.textContent = initialCellValues.cell1;
  cell2.textContent = initialCellValues.cell2;
  cell3.textContent = initialCellValues.cell3;
  cell4.textContent = initialCellValues.cell4;
}
// End Climb Section