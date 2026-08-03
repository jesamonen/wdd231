// ==========================================
// fetchData.js
// Fetch services from JSON file
// ==========================================

const DATA_URL = "data/services.json";

/**
 * Fetch all services from the JSON file.
 * @returns {Promise<Array>} Array of service objects
 */
export async function getServices() {
    try {
        const response = await fetch(DATA_URL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const services = await response.json();

        return services;

    } catch (error) {

        console.error("Unable to load services:", error);

        return [];
    }
}