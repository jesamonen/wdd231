// storage.js

const STORAGE_KEY = "favoriteServices";

// Get all favorites
export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save favorites
export function saveFavorites(favorites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

// Add a favorite
export function addFavorite(id) {
    const favorites = getFavorites();

    favorites.push(id);

    saveFavorites(favorites);
}

// Remove a favorite
export function removeFavorite(id) {
    const favorites = getFavorites().filter(item => item !== id);

    saveFavorites(favorites);
}

// Check if a service is a favorite
export function isFavorite(id) {
    return getFavorites().includes(id);
}