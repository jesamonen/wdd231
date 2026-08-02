import { initNavigation } from './modules/navigation.js';
import { getProjectsData } from './modules/dataFetcher.js';
import { initModal, openModalWithDetails } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', async () => {
  initNavigation();
  initModal();

  const container = document.querySelector('#gallery-container');
  const filterSelect = document.querySelector('#filter-select');

  if (container) {
    const projects = await getProjectsData();

    // Render projects array using template literals
    const renderItems = (items) => {
      container.innerHTML = '';
      
      // Array Method: forEach
      items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" loading="lazy" width="600" height="400">
          <h3>${item.title}</h3>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Rating:</strong> ${item.rating}</p>
          <button class="btn view-details-btn">View Details</button>
        `;

        card.querySelector('.view-details-btn').addEventListener('click', () => {
          openModalWithDetails(item);
        });

        container.appendChild(card);
      });
    };

    renderItems(projects);

    // Filter functionality using Array Method: filter
    if (filterSelect) {
      filterSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'all') {
          renderItems(projects);
        } else {
          const filtered = projects.filter(p => p.category === selectedValue);
          renderItems(filtered);
        }
      });
    }
  }

  // Local Storage Requirement: Store last visit time
  const visitDisplay = document.querySelector('#last-visit-msg');
  if (visitDisplay) {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toLocaleDateString();

    if (lastVisit) {
      visitDisplay.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
    } else {
      visitDisplay.textContent = `Welcome! Thank you for visiting Osuwake Paints for the first time.`;
    }
    localStorage.setItem('lastVisit', now);
  }
});