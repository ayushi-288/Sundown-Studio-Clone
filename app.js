// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),-
//     smooth: true
// });

let elemC= document.querySelector("#elem-container");
let fixed= document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
    fixed.style.display= "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display= "none"
})

let elem = document.querySelectorAll(".elem");
elem.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let img= e.getAttribute("data-image");
        fixed.style.backgroundImage= `url(${img})`
    })
}
)


let img1= document.querySelector("#btn1-img");
let btn= document.querySelectorAll(".btn");
let para= document.querySelector("#para");

btn.forEach(function(b){
    b.addEventListener("click", function(){
    let gimg= b.getAttribute("data-img");
    img1.style.backgroundImage= `url(${gimg})`
    b.style.color= "white";

    let p= b.getAttribute("data-p")
    para.innerHTML=p
    })
})

function swiperAnimation(){
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation(){
    let menu = document.querySelector("nav h3");
    let full = document.querySelector("#full-scr");
    let navimg = document.querySelector("nav img");
    let navh3= document.querySelectorAll(".h3");
    let flag = 0;

    menu.addEventListener("click", function () {
    navh3.forEach(function(h){
        h.style.display= "block"
    })

    if (flag == 0) {
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    } else {
        full.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
})
}

swiperAnimation();
menuAnimation();

let loader= document.querySelector("#loader");
setTimeout(function(){
    loader.style.top= "-100%"
},4200)