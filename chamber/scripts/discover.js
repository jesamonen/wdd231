import { places } from "../data/discover.mjs";

// ===========================
// Build Discover Cards
// ===========================

const container = document.querySelector("#discover-cards");

places.forEach((place, index) => {

    const card = document.createElement("section");
    card.className = "discover-card";
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img
                src="${place.image}"
                alt="${place.name}"
                width="300"
                height="200"
                loading="lazy">
        </figure>

        <address>
            ${place.address}
        </address>

        <p>
            ${place.description}
        </p>

        <button type="button">
            Learn More
        </button>
    `;

    container.appendChild(card);

});


// ===========================
// Visitor Message
// ===========================

const message = document.querySelector("#visit-message");

const lastVisit = Number(localStorage.getItem("lastVisit"));

const today = Date.now();

if (!lastVisit) {

    message.textContent =
        "Welcome! Let us know if you have any questions.";

}
else {

    const days =
        Math.floor((today - lastVisit) / 86400000);

    if (days < 1) {

        message.textContent =
            "Back so soon! Awesome!";

    }
    else if (days === 1) {

        message.textContent =
            "You last visited 1 day ago.";

    }
    else {

        message.textContent =
            `You last visited ${days} days ago.`;

    }

}

localStorage.setItem("lastVisit", today);


// ===========================
// Footer Information
// ===========================

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const modified = document.querySelector("#lastModified");

if (modified) {
    modified.textContent = document.lastModified;
}


// ===============================
// Local Storage - Last Visit
// ===============================

const visitMessage = document.querySelector("#visit-message");

// Get previous visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Current date/time in milliseconds
const now = Date.now();

if (!lastVisit) {

    // First visit
    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    // Difference in milliseconds
    const difference = now - Number(lastVisit);

    // Convert milliseconds to days
    const daysBetween = Math.floor(difference / 86400000);

    if (daysBetween < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;

    }
}

// Save today's visit
localStorage.setItem("lastVisit", now);