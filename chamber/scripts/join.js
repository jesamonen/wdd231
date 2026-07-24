// ===============================
// SET HIDDEN TIMESTAMP
// ===============================

const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

// ===============================
// MODAL BUTTONS
// ===============================

const npBtn = document.querySelector("#npBtn");
const bronzeBtn = document.querySelector("#bronzeBtn");
const silverBtn = document.querySelector("#silverBtn");
const goldBtn = document.querySelector("#goldBtn");

// ===============================
// MODALS
// ===============================

const npModal = document.querySelector("#npModal");
const bronzeModal = document.querySelector("#bronzeModal");
const silverModal = document.querySelector("#silverModal");
const goldModal = document.querySelector("#goldModal");

// ===============================
// OPEN MODALS
// ===============================

npBtn.addEventListener("click", () => {
    npModal.showModal();
});

bronzeBtn.addEventListener("click", () => {
    bronzeModal.showModal();
});

silverBtn.addEventListener("click", () => {
    silverModal.showModal();
});

goldBtn.addEventListener("click", () => {
    goldModal.showModal();
});

// ===============================
// CLOSE MODALS
// ===============================

document.querySelectorAll(".close").forEach(button => {

    button.addEventListener("click", () => {

        button.parentElement.close();

    });

});