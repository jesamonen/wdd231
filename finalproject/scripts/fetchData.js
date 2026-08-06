// fetchData.js

const DATA_URL = "data/services.json";

export async function getServices() {
    try {
        const response = await fetch(DATA_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}