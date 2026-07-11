const container = document.getElementById("members");

async function getMembers() {

const response = await fetch("data/members.json");

const data = await response.json();

displayMembers(data);

}

function displayMembers(members){

members.forEach(member=>{

const card=document.createElement("section");

card.innerHTML=`

<img src="images/${member.image}" alt="${member.name}" loading="lazy">

<h3>${member.name}</h3>

<p>${member.address}</p>

<p>${member.phone}</p>

<p>${member.description}</p>

<a href="${member.website}" target="_blank">Visit Website</a>

`;

container.appendChild(card);

});

}

getMembers();

document.getElementById("grid").addEventListener("click",()=>{

container.classList.add("grid");

container.classList.remove("list");

});

document.getElementById("list").addEventListener("click",()=>{

container.classList.add("list");

container.classList.remove("grid");

});

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("modified").textContent=document.lastModified;