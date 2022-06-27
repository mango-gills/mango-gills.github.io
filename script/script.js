const navbar = document.querySelector(".nav-bar");
const scrollToTopButton = document.querySelector(".scrollToTop");

const modal = document.getElementById("modal-overlay");
const closeModal = document.querySelector(".close-modal");
const projectContainer = document.querySelectorAll(".project-container");
const projectTitle = document.querySelector(".project-title");
const modalImage = document.getElementById("modal-image");
const modalText = document.querySelector(".modal-text");

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
  console.log(project);
  project.addEventListener("click", () => {
    modal.style.visibility = "visible";
    projectTitle.innerText = project.getElementsByTagName("h1")[0].innerText;
    modalImage.src = project.getElementsByTagName("img")[0].src;

    if (project.getElementsByTagName("h1")[0].classList.contains("static")) {
      modalText.innerText = descriptions.static;
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("dynamic")
    ) {
      modalText.innerText = descriptions.dynamic;
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("fullstack")
    ) {
      modalText.innerText = descriptions.fullstack;
    } else {
      modalText.innerText = descriptions.final;
    }
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  }
};

//
const descriptions = {
  static: "A static web portfolio made with HTML & CSS.",
  dynamic:
    "Who wants to be a millionaire web game made in HTML, CSS and JavaScript. First team collaboration.",
  fullstack:
    "Food blogging web app, with CRUD functionality made with MERN Stack.",
  final:
    "Chat application using ReactJS for front-end and Firebase for the backend. Features sending text and images, searching and adding users.",
};
