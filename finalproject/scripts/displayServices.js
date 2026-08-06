import { addFavorite, isFavorite } from "./storage.js";
import { openModal } from "./modal.js";

const serviceContainer =
document.querySelector("#serviceContainer");

let services = [];

export function displayServices(serviceList) {

    services = serviceList;

    serviceContainer.innerHTML = "";

    serviceList.forEach(service => {

        // create card...

    });

    addButtonEvents();

}