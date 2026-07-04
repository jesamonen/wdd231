const params = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

results.innerHTML = `
<p><strong>Name:</strong>
${params.get("firstName")} ${params.get("lastName")}</p>

<p><strong>Email:</strong>
${params.get("email")}</p>

<p><strong>Organization:</strong>
${params.get("organization")}</p>

<p><strong>Membership:</strong>
${params.get("membership")}</p>

<p><strong>Submitted:</strong>
${params.get("timestamp")}</p>
`;