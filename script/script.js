const navbar = document.querySelector(".nav-bar");
const scrollToTopButton = document.querySelector(".scrollToTop");

const modal = document.getElementById("modal-overlay");
const closeModal = document.querySelector(".close-modal");
const projectContainer = document.querySelectorAll(".project-container");
const projectTitle = document.querySelector(".project-title");
const modalImages = document.querySelectorAll("#modal-image");
const modalText = document.querySelector(".modal-text");
const demoLink = document.getElementById("demo");
const codeLink = document.getElementById("code");

let rootElement = document.documentElement;

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

    if (project.getElementsByTagName("h1")[0].classList.contains("static")) {
      modalText.innerText = descriptions.static;
      demoLink.href = "https://mango-gills.github.io/Static-Website/";
      codeLink.href = "https://github.com/mango-gills/Static-Website";

      getImages(1);
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("dynamic")
    ) {
      modalText.innerText = descriptions.dynamic;
      demoLink.href = "#";
      codeLink.href = "#";

      getImages(2);
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("react")
    ) {
      modalText.innerText = descriptions.react;
      demoLink.href = "https://shappy-mango-gills.vercel.app/";
      codeLink.href = "https://github.com/mango-gills/Shappy";

      getImages(3);
    } else if (
      project.getElementsByTagName("h1")[0].classList.contains("fullstack")
    ) {
      modalText.innerText = descriptions.fullstack;
      demoLink.href = "https://food-street.vercel.app/";
      codeLink.href = "https://github.com/mango-gills/foodStreet";

      getImages(4);
    } else {
      modalText.innerText = descriptions.final;
      demoLink.href = "https://chapp-sigma.vercel.app/";
      codeLink.href = "https://github.com/mango-gills/final-project_group-2";

      getImages(5);
    }
  });
});

// closes modal when clicked on any part of the page.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
};

const getImages = (num) => {
  for (let i = 0; i <= modalImages.length; i++) {
    if (modalImages !== undefined) {
      modalImages[i].src = `images/p${num}-${i + 1}.png`;
    }
  }
};

//
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide !== maxSlide) {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide !== 0) {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
