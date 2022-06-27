const navbar = document.querySelector(".nav-bar");
const scrollToTopButton = document.querySelector(".scrollToTop");

const modal = document.getElementById("modal-overlay");
const closeModal = document.querySelector(".close-modal");
const projectContainer = document.querySelectorAll(".project-container");
const projectTitle = document.querySelector(".project-title");
const modalImage = document.getElementById("modal-image");

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

closeModal.addEventListener("click", () => {
  modal.style.visibility = "hidden";
  document.body.style.overflowY = "scroll";
});

projectContainer.forEach((project) => {
  // console.log(project.getElementsByTagName("img"));
  project.addEventListener("click", () => {
    modal.style.visibility = "visible";
    projectTitle.innerText = project.getElementsByTagName("h1")[0].innerText;
    modalImage.src = project.getElementsByTagName("img")[0].src;
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  }
};
