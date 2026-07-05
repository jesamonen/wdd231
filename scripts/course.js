const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
    { code: "WDD131", name: "Web Design & Dev", credits: 2, completed: true },
    { code: "CSE110", name: "Intro to Programming", credits: 2, completed: true },
    { code: "CSE111", name: "Programming with Functions", credits: 2, completed: false },
    { code: "CSE210", name: "Programming with Classes", credits: 2, completed: false },
    { code: "CSE212", name: "Data Structures", credits: 2, completed: false }
];

const coursesContainer = document.getElementById("courses");
const totalCreditsEl = document.getElementById("totalCredits");

const allBtn = document.getElementById("allBtn");
const wddBtn = document.getElementById("wddBtn");
const cseBtn = document.getElementById("cseBtn");

function displayCourses(filteredCourses) {
    coursesContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} credits</p>
        `;

        coursesContainer.appendChild(card);
    });

    // total credits
    const total = filteredCourses.reduce((sum, c) => sum + c.credits, 0);
    totalCreditsEl.textContent = `Total Credits: ${total}`;
}

allBtn.addEventListener("click", () => {
    displayCourses(courses);
});

wddBtn.addEventListener("click", () => {
    const wdd = courses.filter(c => c.code.startsWith("WDD"));
    displayCourses(wdd);
});

cseBtn.addEventListener("click", () => {
    const cse = courses.filter(c => c.code.startsWith("CSE"));
    displayCourses(cse);
});

displayCourses(courses);