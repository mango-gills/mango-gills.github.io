const navbar = document.querySelector(".nav-bar");
const scrollToTopButton = document.querySelector(".scrollToTop");

const modal = document.getElementById("modal-overlay");
const closeModal = document.querySelector(".close-modal");
const projectContainer = document.querySelectorAll(".project-container");
const projectTitle = document.querySelector(".project-title");
const modalImage = document.getElementById("modal-image");
const modalText = document.querySelector(".modal-text");
const demoLink = document.getElementById("demo");
const codeLink = document.getElementById("code");

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
  modal.style.opacity = 0;
  document.body.style.overflowY = "scroll";
});

projectContainer.forEach((project) => {
  project.addEventListener("click", () => {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
    projectTitle.innerText = project.getElementsByTagName("h1")[0].innerText;
    modalImage.src = project.getElementsByTagName("img")[0].src;

    if (project.getElementsByTagName("h1")[0].classList.contains("static")) {
      modalText.innerText = descriptions.static;
      demoLink.href = "https://mango-gills.github.io/Static-Website/";
      codeLink.href = "https://github.com/mango-gills/Static-Website";
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("dynamic")
    ) {
      modalText.innerText = descriptions.dynamic;
      demoLink.href = "#";
      codeLink.href = "#";
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("react")
    ) {
      modalText.innerText = descriptions.react;
      demoLink.href = "https://shappy-mango-gills.vercel.app/";
      codeLink.href = "https://github.com/mango-gills/Shappy";
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("fullstack")
    ) {
      modalText.innerText = descriptions.fullstack;
      demoLink.href = "#";
      codeLink.href = "https://github.com/mango-gills/foodStreet";
    } else {
      modalText.innerText = descriptions.final;
      idLink.href = "#";
      codeLink.href = "https://github.com/mango-gills/final-project_group-2";
    }
  });
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
};

//
const descriptions = {
  static:
    "Project 1 - A static web portfolio made with HTML & CSS with responsive mobile layout.",
  dynamic:
    "Project 2 - Game made in HTML, CSS and JavaScript - inspired by 'Who Wants to Be a Millionaire?'. First project working with a team.",
  react:
    "Project 3 - E-commerce website made with React for frontend and uses the Fake store rest API.",
  fullstack:
    "Project 4 - Full stack food blogging website made with React for frontend, NodeJS & Express for backend and MongoDB as database.",
  final:
    "Project 5 - Chat application using ReactJS for frontend and Firebase for the backend. Features sending text and images, searching and adding users. Email/Password registration or Google Signin. Group project and team divided for frontend and backend tasks.",
};
