document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ELEMENTI
    ======================================== */

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


    /* ========================================
       MENU HAMBURGER
    ======================================== */

    if (winterMenuButton && winterMenuOverlay) {

        winterMenuButton.addEventListener("click", function () {
            winterMenuOverlay.classList.add("open");
        });

    }


    if (winterMenuClose && winterMenuOverlay) {

        winterMenuClose.addEventListener("click", function () {
            winterMenuOverlay.classList.remove("open");
        });

    }


    /* ========================================
       CAMBIO PAGINA
    ======================================== */

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

            if (winterMenuOverlay) {
                winterMenuOverlay.classList.remove("open");
            }

        });

    });


    /* ========================================
       IMPOSTAZIONI
    ======================================== */

    if (settingsButton && settingsPanel) {

        settingsButton.addEventListener("click", function () {
            settingsPanel.classList.toggle("open");
        });

    }


    if (settingsClose && settingsPanel) {

        settingsClose.addEventListener("click", function () {
            settingsPanel.classList.remove("open");
        });

    }


    /* ========================================
       LINGUA
    ======================================== */

    if (winterLanguageButton && winterLanguageSubmenu) {

        winterLanguageButton.addEventListener("click", function () {
            winterLanguageSubmenu.classList.toggle("open");
        });

    }


    /* ========================================
       TEMA
    ======================================== */

    if (winterThemeButton && winterThemeSubmenu) {

        winterThemeButton.addEventListener("click", function () {
            winterThemeSubmenu.classList.toggle("open");
        });

    }


    document.querySelectorAll("[data-theme]").forEach(function (button) {

        button.addEventListener("click", function () {

            const theme = button.getAttribute("data-theme");

            document.body.classList.remove("light-theme", "dark-theme");

            document.body.classList.add(theme + "-theme");

            localStorage.setItem("winterTheme", theme);

            if (winterThemeSubmenu) {
                winterThemeSubmenu.classList.remove("open");
            }

        });

    });


    /* ========================================
       TEMA SALVATO
    ======================================== */

    const savedTheme = localStorage.getItem("winterTheme");

    if (savedTheme === "dark" || savedTheme === "light") {

        document.body.classList.add(savedTheme + "-theme");

    } else {

        document.body.classList.add("light-theme");

    }


    /* ========================================
       LINGUA
    ======================================== */

    document.querySelectorAll("[data-language]").forEach(function (button) {

        button.addEventListener("click", function () {

            const language = button.getAttribute("data-language");

            localStorage.setItem("winterLanguage", language);

            if (winterLanguageSubmenu) {
                winterLanguageSubmenu.classList.remove("open");
            }

        });

    });

});
