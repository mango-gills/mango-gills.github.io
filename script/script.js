const navbar = document.querySelector(".nav-bar");
const scrollToTopButton = document.querySelector(".scrollToTop");
let rootElement = document.documentElement;

const handleScroll = () => {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    //show
    scrollToTopButton.classList.add("showBtn");
  } else {
    // hide
    scrollToTopButton.classList.remove("showBtn");
  }
};

// return to the top on button click
scrollToTopButton.addEventListener("click", () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", handleScroll);
