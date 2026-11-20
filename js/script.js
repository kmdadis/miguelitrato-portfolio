const projects = [
    {
        title: "Photography",
        description: "My photography and visual storytelling work."
    },
    {
        title: "Filmmaking",
        description: "My short films and video projects."
    },
    {
        title: "Graphic Design",
        description: "My layouts and graphic design projects."
    }
];
const defaultSettings = {
    theme: "light",
    visitorName: "",
    lastVisit: ""
};

let settings;

try {
    const savedSettings = localStorage.getItem("portfolioSettings");

    settings = savedSettings
        ? { ...defaultSettings, ...JSON.parse(savedSettings) }
        : { ...defaultSettings };

} catch (error) {
    console.log("Stored settings are corrupted. Using defaults.");
    settings = { ...defaultSettings };
}

function saveSettings() {
    localStorage.setItem(
        "portfolioSettings",
        JSON.stringify(settings)
    );
}

function applyTheme() {
    document.documentElement.classList.toggle(
        "dark-mode",
        settings.theme === "dark"
    );

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.textContent =
            settings.theme === "dark" ? "Light Mode" : "Dark Mode";

        themeButton.setAttribute(
            "aria-pressed",
            settings.theme === "dark"
        );
    }
}

document.addEventListener("DOMContentLoaded", function () {

        const projectsList = document.getElementById("projects-list");

    if (projectsList) {
        projects.forEach(function (project) {
            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("h3");
            title.textContent = project.title;

            const description = document.createElement("p");
            description.textContent = project.description;

            card.append(title, description);
            projectsList.appendChild(card);
        });
    }
    if (!settings.visitorName) {
        const enteredName = prompt("Welcome! What is your name?");

        settings.visitorName = enteredName
            ? enteredName.trim()
            : "";
    }

    applyTheme();

    
    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", !isOpen);
            navigation.hidden = isOpen;
        });
    }

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            settings.theme =
                settings.theme === "dark" ? "light" : "dark";

            applyTheme();
            saveSettings();
        });
    }

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const nameError = document.getElementById("name-error");
            const emailError = document.getElementById("email-error");
            const subjectError = document.getElementById("subject-error");
            const messageError = document.getElementById("message-error");
            const formSuccess = document.getElementById("form-success");

            nameError.textContent = "";
            emailError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";
            formSuccess.textContent = "";

            let isValid = true;

            if (name === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            if (email === "") {
                emailError.textContent = "Please enter your email.";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (subject === "") {
                subjectError.textContent = "Please enter a subject.";
                isValid = false;
            }

            if (message === "") {
                messageError.textContent = "Please enter your message.";
                isValid = false;
            }
const fieldErrors = [
    { field: "name", error: nameError },
    { field: "email", error: emailError },
    { field: "subject", error: subjectError },
    { field: "message", error: messageError }
];

fieldErrors.forEach(function (item) {
    const input = document.getElementById(item.field);

    input.setAttribute(
        "aria-invalid",
        item.error.textContent !== "" ? "true" : "false"
    );
});
            if (isValid) {
                formSuccess.textContent =
    "Form validated successfully! This demo does not send messages.";

                contactForm.reset();
            }
        });
    }

    settings.lastVisit = new Date().toISOString();

    saveSettings();

});
