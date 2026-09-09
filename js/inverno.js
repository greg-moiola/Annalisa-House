// ========================================
// ANNALISA HOUSE - ZONA INVERNALE
// ========================================


// ---------- ELEMENTI PRINCIPALI ----------

const settingsButton = document.getElementById("settingsButton");
const settingsPanel = document.getElementById("settingsPanel");
const settingsClose = document.getElementById("settingsClose");

const winterMenuButton = document.getElementById("winterMenuButton");
const winterMenuOverlay = document.getElementById("winterMenuOverlay");
const winterMenuClose = document.getElementById("winterMenuClose");

const winterLanguageButton = document.getElementById("winterLanguageButton");
const winterThemeButton = document.getElementById("winterThemeButton");

const winterLanguageSubmenu =
    document.getElementById("winterLanguageSubmenu");

const winterThemeSubmenu =
    document.getElementById("winterThemeSubmenu");


// ---------- APERTURA IMPOSTAZIONI ----------

if (settingsButton) {
    settingsButton.addEventListener("click", () => {
        settingsPanel.classList.add("open");
    });
}


// ---------- CHIUSURA IMPOSTAZIONI ----------

if (settingsClose) {
    settingsClose.addEventListener("click", () => {
        settingsPanel.classList.remove("open");
    });
}


// ---------- APERTURA MENU ----------

if (winterMenuButton) {
    winterMenuButton.addEventListener("click", () => {
        winterMenuOverlay.classList.add("open");
    });
}


// ---------- CHIUSURA MENU ----------

if (winterMenuClose) {
    winterMenuClose.addEventListener("click", () => {
        winterMenuOverlay.classList.remove("open");
    });
}


// ---------- CHIUSURA CLICCANDO FUORI ----------

if (winterMenuOverlay) {
    winterMenuOverlay.addEventListener("click", (event) => {
        if (event.target === winterMenuOverlay) {
            winterMenuOverlay.classList.remove("open");
        }
    });
}


// ---------- SOTTOMENU LINGUA ----------

if (winterLanguageButton) {
    winterLanguageButton.addEventListener("click", () => {
        winterLanguageSubmenu.classList.toggle("open");
        winterThemeSubmenu.classList.remove("open");
    });
}


// ---------- SOTTOMENU TEMA ----------

if (winterThemeButton) {
    winterThemeButton.addEventListener("click", () => {
        winterThemeSubmenu.classList.toggle("open");
        winterLanguageSubmenu.classList.remove("open");
    });
}


// ---------- NAVIGAZIONE PAGINE ----------

const winterLinks = document.querySelectorAll("[data-winter-page]");
const winterPages = document.querySelectorAll(".winter-page");

function showWinterPage(pageId) {

    winterPages.forEach((page) => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    winterMenuOverlay.classList.remove("open");
    settingsPanel.classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


winterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {

        event.preventDefault();

        const pageId = link.getAttribute("data-winter-page");

        showWinterPage(pageId);

    });
});


// ---------- PULSANTE ACCEDI ALLA ZONA INVERNALE ----------

const winterAccessButton =
    document.getElementById("winterAccessButton");

if (winterAccessButton) {
    winterAccessButton.addEventListener("click", () => {
        showWinterPage("winterRentalsPage");
    });
}


// ---------- CAMBIO TEMA ----------

const savedWinterTheme =
    localStorage.getItem("annalisaWinterTheme");

if (savedWinterTheme === "dark") {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}


if (winterThemeSubmenu) {

    const themeButtons =
        winterThemeSubmenu.querySelectorAll("[data-theme]");

    themeButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedTheme =
                button.getAttribute("data-theme");

            if (selectedTheme === "dark") {

                document.body.classList.add("dark-theme");

                localStorage.setItem(
                    "annalisaWinterTheme",
                    "dark"
                );

            } else {

                document.body.classList.remove("dark-theme");

                localStorage.setItem(
                    "annalisaWinterTheme",
                    "light"
                );

            }

            winterThemeSubmenu.classList.remove("open");

        });

    });

}


// ---------- CAMBIO LINGUA ----------

const winterTranslations = {

    it: {
        winterLanguageButton: "LINGUA →",
        winterThemeButton: "TEMA →"
    },

    de: {
        winterLanguageButton: "SPRACHE →",
        winterThemeButton: "THEMA →"
    },

    en: {
        winterLanguageButton: "LANGUAGE →",
        winterThemeButton: "THEME →"
    }

};


function applyWinterLanguage(language) {

    const translation = winterTranslations[language];

    if (!translation) {
        return;
    }

    if (winterLanguageButton) {
        winterLanguageButton.textContent =
            translation.winterLanguageButton;
    }

    if (winterThemeButton) {
        winterThemeButton.textContent =
            translation.winterThemeButton;
    }

    localStorage.setItem(
        "annalisaLanguage",
        language
    );

}


// Lingua salvata

const savedWinterLanguage =
    localStorage.getItem("annalisaLanguage") || "it";

applyWinterLanguage(savedWinterLanguage);


// Pulsanti lingua

if (winterLanguageSubmenu) {

    const languageButtons =
        winterLanguageSubmenu.querySelectorAll("[data-language]");

    languageButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedLanguage =
                button.getAttribute("data-language");

            applyWinterLanguage(selectedLanguage);

            winterLanguageSubmenu.classList.remove("open");

        });

    });

}


// ---------- PULSANTE DISPONIBILITÀ ----------

const winterAvailabilityButton =
    document.getElementById("winterAvailabilityButton");

if (winterAvailabilityButton) {

    winterAvailabilityButton.addEventListener("click", () => {

        const email = "AnnalisaHouse2026@gmail.com";

        const subject =
            "Richiesta disponibilità invernale";

        window.location.href =
            "mailto:" +
            email +
            "?subject=" +
            encodeURIComponent(subject);

    });

}


// ---------- PULSANTE CONTATTI ----------

const winterContactButton =
    document.getElementById("winterContactButton");

if (winterContactButton) {

    winterContactButton.addEventListener("click", () => {

        const email = "AnnalisaHouse2026@gmail.com";

        const subject =
            "Richiesta disponibilità invernale";

        window.location.href =
            "mailto:" +
            email +
            "?subject=" +
            encodeURIComponent(subject);

    });

}


// ---------- TASTO ESC PER CHIUDERE ----------

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        winterMenuOverlay.classList.remove("open");
        settingsPanel.classList.remove("open");

        winterLanguageSubmenu.classList.remove("open");
        winterThemeSubmenu.classList.remove("open");

    }

});
