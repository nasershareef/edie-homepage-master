const navbarNav = document.querySelector(".navbar-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    if (navbarNav.getAttribute("data-visible") === "false") {
        navbarNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        navbarNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})