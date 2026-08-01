// ===============================
// Mobile Navigation Menu
// ===============================
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

        // Accessibility toggle
        const isOpen = navigation.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
        
        // Change icon symbol if desired (e.g., '❌' when open, '☰' when closed)
        menuButton.innerHTML = isOpen ? "&#10005;" : "&#9776;";
    });
}

// ===============================
// Highlight Current Active Page
// ===============================
let currentPage = window.location.pathname.split("/").pop();

// Handle root directory visits (e.g. '/' defaults to 'index.html')
if (currentPage === "") {
    currentPage = "index.html";
}

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    // Remove existing hardcoded active classes
    link.classList.remove("active");

    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
        link.classList.add("active");
    }
});

// ===============================
// Footer Information
// ===============================
const yearSpan = document.getElementById("current-year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const modifiedSpan = document.getElementById("lastModified");
if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
}