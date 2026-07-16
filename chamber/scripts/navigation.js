// navigation.js

// ===============================
// Mobile Navigation Menu
// ===============================
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});


// ===============================
// Footer Information
// ===============================
document.getElementById("current-year").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").textContent =
    document.lastModified;

// ===============================
// Highlight Current Page
// ===============================
const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});