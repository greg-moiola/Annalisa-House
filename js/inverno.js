document.addEventListener("DOMContentLoaded", function () {

    const winterApp = document.getElementById("winterApp");

    const winterMenuButton = document.getElementById("winterMenuButton");
    const winterMenuClose = document.getElementById("winterMenuClose");
    const winterMenuOverlay = document.getElementById("winterMenuOverlay");

    const settingsButton = document.getElementById("settingsButton");
    const settingsClose = document.getElementById("settingsClose");
    const settingsPanel = document.getElementById("settingsPanel");

    const winterLanguageButton = document.getElementById("winterLanguageButton");
    const winterLanguageSubmenu = document.getElementById("winterLanguageSubmenu");

    const winterThemeButton = document.getElementById("winterThemeButton");
    const winterThemeSubmenu = document.getElementById("winterThemeSubmenu");

    const winterPages = document.querySelectorAll(".winter-page");
    const winterPageLinks = document.querySelectorAll("[data-winter-page]");


    /* MENU HAMBURGER */

    if (winterMenuButton) {
        winterMenuButton.addEventListener("click", function () {
            winterMenuOverlay.classList.add("active");
        });
    }

    if (winterMenuClose) {
        winterMenuClose.addEventListener("click", function () {
            winterMenuOverlay.classList.remove("active");
        });
    }

    /* CAMBIO PAGINA */

    winterPageLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetPage = link.getAttribute("data-winter-page");

            winterPages.forEach(function (page) {
                page.classList.remove("active");
            });

            const selectedPage = document.getElementById(targetPage);

            if (selectedPage) {
                selectedPage.classList.add("active");
            }

            winterMenuOverlay.classList.remove("active");

        });

    });

    /* IMPOSTAZIONI */

    if (settingsButton) {
        settingsButton.addEventListener("click", function () {
            settingsPanel.classList.add("active");
        });
    }

    if (settingsClose) {
        settingsClose.addEventListener("click", function () {
            settingsPanel.classList.remove("active");
        });
    }

    /* SOTTOMENU LINGUA */

    if (winterLanguageButton) {
        winterLanguageButton.addEventListener("click", function () {
            winterLanguageSubmenu.classList.toggle("active");
        });
    }

    /* SOTTOMENU TEMA */

    if (winterThemeButton) {
        winterThemeButton.addEventListener("click", function () {
            winterThemeSubmenu.classList.toggle("active");
        });
    }

    /* TEMA */

    document.querySelectorAll("[data-theme]").forEach(function (button) {

        button.addEventListener("click", function () {

            const theme = button.getAttribute("data-theme");

            document.body.classList.remove("light-theme", "dark-theme");
            document.body.classList.add(theme + "-theme");

            localStorage.setItem("winterTheme", theme);

        });

    });

    const savedTheme = localStorage.getItem("winterTheme");

    if (savedTheme) {
        document.body.classList.add(savedTheme + "-theme");
    } else {
        document.body.classList.add("light-theme");
    }

    /* LINGUA */

    document.querySelectorAll("[data-language]").forEach(function (button) {

        button.addEventListener("click", function () {

            const language = button.getAttribute("data-language");

            localStorage.setItem("winterLanguage", language);

            winterLanguageSubmenu.classList.remove("active");

        });

    });

});
