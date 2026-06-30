const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const modified = document.querySelector("#lastModified");
modified.textContent = `Last Modified: ${document.lastModified}`;

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

async function loadSpotlights() {

    const response = await fetch("data/members.json");
    const members = await response.json();

    const goldSilver = members.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    displaySpotlights(goldSilver);
}

function displaySpotlights(members) {

    const container = document.querySelector("#spotlights");

    members.forEach(member => {

        const card = document.createElement("article");

        card.innerHTML = `
            <img src="${member.image}"
                 alt="${member.name}"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.description}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        container.appendChild(card);

    });

}

loadSpotlights();