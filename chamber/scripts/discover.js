import { places } from "../data/discover.mjs";

// ===========================
// Build Discover Cards
// ===========================

const container = document.querySelector("#discover-cards");

if (container) {
    places.forEach((place, index) => {
        const card = document.createElement("section");
        card.className = `discover-card card${index + 1}`;

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
}

// ===========================
// Local Storage - Visitor Message
// ===========================

const visitMessage = document.querySelector("#visit-message");

if (visitMessage) {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const difference = now - Number(lastVisit);
        const daysBetween = Math.floor(difference / 86400000);

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
}

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