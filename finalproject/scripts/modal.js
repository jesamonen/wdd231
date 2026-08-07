// ==========================================
// modal.js
// Handles Modal Dialog
// ==========================================

const modal = document.querySelector("#serviceModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

/**
 * Display service information in the modal
 * @param {Object} service
 */
export function openModal(service) {

    modalContent.innerHTML = `

        <h2>${service.name}</h2>

        <img
            src="${service.image}"
            alt="${service.name}"
            loading="lazy"
            width="500"
            height="300">

        <p><strong>Category:</strong> ${service.category}</p>

        <p><strong>Price:</strong> ${service.price}</p>

        <p>${service.description}</p>

    `;

    modal.showModal();

}

/**
 * Close the modal
 */
export function closeModalDialog() {

    modal.close();

}

// Close button
closeModal.addEventListener("click", closeModalDialog);

// Close when clicking outside the dialog
modal.addEventListener("click", (event) => {

    const rect = modal.getBoundingClientRect();

    const clickedOutside =

        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside) {

        modal.close();

    }

});

// Close using the Escape key
modal.addEventListener("cancel", () => {

    modal.close();

});