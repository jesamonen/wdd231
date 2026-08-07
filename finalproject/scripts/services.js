// ==========================================
// services.js
// Displays Services
// Handles Search, Category Filter, Favorites, and Modal
// ==========================================

import { getServices } from "./fetchdata.js";
import {
    addFavorite,
    removeFavorite,
    isFavorite
} from "./storage.js";
import { openModal } from "./modal.js";

// ==========================================
// DOM ELEMENTS & STATE
// ==========================================

const serviceContainer = document.querySelector("#serviceContainer");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");

let allProducts = [];

// ==========================================
// LOAD SERVICES
// ==========================================

async function initServices() {
    if (!serviceContainer) return;

    try {
        allProducts = await getServices();

        if (!allProducts || allProducts.length === 0) {
            serviceContainer.innerHTML = "<p>No services available at this time.</p>";
            return;
        }

        renderServices(allProducts);

    } catch (error) {
        console.error("Failed to load services:", error);
        serviceContainer.innerHTML = "<p>Failed to load services. Please try again later.</p>";
    }
}

// ==========================================
// RENDER SERVICES
// ==========================================

function renderServices(products) {
    if (!serviceContainer) return;

    serviceContainer.innerHTML = "";

    if (products.length === 0) {
        serviceContainer.innerHTML = "<p class='no-results'>No services found matching your criteria.</p>";
        return;
    }

    // Use DocumentFragment to minimize DOM reflows
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const saved = isFavorite(product.id);

        const card = document.createElement("div");
        card.classList.add("service-card");

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                width="500"
                height="300">

            <h2>${product.name}</h2>

            <p>
                <strong>Category:</strong> ${product.category}
            </p>

            <p>
                <strong>Price:</strong> ${product.price}
            </p>

            <p>
                ${product.description || ""}
            </p>

            <button
                class="details-btn"
                data-id="${product.id}">
                View Details
            </button>

            <button
                class="favorite-btn"
                data-id="${product.id}">
                ${saved ? "❤️ Saved" : "♡ Save"}
            </button>
        `;

        fragment.appendChild(card);
    });

    serviceContainer.appendChild(fragment);
}

// ==========================================
// SEARCH & CATEGORY FILTER
// ==========================================

function filterServices() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const selectedCategory = categorySelect ? categorySelect.value : "all";

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory =
            selectedCategory === "all" ||
            product.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchesSearch =
            searchTerm === "" ||
            product.name.toLowerCase().includes(searchTerm) ||
            (product.description && product.description.toLowerCase().includes(searchTerm));

        return matchesCategory && matchesSearch;
    });

    renderServices(filteredProducts);
}

// ==========================================
// EVENT LISTENERS
// ==========================================

if (searchInput) {
    searchInput.addEventListener("input", filterServices);
}

if (categorySelect) {
    categorySelect.addEventListener("change", filterServices);
}

// ==========================================
// MODAL & FAVORITES (Event Delegation)
// ==========================================

if (serviceContainer) {
    serviceContainer.addEventListener("click", (event) => {
        const detailsBtn = event.target.closest(".details-btn");
        const favoriteBtn = event.target.closest(".favorite-btn");

        // View Details
        if (detailsBtn) {
            const id = detailsBtn.dataset.id;
            const product = allProducts.find(item => String(item.id) === String(id));

            if (product) {
                openModal(product);
            }
            return;
        }

        // Favorite Toggle
        if (favoriteBtn) {
            const id = favoriteBtn.dataset.id;
            const product = allProducts.find(item => String(item.id) === String(id));

            if (!product) return;

            if (isFavorite(product.id)) {
                removeFavorite(product.id);
                favoriteBtn.textContent = "♡ Save";
            } else {
                addFavorite(product);
                favoriteBtn.textContent = "❤️ Saved";
            }
        }
    });
}

// ==========================================
// START
// ==========================================

initServices();