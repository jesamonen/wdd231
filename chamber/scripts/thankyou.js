// ==========================================
// GET FORM DATA FROM THE URL
// ==========================================

const params = new URLSearchParams(window.location.search);

// ==========================================
// DISPLAY REQUIRED FORM FIELDS
// ==========================================

document.querySelector("#firstname").textContent =
    params.get("firstname") || "";

document.querySelector("#lastname").textContent =
    params.get("lastname") || "";

document.querySelector("#email").textContent =
    params.get("email") || "";

document.querySelector("#phone").textContent =
    params.get("phone") || "";

document.querySelector("#organization").textContent =
    params.get("organization") || "";

// ==========================================
// DISPLAY MEMBERSHIP LEVEL
// ==========================================

const membership = params.get("membership");

const membershipNames = {
    np: "NP Membership",
    bronze: "Bronze Membership",
    silver: "Silver Membership",
    gold: "Gold Membership"
};

document.querySelector("#membership").textContent =
    membershipNames[membership] || membership;

// ==========================================
// DISPLAY FORMATTED TIMESTAMP
// ==========================================

const timestamp = params.get("timestamp");

if (timestamp) {

    const date = new Date(timestamp);

    document.querySelector("#timestamp").textContent =
        date.toLocaleString();

}