// ===================================
// Fetch and Display Directory Members
// ===================================
const url = 'data/members.json';
const container = document.getElementById('member-container');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

async function getMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Data fetch failed');
        const data = await response.json();
        
        // Handle array directly or object wrapper { "members": [...] }
        const memberList = Array.isArray(data) ? data : data.members;
        displayMembers(memberList);
    } catch (error) {
        console.error('Error fetching member data:', error);
        if (container) {
            container.innerHTML = `<p class="error">Unable to load members at this time.</p>`;
        }
    }
}

function displayMembers(members) {
    if (!container || !members) return;
    
    container.innerHTML = ""; // Clear existing placeholder content

    members.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        // Map membership numerical level values to labels
        const levels = { 1: 'Member', 2: 'Silver', 3: 'Gold' };
        const levelLabel = levels[member.level] || 'Member';

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" loading="lazy" width="150" height="100">
            <h3>${member.name}</h3>
            ${member.tagline ? `<p class="tagline"><em>"${member.tagline}"</em></p>` : ''}
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p class="membership-level ${levelLabel.toLowerCase()}">${levelLabel} Member</p>
            <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
        `;
        container.appendChild(card);
    });
}

// ===================================
// View Switching Event Listeners
// ===================================
if (gridBtn && listBtn && container) {
    gridBtn.addEventListener('click', () => {
        container.classList.add('grid');
        container.classList.remove('list');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    });

    listBtn.addEventListener('click', () => {
        container.classList.add('list');
        container.classList.remove('grid');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    });
}

// Initial execution
getMembers();