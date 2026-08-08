// ==========================================
// services.js
// Displays Services
// Handles Search, Category Filter, Favorites, and Modal
// ==========================================

import { getServices } from "./product.js";
import {
    getFavorites,
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

let allProducts = []; // Master list fetched from API

// ==========================================
// DISPLAY SERVICES
// ==========================================

async function initServices() {
    try {
        allProducts = await getServices();

        if (!allProducts || allProducts.length === 0) {
            serviceContainer.innerHTML = "<p>No services available at this time.</p>";
            return;
        }

        // Initial render with all products
        renderServices(allProducts);

    } catch (error) {
        console.error("Failed to load services:", error);
        serviceContainer.innerHTML = "<p>Failed to load services. Please try again later.</p>";
    }
}

// Render filtered or full list of products
function renderServices(products) {
    if (products.length === 0) {
        serviceContainer.innerHTML = "<p class='no-results'>No services found matching your criteria.</p>";
        return;
    }

    // Build HTML string once and assign to DOM in a single write operation
    serviceContainer.innerHTML = products.map(product => {
        const saved = isFavorite(product.id);

        return `
            <div class="service-card">
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
                    ${product.description}
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
            </div>
        `;
    }).join("");
}

// ==========================================
// FILTER LOGIC (Search & Category)
// ==========================================

function filterServices() {
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const selectedCategory = categorySelect ? categorySelect.value : "all";

    const filtered = allProducts.filter(product => {
        // Category check
        const matchesCategory = selectedCategory === "all" || 
            product.category.toLowerCase() === selectedCategory.toLowerCase();

        // Search text check (matches name or description)
        const matchesSearch = searchTerm === "" ||
            product.name.toLowerCase().includes(searchTerm) ||
            (product.description && product.description.toLowerCase().includes(searchTerm));

        return matchesCategory && matchesSearch;
    });

    renderServices(filtered);
}


if (searchInput) {
    searchInput.addEventListener("input", filterServices);
}

if (categorySelect) {
    categorySelect.addEventListener("change", filterServices);
}

// ==========================================
// (Modal & Favorites)
// ==========================================

if (serviceContainer) {
    serviceContainer.addEventListener("click", (event) => {
        const detailsBtn = event.target.closest(".details-btn");
        const favoriteBtn = event.target.closest(".favorite-btn");

        // Handle Details Button Click
        if (detailsBtn) {
            const id = detailsBtn.dataset.id;
            const product = allProducts.find(item => String(item.id) === String(id));

            if (product) {
                openModal(product);
            }
            return;
        }

        // Handle Favorite Button Click
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
// INITIALIZE
// ==========================================

initServices();