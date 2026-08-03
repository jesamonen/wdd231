// ==========================================
// storage.js
// Handles Local Storage
// ==========================================

const STORAGE_KEY = "favoriteServices";

/**
 * Get all favorite services
 * @returns {Array}
 */
export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/**
 * Save favorites to Local Storage
 * @param {Array} favorites
 */
export function saveFavorites(favorites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

/**
 * Add a service to favorites
 * @param {number} id
 */
export function addFavorite(id) {

    const favorites = getFavorites();

    if (!favorites.includes(id)) {

        favorites.push(id);

        saveFavorites(favorites);

        return true;
    }

    return false;
}

/**
 * Remove a favorite
 * @param {number} id
 */
export function removeFavorite(id) {

    let favorites = getFavorites();

    favorites = favorites.filter(item => item !== id);

    saveFavorites(favorites);

}

/**
 * Check if a service is already a favorite
 * @param {number} id
 * @returns {boolean}
 */
export function isFavorite(id) {

    return getFavorites().includes(id);

}