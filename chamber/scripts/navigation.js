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
const year = new Date().getFullYear();

const footer = document.querySelector("footer");

footer.innerHTML += `
    <p>&copy; ${year} Lagos Chamber of Commerce</p>
    <p>Jesam Onen | WDD 231</p>
    <p>Last Modified: ${document.lastModified}</p>
`;


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