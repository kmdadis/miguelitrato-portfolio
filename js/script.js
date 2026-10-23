
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("main-navigation");

// Show or hide the navigation menu.
if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";

        navigation.hidden = isOpen;
        menuButton.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close the menu when Escape is pressed.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navigation.hidden = true;
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}

const themeButton = document.getElementById("theme-toggle");

// Restore the saved theme.
if (themeButton) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButton();

    // Switch between light mode and dark mode.
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateThemeButton();
    });

    // Keep the button label and accessibility state correct.
    function updateThemeButton() {
        const isDark = document.body.classList.contains("dark-mode");

        themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
        themeButton.setAttribute("aria-pressed", String(isDark));
    }
}

const projects = [
    {
        title: "Photography",
        description: "Capturing stories through photographs."
    },
    {
        title: "Filmmaking",
        description: "Creating short films and visual stories."
    },
    {
        title: "Graphic Design",
        description: "Designing visuals to communicate ideas."
    }
];

const projectsList = document.getElementById("projects-list");

// Display project cards from the array.
function displayProjects() {
    if (!projectsList) return;

    // Clear old cards so they do not appear twice.
    projectsList.replaceChildren();

    // Handle an empty array.
    if (projects.length === 0) {
        projectsList.textContent = "No items available.";
        return;
    }

    projects.forEach(function (project) {
        const card = document.createElement("article");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = project.title || "Untitled Project";

        const description = document.createElement("p");
        description.textContent =
            project.description || "No description available.";

        card.appendChild(title);
        card.appendChild(description);
        projectsList.appendChild(card);
    });
}

displayProjects();

const contactForm = document.getElementById("contact-form");

// Validate the contact form before it can be submitted.
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fields = [
            { id: "name", label: "Name" },
            { id: "email", label: "Email" },
            { id: "subject", label: "Subject" },
            { id: "message", label: "Message" }
        ];

        let isValid = true;

        // Clear previous errors and success messages.
        document.getElementById("form-success").textContent = "";

        fields.forEach(function (field) {
            const input = document.getElementById(field.id);
            const error = document.getElementById(field.id + "-error");

            error.textContent = "";
            input.removeAttribute("aria-invalid");

            if (input.value.trim() === "") {
                error.textContent = field.label + " is required.";
                input.setAttribute("aria-invalid", "true");
                isValid = false;
            } else if (
                field.id === "email" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
            ) {
                error.textContent = "Please enter a valid email address.";
                input.setAttribute("aria-invalid", "true");
                isValid = false;
            }
        });

        if (isValid) {
            document.getElementById("form-success").textContent =
                "Your form is valid! Thank you for your message.";
        }
    });
}
