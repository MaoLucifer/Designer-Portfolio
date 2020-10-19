//Variables
var imgContainer = document.getElementsByClassName('text__container');
var imgText = document.getElementsByClassName('img__text');

var menuBtn = document.getElementById('menu__icon');
var dropdown = document.getElementsByClassName('dropdown__menu')[0];

var contactBtn = document.getElementsByClassName('contact__btn')[0];
var contactForm = document.getElementsByClassName('contact__form')[0];


// Gallery Hover Effects
for (let i = 0; i < imgText.length; i++) {
  imgContainer[i].addEventListener('mouseover', function() {
    imgText[i].style.opacity = "1";
    imgText[i].style.transition = "0.4s ease-in";
  });

  imgContainer[i].addEventListener('mouseout', function(){
    imgText[i].style.opacity = "0";
    imgText[i].style.transition = "0.4s ease-out";
  });
}

var isClicked = false;
// Drop down Mobile
menuBtn.addEventListener('click', function(){
  
  if (!isClicked) {
    isClicked = true;

    //Btn Styles
    menuBtn.innerHTML = "close";
    menuBtn.style.backgroundColor = "#1f283b";
    menuBtn.style.color = "white";

    //Menu visible
    dropdown.style.display = "block";
  } else {
    isClicked = false;

    //Btn Styles  
    menuBtn.innerHTML = "menu";
    menuBtn.style.backgroundColor = "white";
    menuBtn.style.color = "black";

    //Menu visible
    dropdown.style.display = "none";
  }
});

//Contact Button onClick
var isClicked = false;
contactBtn.addEventListener('click', function(){
  
  if (!isClicked) {
    isClicked = true;

    //Menu visible
    contactForm.style.display = "block";
  } else {
    isClicked = false;

    //Menu visible
    contactForm.style.display = "none";
  }
});
