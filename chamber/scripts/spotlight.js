const membersURL = "data/members.json";

async function getSpotlights() {

    const response = await fetch(membersURL);

    const members = await response.json();

    console.log(members);

    const qualified = members.filter(member =>
        member.level === 2 || member.level === 3
    );

    qualified.sort(() => Math.random() - 0.5);

    const selected = qualified.slice(0, 3);

    const container = document.querySelector("#spotlight-container");

    container.innerHTML = "";

    selected.forEach(member => {

        container.innerHTML += `
        <section class="spotlight-card">

            <h3>${member.name}</h3>

            <img src="${member.image}" alt="${member.name}">

            <p>${member.tagline}</p>

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>
                ${member.level === 3 ? "Gold Member" : "Silver Member"}
            </p>

        </section>
        `;

    });

}

getSpotlights();