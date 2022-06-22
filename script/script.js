const navbar = document.querySelector(".nav-bar");
const scrollToTopButton = document.querySelector(".scrollToTop");

let lastScrollToTop;

window.addEventListener("scroll", () => {
  let scrollToTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollToTop > lastScrollToTop) {
    scrollToTopButton.style.bottom = "50px";
  } else {
    scrollToTopButton.style.bottom = "-50px";
  }
  lastScrollToTop = scrollToTop;
});

// return to the top on button click
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
