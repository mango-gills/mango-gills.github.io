const navbar = document.querySelector(".nav-bar");

let lastScrollToTop;

window.addEventListener("scroll", () => {
  let scrollToTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollToTop > lastScrollToTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollToTop = scrollToTop;
});

console.log(navbar);
