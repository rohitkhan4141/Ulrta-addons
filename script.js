//selector
const hamburger = document.querySelector(".burger-menu")
const links = document.querySelector(".hero-section__menubar--links ul");
const cross = document.querySelector(".cross");

// nav toggoling
hamburger.addEventListener("click",()=>{
  links.style.display = "flex";
  cross.style.display = "block";
})

cross.addEventListener("click",()=>{
  links.style.display = "none";
  cross.style.display = "none";
})

//slider js
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

