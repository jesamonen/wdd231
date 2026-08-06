import { getServices } from "./fetchData.js";
import { displayServices } from "./displayServices.js";

const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");

let services = [];

document.addEventListener("DOMContentLoaded", async () => {

    services = await getServices();

    displayServices(services);

});

searchInput.addEventListener("input", filterServices);
categorySelect.addEventListener("change", filterServices);

function filterServices() {

    const keyword = searchInput.value.toLowerCase();

    const category = categorySelect.value;

    const filtered = services.filter(service =>

        service.name.toLowerCase().includes(keyword) &&
        (category === "all" || service.category === category)

    );

    displayServices(filtered);

}