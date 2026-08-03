// ==========================================
// main.js
// Osuwake Paints & Screeding Solutions
// ==========================================

// Select Elements
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

// Toggle Mobile Navigation
if (menuBtn) {
    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuBtn.innerHTML = "&times;";
            menuBtn.setAttribute("aria-label", "Close Navigation Menu");
        } else {
            menuBtn.innerHTML = "&#9776;";
            menuBtn.setAttribute("aria-label", "Open Navigation Menu");
        }
    });
}

// ==========================================
// Highlight Current Navigation Link
// ==========================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
    }
});

// ==========================================
// Current Year
// ==========================================

const yearElement = document.querySelector("#currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// Last Modified Date
// ==========================================

const modifiedElement = document.querySelector("#lastModified");

if (modifiedElement) {
    modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}