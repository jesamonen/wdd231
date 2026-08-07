// ==========================================
// modal.js
// Handles Service Detail Accessible Dialog
// ==========================================

const modal = document.querySelector("#serviceModal");
const modalContent = document.querySelector("#modalContent");
const closeButton = document.querySelector("#closeModal");

// Open modal function
export function openModal(service) {
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <h2>${service.name}</h2>

        <img 
            src="${service.image}"
            alt="${service.name}"
            width="500"
            height="300"
            loading="lazy">

        <p><strong>Category:</strong> ${service.category}</p>

        <p><strong>Price:</strong> ${service.price}</p>

        <p>${service.description}</p>
    `;

    modal.showModal();
}

// Close modal function
function closeModal() {
    if (modal) {
        modal.close();
    }
}

// Close when button is clicked
if (closeButton) {
    closeButton.addEventListener("click", closeModal);
}

// Close when clicking on the backdrop outside the modal
if (modal) {
    modal.addEventListener("click", (event) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            closeModal();
        }
    });
}