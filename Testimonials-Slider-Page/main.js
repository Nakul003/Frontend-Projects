let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");

next.addEventListener("click", () => {
  img1.classList.add("opacity-0");
  img2.classList.add("opacity-1");
  
  document.querySelector(".description").innerHTML = `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into this incredible. I now feel so confident about starting up as a professional developer. "`;

  document.querySelector(".name").innerHTML = "John Tarkpor";

  document.querySelector(".post").innerHTML = "Junior Front-end Developer";

});


pre.addEventListener("click", () => {
  img1.classList.remove("opacity-0");
  img2.classList.remove("opacity-1");

  document.querySelector(".description").innerHTML = `" I've been interested in coding for a while but never taken the jump, until now.I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`;

  document.querySelector(".name").innerHTML = "Tanya Sinclair";

  document.querySelector(".post").innerHTML = "Ux Engineer";

});