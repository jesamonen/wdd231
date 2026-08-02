document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const formDataContainer = document.querySelector('#form-data-display');

  if (formDataContainer) {
    let html = '<ul>';
    params.forEach((value, key) => {
      html += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    html += '</ul>';
    formDataContainer.innerHTML = html;
  }
});