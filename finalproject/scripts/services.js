// ==========================================
// services.js
// Osuwake Paints & Screeding Solutions
// ==========================================

import { getServices } from "./fetchData.js";

import {
    addFavorite,
    isFavorite
} from "./storage.js";

import {
    openModal
} from "./modal.js";

// ==========================================
// DOM ELEMENTS
// ==========================================

const serviceContainer = document.querySelector("#serviceContainer");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");

// ==========================================
// GLOBAL VARIABLES
// ==========================================

let services = [];

// ==========================================
// INITIALIZE PAGE
// ==========================================

document.addEventListener("DOMContentLoaded", async () => {

    services = await getServices();

    displayServices(services);

});

// ==========================================
// DISPLAY SERVICES
// ==========================================

function displayServices(serviceList) {

    serviceContainer.innerHTML = "";

    if (serviceList.length === 0) {

        serviceContainer.innerHTML = `
            <p>No services found.</p>
        `;

        return;

    }

    serviceList.forEach(service => {

        const favoriteLabel = isFavorite(service.id)
            ? "★ Saved"
            : "☆ Save";

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `

            <img
                src="${service.image}"
                alt="${service.name}"
                loading="lazy"
                width="300"
                height="200">

            <div class="card-content">

                <h3>${service.name}</h3>

                <p><strong>Category:</strong> ${service.category}</p>

                <p><strong>Price:</strong> ${service.price}</p>

                <p><strong>Coverage:</strong> ${service.coverage}</p>

                <div class="card-buttons">

                    <button
                        class="detailsBtn"
                        data-id="${service.id}">

                        View Details

                    </button>

                    <button
                        class="favoriteBtn"
                        data-id="${service.id}">

                        ${favoriteLabel}

                    </button>

                </div>

            </div>

        `;

        serviceContainer.appendChild(card);

    });

    addButtonEvents();

}

// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener("input", filterServices);

// ==========================================
// CATEGORY FILTER
// ==========================================

categorySelect.addEventListener("change", filterServices);

// ==========================================
// FILTER SERVICES
// ==========================================

function filterServices() {

    const keyword = searchInput.value.trim().toLowerCase();

    const category = categorySelect.value;

    const filteredServices = services.filter(service => {

        const matchesSearch =
            service.name.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "all" ||
            service.category === category;

        return matchesSearch && matchesCategory;

    });

    displayServices(filteredServices);

}

// ==========================================
// BUTTON EVENTS
// ==========================================

function addButtonEvents() {

    const detailButtons =
        document.querySelectorAll(".detailsBtn");

    detailButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const service = services.find(item => item.id === id);

            if (service) {

                openModal(service);

            }

        });

    });

    const favoriteButtons =
        document.querySelectorAll(".favoriteBtn");

    favoriteButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            saveFavorite(id);

        });

    });

}

// ==========================================
// SAVE FAVORITE
// ==========================================

function saveFavorite(id) {

    if (addFavorite(id)) {

        alert("Service added to your favorites.");

    } else {

        alert("This service is already in your favorites.");

    }

    displayServices(services);

}