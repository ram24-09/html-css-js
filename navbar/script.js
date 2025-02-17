document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const nav = document.querySelector(".navbar-nav");

  toggler.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const toggler = document.querySelector(".navbar-toggler");
//   const nav = document.querySelector(".navbar-collapse");
//   const overlay = document.querySelector(".overlay");

//   toggler.addEventListener("click", function () {
//     nav.classList.toggle("show");
//     overlay.classList.toggle("show");
//   });

//   overlay.addEventListener("click", function () {
//     nav.classList.remove("show");
//     overlay.classList.remove("show");
//   });
// });
