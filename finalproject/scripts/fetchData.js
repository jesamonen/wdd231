// fetchData.js

const DATA_URL = "data/services.json";

export async function getServices() {
    try {
        const response = await fetch(DATA_URL);
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}