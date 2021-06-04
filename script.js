const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
  console.log(1);
  document.querySelector(".heroSection").style.visibility = "hidden";
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
  document.querySelector(".heroSection").style.visibility = "visible";
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

// document.querySelector(".buttons").addEventListener("click", (e) => {
//   document.querySelector(".buttons").style.display = "none";
// });
AOS.init();

//remove multiple attributes from element
//https://stackoverflow.com/a/50541881
Element.prototype.removeAttributes = function (...attrs) {
  attrs.forEach((attr) => this.removeAttribute(attr));
};

//round to 2 decimal places
//https://stackoverflow.com/a/11832950
function r(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

//remove svg whitespace
function svgRemoveWhitespace(svg) {
  let box = svg.getBBox(),
    viewBox = [r(box.x), r(box.y), r(box.width), r(box.height)].join(" ");

  svg.setAttribute("viewBox", viewBox);
  svg.removeAttributes("width", "height"); //optional
}

const svgs = document.querySelectorAll("svg");
svgs.forEach((svg) => svgRemoveWhitespace(svg));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mynav").style.backgroundColor = "#282828";
  } else {
    document.getElementById("mynav").style.backgroundColor = "#161414";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("bttns").style.visibility = "visible";
    document.getElementById("bttns").style.opacity = 1;
  } else {
    document.getElementById("bttns").style.opacity = 0;
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}