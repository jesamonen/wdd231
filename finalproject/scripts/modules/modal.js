export function initModal() {
  const modal = document.querySelector('#detail-modal');
  const closeBtn = document.querySelector('#close-modal-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.close();
    });
  }
}

export function openModalWithDetails(item) {
  const modal = document.querySelector('#detail-modal');
  const modalContent = document.querySelector('#modal-content');

  if (modal && modalContent) {
    // Template Literals applied
    modalContent.innerHTML = `
      <h2>${item.title}</h2>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Rating:</strong> ${item.rating}</p>
      <p style="margin-top: 0.5rem;">${item.description}</p>
    `;
    modal.showModal();
  }
}