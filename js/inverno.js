// ========================================
// ANNALISA HOUSE - ZONA INVERNALE
// ========================================


// ---------- ELEMENTI PRINCIPALI ----------

const winterWelcome = document.getElementById("winterWelcome");
const winterApp = document.getElementById("winterApp");

const winterAccessButton =
    document.getElementById("winterAccessButton");

const settingsButton =
    document.getElementById("settingsButton");

const settingsPanel =
    document.getElementById("settingsPanel");

const settingsClose =
    document.getElementById("settingsClose");

const winterMenuButton =
    document.getElementById("winterMenuButton");

const winterMenuOverlay =
    document.getElementById("winterMenuOverlay");

const winterMenuClose =
    document.getElementById("winterMenuClose");

const winterLanguageButton =
    document.getElementById("winterLanguageButton");

const winterThemeButton =
    document.getElementById("winterThemeButton");

const winterLanguageSubmenu =
    document.getElementById("winterLanguageSubmenu");

const winterThemeSubmenu =
    document.getElementById("winterThemeSubmenu");


// ========================================
// ACCESSO ALLA ZONA INVERNALE
// ========================================

if (winterAccessButton) {

    winterAccessButton.addEventListener("click", () => {

        winterWelcome.style.display = "none";

        winterApp.classList.add("active");

        showWinterPage("winterHomePage");

    });

}


// ========================================
// MENU HAMBURGER
// ========================================

if (winterMenuButton) {

    winterMenuButton.addEventListener("click", () => {

        winterMenuOverlay.classList.add("open");

    });

}


if (winterMenuClose) {

    winterMenuClose.addEventListener("click", () => {

        winterMenuOverlay.classList.remove("open");

    });

}


if (winterMenuOverlay) {

    winterMenuOverlay.addEventListener("click", (event) => {

        if (event.target === winterMenuOverlay) {

            winterMenuOverlay.classList.remove("open");

        }

    });

}


// ========================================
// NAVIGAZIONE PAGINE
// ========================================

const winterLinks =
    document.querySelectorAll("[data-winter-page]");

const winterPages =
    document.querySelectorAll(".winter-page");


function showWinterPage(pageId) {

    winterPages.forEach((page) => {

        page.classList.remove("active");

    });

    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active");

    }

    winterMenuOverlay.classList.remove("open");

    settingsPanel.classList.remove("open");

    winterLanguageSubmenu.classList.remove("open");

    winterThemeSubmenu.classList.remove("open");

}


winterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const pageId =
            link.getAttribute("data-winter-page");

        showWinterPage(pageId);

    });

});


// ========================================
// PULSANTE HOME → AFFITTI
// ========================================

const winterHomeRentalsButton =
    document.getElementById("winterHomeRentalsButton");

if (winterHomeRentalsButton) {

    winterHomeRentalsButton.addEventListener("click", () => {

        showWinterPage("winterRentalsPage");

    });

}


// ========================================
// IMPOSTAZIONI
// ========================================

if (settingsButton) {

    settingsButton.addEventListener("click", () => {

        settingsPanel.classList.add("open");

    });

}


if (settingsClose) {

    settingsClose.addEventListener("click", () => {

        settingsPanel.classList.remove("open");

    });

}


// ========================================
// SOTTOMENU LINGUA
// ========================================

if (winterLanguageButton) {

    winterLanguageButton.addEventListener("click", () => {

        winterLanguageSubmenu.classList.toggle("open");

        winterThemeSubmenu.classList.remove("open");

    });

}


// ========================================
// SOTTOMENU TEMA
// ========================================

if (winterThemeButton) {

    winterThemeButton.addEventListener("click", () => {

        winterThemeSubmenu.classList.toggle("open");

        winterLanguageSubmenu.classList.remove("open");

    });

}


// ========================================
// TEMA CHIARO / SCURO
// ========================================

const savedWinterTheme =
    localStorage.getItem("annalisaWinterTheme");

if (savedWinterTheme === "dark") {

    document.body.classList.add("dark-theme");

}


const themeButtons =
    document.querySelectorAll("[data-theme]");


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


// ========================================
// LINGUA
// ========================================

const winterTranslations = {

    it: {
        language: "LINGUA →",
        theme: "TEMA →"
    },

    de: {
        language: "SPRACHE →",
        theme: "THEMA →"
    },

    en: {
        language: "LANGUAGE →",
        theme: "THEME →"
    }

};


function applyWinterLanguage(language) {

    const translation =
        winterTranslations[language];

    if (!translation) {
        return;
    }

    winterLanguageButton.textContent =
        translation.language;

    winterThemeButton.textContent =
        translation.theme;

    localStorage.setItem(
        "annalisaLanguage",
        language
    );

}


const savedWinterLanguage =
    localStorage.getItem("annalisaLanguage") || "it";

applyWinterLanguage(savedWinterLanguage);


const languageButtons =
    document.querySelectorAll("[data-language]");


languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedLanguage =
            button.getAttribute("data-language");

        applyWinterLanguage(selectedLanguage);

        winterLanguageSubmenu.classList.remove("open");

    });

});


// ========================================
// RICHIESTA DISPONIBILITÀ
// ========================================

function sendWinterEmail() {

    const email =
        "AnnalisaHouse2026@gmail.com";

    const subject =
        "Richiesta disponibilità invernale";

    window.location.href =
        "mailto:" +
        email +
        "?subject=" +
        encodeURIComponent(subject);

}


const winterAvailabilityButton =
    document.getElementById("winterAvailabilityButton");

const winterContactButton =
    document.getElementById("winterContactButton");


if (winterAvailabilityButton) {

    winterAvailabilityButton.addEventListener(
        "click",
        sendWinterEmail
    );

}


if (winterContactButton) {

    winterContactButton.addEventListener(
        "click",
        sendWinterEmail
    );

}


// ========================================
// TASTO ESC
// ========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        winterMenuOverlay.classList.remove("open");

        settingsPanel.classList.remove("open");

        winterLanguageSubmenu.classList.remove("open");

        winterThemeSubmenu.classList.remove("open");

    }

});
