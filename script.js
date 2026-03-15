document.addEventListener("DOMContentLoaded", function () {

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

slides.forEach((slide)=>{
slide.classList.remove("active");
});

dots.forEach((dot)=>{
dot.classList.remove("active");
});

slides[index].classList.add("active");
dots[index].classList.add("active");

current = index;

}

function nextSlide(){

current++;

if(current >= slides.length){
current = 0;
}

showSlide(current);

}

setInterval(nextSlide,4000);

dots.forEach((dot,i)=>{
dot.addEventListener("click",()=>{
showSlide(i);
});
});

});

const cards = document.querySelectorAll(".card");
let index = 0;

function updateCards(){

cards.forEach(card=>{
card.classList.remove("active");
});

cards[index].classList.add("active");

}

document.querySelector(".right").onclick = function(){

index++;

if(index >= cards.length){
index = 0;
}

updateCards();

}

document.querySelector(".left").onclick = function(){

index--;

if(index < 0){
index = cards.length - 1;
}

updateCards();

}

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

hamburger.classList.remove("active");
mobileMenu.classList.remove("active");
overlay.classList.remove("active");

});


let i=0;

const testimonials=document.querySelectorAll(".testimonial");

function showTestimonials(){

testimonials.forEach(t=>t.classList.remove("active"));

testimonials[i].classList.add("active");

index++;

if(i>=testimonials.length){
i=0;
}

}

setInterval(showTestimonials,4000);
