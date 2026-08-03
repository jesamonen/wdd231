// ==========================================
// services.js
// Osuwake Paints & Screeding Solutions
// ==========================================

import { getServices } from "./fetchData.js";

// DOM Elements
const serviceContainer = document.querySelector("#serviceContainer");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");

const modal = document.querySelector("#serviceModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

// Local Storage Key
const STORAGE_KEY = "favoriteServices";

// Load services when page opens
let services = [];

document.addEventListener("DOMContentLoaded", async () => {
    services = await getServices();
    displayServices(services);
});

// ==========================================
// Display Services
// ==========================================

function displayServices(serviceList) {

    serviceContainer.innerHTML = "";

    serviceList.forEach(service => {

        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `

            <img
                src="${service.image}"
                alt="${service.name}"
                loading="lazy"
                width="300"
                height="200">

            <h3>${service.name}</h3>

            <p><strong>Category:</strong> ${service.category}</p>

            <p><strong>Price:</strong> ${service.price}</p>

            <p><strong>Coverage:</strong> ${service.coverage}</p>

            <button class="detailsBtn" data-id="${service.id}">
                View Details
            </button>

            <button class="favoriteBtn" data-id="${service.id}">
                ★ Save
            </button>

        `;

        serviceContainer.appendChild(card);

    });

    activateButtons();
}

// ==========================================
// Search Services
// ==========================================

searchInput.addEventListener("input", () => {

    filterServices();

});

// ==========================================
// Filter Category
// ==========================================

categorySelect.addEventListener("change", () => {

    filterServices();

});

// ==========================================

function filterServices() {

    const keyword = searchInput.value.toLowerCase();

    const category = categorySelect.value;

    const filtered = services.filter(service => {

        const matchesSearch =
            service.name.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "all" ||
            service.category === category;

        return matchesSearch && matchesCategory;

    });

    displayServices(filtered);

}

// ==========================================
// Activate Buttons
// ==========================================

function activateButtons() {

    const detailButtons =
        document.querySelectorAll(".detailsBtn");

    detailButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const service =
                services.find(item => item.id === id);

            showModal(service);

        });

    });

    const favoriteButtons =
        document.querySelectorAll(".favoriteBtn");

    favoriteButtons.forEach(button => {

        button.addEventListener("click", () => {

            saveFavorite(Number(button.dataset.id));

        });

    });

}

// ==========================================
// Modal
// ==========================================

function showModal(service) {

    modalContent.innerHTML = `

        <h2>${service.name}</h2>

        <img
            src="${service.image}"
            alt="${service.name}"
            loading="lazy">

        <p>

            <strong>Category:</strong>

            ${service.category}

        </p>

        <p>

            <strong>Price:</strong>

            ${service.price}

        </p>

        <p>

            <strong>Coverage:</strong>

            ${service.coverage}

        </p>

        <p>

            ${service.description}

        </p>

    `;

    modal.showModal();

}

closeModal.addEventListener("click", () => {

    modal.close();

});

// ==========================================
// Local Storage
// ==========================================

function saveFavorite(id) {

    let favorites =
        JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    if (!favorites.includes(id)) {

        favorites.push(id);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(favorites)
        );

        alert("Service saved to favorites.");

    } else {

        alert("Already saved.");

    }

}