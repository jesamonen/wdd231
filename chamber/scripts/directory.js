const directory = document.querySelector("#directory");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMembers() {

    const response = await fetch("data/members.json");

    const members = await response.json();

    displayMembers(members);

}

function displayMembers(members) {

    directory.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("article");

        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}"
                 alt="${member.name}"
                 loading="lazy"
                 width="150"
                 height="150">

            <h2>${member.name}</h2>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>${member.membership}</strong> Member</p>
        `;

        directory.appendChild(card);

    });

}

gridBtn.addEventListener("click", () => {

    directory.classList.add("grid");

    directory.classList.remove("list");

});

listBtn.addEventListener("click", () => {

    directory.classList.add("list");

    directory.classList.remove("grid");

});

getMembers();