const ham = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")

ham.addEventListener("click", () => {

    if (nav.classList.contains("menu")) {
        nav.classList.add("menu-exit"); // Trigger slide-out animation
        nav.classList.remove("menu");
    } else {
        nav.classList.remove("menu-exit");
        nav.classList.add("menu"); // Trigger slide-in animation
    }

    document.querySelector(".line-1").classList.toggle("cross-1")
    document.querySelector(".line-2").classList.toggle("cross-2")
    document.querySelector(".line-3").classList.toggle("cross-3")
    document.body.classList.toggle("body-color")
    ham.classList.toggle("fixed-cross")
})








