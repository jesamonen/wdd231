document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    // List of field IDs corresponding to URL parameters
    const fields = [
        "fullname",
        "email",
        "phone",
        "service",
        "location",
        "budget",
        "message"
    ];

    fields.forEach((field) => {
        const element = document.getElementById(field);
        if (!element) return; // Skip if the element isn't in the HTML

        let value = params.get(field);

        // Optional: Format budget as currency if present
        if (field === "budget" && value && !isNaN(value)) {
            value = `₦${Number(value).toLocaleString()}`;
        }

        // Set textContent (safely prevents XSS) or default fallback
        element.textContent = value && value.trim() !== "" ? value : "Not Provided";
    });
});