// Get the Navbar
const headerNav = document.querySelector("header");

// Get document body
const body = document.body;

window.addEventListener("scroll", popNavbar);

function popNavbar(e) {
  const scrollPos = window.scrollY;
  if (scrollPos > 0) {
    headerNav.style.position = "fixed";
    headerNav.style.boxShadow = "0px 5px 4px 2px rgba(0,0,0,0.3)";
    body.style.marginTop = `${headerNav.offsetHeight}px`;
  } else {
    headerNav.style.position = "relative";
    body.style.marginTop = 0;
    headerNav.style.boxShadow = "none";
  }
}
