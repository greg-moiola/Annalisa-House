document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ELEMENTI
    ========================= */

    const winterMenuButton =
        document.getElementById("winterMenuButton");

    const winterMenuClose =
        document.getElementById("winterMenuClose");

    const winterMenuOverlay =
        document.getElementById("winterMenuOverlay");

    const settingsButton =
        document.getElementById("settingsButton");

    const settingsClose =
        document.getElementById("settingsClose");

    const settingsPanel =
        document.getElementById("settingsPanel");

    const winterLanguageButton =
        document.getElementById("winterLanguageButton");

    const winterLanguageSubmenu =
        document.getElementById("winterLanguageSubmenu");

    const winterThemeButton =
        document.getElementById("winterThemeButton");

    const winterThemeSubmenu =
        document.getElementById("winterThemeSubmenu");

    const winterPages =
        document.querySelectorAll(".winter-page");

    const winterPageLinks =
        document.querySelectorAll("[data-winter-page]");


    /* =========================
       TRADUZIONI
    ========================= */

    const translations = {

        it: {

            winterBrand: "Annalisa House",

            settingsTitle: "IMPOSTAZIONI",
            settingsLanguage: "LINGUA",
            settingsTheme: "TEMA",

            winterNavHome: "HOME",
            winterNavServices: "SERVIZI",
            winterNavRentals: "AFFITTI INVERNALI",

            winterSmallTitle: "ANNALISA HOUSE",

            winterHomeTitle:
                "La tua casa d'inverno.",

            winterHomeText:
                "Un luogo caldo e accogliente dove vivere il Lago di Garda durante i mesi più tranquilli dell'anno.",

            winterServicesTitle:
                "Servizi",

            winterServicesText:
                "Tutto ciò che serve per sentirsi a casa anche durante l'inverno.",

            winterService1Title:
                "Casa completa",

            winterService1Text:
                "L'intera casa a tua disposizione.",

            winterService2Title:
                "Atmosfera calda",

            winterService2Text:
                "Spazi accoglienti per vivere ogni giornata.",

            winterService3Title:
                "Lago di Garda",

            winterService3Text:
                "Natura, tranquillità e borghi da scoprire.",

            winterRentalsTitle:
                "Affitti invernali",

            winterRentalsText:
                "La casa viene affittata per l'intero periodo invernale, indicativamente da ottobre a maggio.",

            winterRentalsNoMonths:
                "Non è possibile affittare singoli mesi.",

            winterAvailabilityButton:
                "RICHIEDI DISPONIBILITÀ"
        },


        de: {

            winterBrand: "Annalisa House",

            settingsTitle: "EINSTELLUNGEN",
            settingsLanguage: "SPRACHE",
            settingsTheme: "THEMA",

            winterNavHome: "STARTSEITE",
            winterNavServices: "DIENSTLEISTUNGEN",
            winterNavRentals: "WINTERVERMIETUNG",

            winterSmallTitle: "ANNALISA HOUSE",

            winterHomeTitle:
                "Ihr Zuhause im Winter.",

            winterHomeText:
                "Ein warmer und gemütlicher Ort, um den Gardasee während der ruhigeren Monate des Jahres zu erleben.",

            winterServicesTitle:
                "Dienstleistungen",

            winterServicesText:
                "Alles, was Sie brauchen, um sich auch im Winter wie zu Hause zu fühlen.",

            winterService1Title:
                "Das komplette Haus",

            winterService1Text:
                "Das gesamte Haus steht Ihnen zur Verfügung.",

            winterService2Title:
                "Warme Atmosphäre",

            winterService2Text:
                "Gemütliche Räume für jeden Tag.",

            winterService3Title:
                "Gardasee",

            winterService3Text:
                "Natur, Ruhe und sehenswerte Dörfer.",

            winterRentalsTitle:
                "Wintervermietung",

            winterRentalsText:
                "Das Haus wird für den gesamten Winterzeitraum vermietet, ungefähr von Oktober bis Mai.",

            winterRentalsNoMonths:
                "Einzelne Monate können nicht gemietet werden.",

            winterAvailabilityButton:
                "VERFÜGBARKEIT ANFRAGEN"
        },


        en: {

            winterBrand: "Annalisa House",

            settingsTitle: "SETTINGS",
            settingsLanguage: "LANGUAGE",
            settingsTheme: "THEME",

            winterNavHome: "HOME",
            winterNavServices: "SERVICES",
            winterNavRentals: "WINTER RENTALS",

            winterSmallTitle: "ANNALISA HOUSE",

            winterHomeTitle:
                "Your winter home.",

            winterHomeText:
                "A warm and welcoming place to experience Lake Garda during the quieter months of the year.",

            winterServicesTitle:
                "Services",

            winterServicesText:
                "Everything you need to feel at home even during winter.",

            winterService1Title:
                "Entire house",

            winterService1Text:
                "The entire house is at your disposal.",

            winterService2Title:
                "Warm atmosphere",

            winterService2Text:
                "Cozy spaces for every day.",

            winterService3Title:
                "Lake Garda",

            winterService3Text:
                "Nature, tranquility and villages to discover.",

            winterRentalsTitle:
                "Winter rentals",

            winterRentalsText:
                "The house is rented for the entire winter period, approximately from October to May.",

            winterRentalsNoMonths:
                "Individual months cannot be rented.",

            winterAvailabilityButton:
                "REQUEST AVAILABILITY"
        }

    };


    /* =========================
       CAMBIO LINGUA
    ========================= */

    function changeLanguage(language) {

        const selectedLanguage =
            translations[language];

        if (!selectedLanguage) return;


        document
            .querySelectorAll("[data-i18n]")
            .forEach(function (element) {

                const key =
                    element.getAttribute("data-i18n");

                if (selectedLanguage[key]) {

                    element.textContent =
                        selectedLanguage[key];

                }

            });


        document.documentElement.lang =
            language;

        localStorage.setItem(
            "annalisaLanguage",
            language
        );


        if (winterLanguageSubmenu) {

            winterLanguageSubmenu
                .classList
                .remove("open");

        }

    }


    /* =========================
       CAMBIO TEMA
    ========================= */

    function changeTheme(theme) {

        document.body.classList.remove(
            "light-theme",
            "dark-theme"
        );


        if (theme === "dark") {

            document.body.classList.add(
                "dark-theme"
            );

        } else {

            document.body.classList.add(
                "light-theme"
            );

        }


        localStorage.setItem(
            "annalisaTheme",
            theme
        );

    }


    /* =========================
       MENU HAMBURGER
    ========================= */

    if (
        winterMenuButton &&
        winterMenuOverlay
    ) {

        winterMenuButton.addEventListener(
            "click",
            function () {

                winterMenuOverlay
                    .classList
                    .add("open");

            }
        );

    }


    if (
        winterMenuClose &&
        winterMenuOverlay
    ) {

        winterMenuClose.addEventListener(
            "click",
            function () {

                winterMenuOverlay
                    .classList
                    .remove("open");

            }
        );

    }


    /* =========================
       CAMBIO PAGINA
    ========================= */

    winterPageLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const targetPage =
                    link.getAttribute(
                        "data-winter-page"
                    );


                winterPages.forEach(
                    function (page) {

                        page.classList.remove(
                            "active"
                        );

                    }
                );


                const selectedPage =
                    document.getElementById(
                        targetPage
                    );


                if (selectedPage) {

                    selectedPage.classList.add(
                        "active"
                    );

                }


                if (winterMenuOverlay) {

                    winterMenuOverlay
                        .classList
                        .remove("open");

                }

            }
        );

    });


    /* =========================
       IMPOSTAZIONI
    ========================= */

    if (
        settingsButton &&
        settingsPanel
    ) {

        settingsButton.addEventListener(
            "click",
            function () {

                settingsPanel
                    .classList
                    .toggle("open");

            }
        );

    }


    if (
        settingsClose &&
        settingsPanel
    ) {

        settingsClose.addEventListener(
            "click",
            function () {

                settingsPanel
                    .classList
                    .remove("open");

            }
        );

    }


    /* =========================
       SOTTOMENU LINGUA
    ========================= */

    if (
        winterLanguageButton &&
        winterLanguageSubmenu
    ) {

        winterLanguageButton.addEventListener(
            "click",
            function () {

                winterLanguageSubmenu
                    .classList
                    .toggle("open");

            }
        );

    }


    /* =========================
       SOTTOMENU TEMA
    ========================= */

    if (
        winterThemeButton &&
        winterThemeSubmenu
    ) {

        winterThemeButton.addEventListener(
            "click",
            function () {

                winterThemeSubmenu
                    .classList
                    .toggle("open");

            }
        );

    }


    /* =========================
       PULSANTI LINGUA
    ========================= */

    document
        .querySelectorAll("[data-language]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const language =
                        button.getAttribute(
                            "data-language"
                        );

                    changeLanguage(language);

                }
            );

        });


    /* =========================
       PULSANTI TEMA
    ========================= */

    document
        .querySelectorAll("[data-theme]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const theme =
                        button.getAttribute(
                            "data-theme"
                        );

                    changeTheme(theme);


                    if (winterThemeSubmenu) {

                        winterThemeSubmenu
                            .classList
                            .remove("open");

                    }

                }
            );

        });


    /* =========================
       RIPRISTINO LINGUA
    ========================= */

    const savedLanguage =
        localStorage.getItem(
            "annalisaLanguage"
        );


    if (
        savedLanguage &&
        translations[savedLanguage]
    ) {

        changeLanguage(
            savedLanguage
        );

    } else {

        changeLanguage("it");

    }


    /* =========================
       RIPRISTINO TEMA
    ========================= */

    const savedTheme =
        localStorage.getItem(
            "annalisaTheme"
        );


    if (savedTheme === "dark") {

        changeTheme("dark");

    } else {

        changeTheme("light");

    }

});
