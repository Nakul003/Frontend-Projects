const hamburger = document.querySelector(".hamburger");
const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");
const line_3 = document.querySelector(".line-3");
const mobile_nav = document.querySelector(".nav-mobile")

hamburger.addEventListener("click", () => {

    mobile_nav.classList.toggle("nav-mobile-block")
    line_1.classList.toggle("cross-1");
    line_2.classList.toggle("cross-2");
    line_3.classList.toggle("cross-3");

})
