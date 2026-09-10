document.addEventListener("DOMContentLoaded", function () {


    /* ========================================
       ELEMENTI
    ======================================== */

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


    /* ========================================
       MENU HAMBURGER
    ======================================== */

    if (winterMenuButton && winterMenuOverlay) {

        winterMenuButton.addEventListener(
            "click",
            function () {

                winterMenuOverlay.classList.add("open");

            }
        );

    }


    if (winterMenuClose && winterMenuOverlay) {

        winterMenuClose.addEventListener(
            "click",
            function () {

                winterMenuOverlay.classList.remove("open");

            }
        );

    }


    /* ========================================
       CAMBIO PAGINA
    ======================================== */

    winterPageLinks.forEach(
        function (link) {

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

                            page.classList.remove("active");

                        }
                    );


                    const selectedPage =
                        document.getElementById(
                            targetPage
                        );


                    if (selectedPage) {

                        selectedPage.classList.add("active");

                    }


                    if (winterMenuOverlay) {

                        winterMenuOverlay.classList.remove("open");

                    }

                }
            );

        }
    );


    /* ========================================
       TRADUZIONI INVERNALI
    ======================================== */

    const winterTranslations = {


        it: {

            winterBrand:
                "Annalisa House",

            winterLocation:
                "Lago di Garda",

            settingsTitle:
                "IMPOSTAZIONI",

            settingsLanguage:
                "LINGUA",

            settingsTheme:
                "TEMA",

            winterNavHome:
                "HOME",

            winterNavServices:
                "SERVIZI",

            winterNavRentals:
                "AFFITTI INVERNALI",

            winterNavContacts:
                "CONTATTI",

            winterSmallTitle:
                "ANNALISA HOUSE",

            winterHomeTitle:
                "La tua casa d'inverno.",

            winterHomeText:
                "Un luogo caldo e accogliente dove vivere il Lago di Garda durante i mesi più tranquilli dell'anno.",

            winterHomeButton:
                "SCOPRI GLI AFFITTI INVERNALI",

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
                "RICHIEDI DISPONIBILITÀ",

            winterContactsTitle:
                "Contatti",

            winterContactsText:
                "Per informazioni e richieste di disponibilità invernale, contattaci.",

            winterContactButton:
                "CONTATTACI"

        },


        de: {

            winterBrand:
                "Annalisa House",

            winterLocation:
                "Gardasee",

            settingsTitle:
                "EINSTELLUNGEN",

            settingsLanguage:
                "SPRACHE",

            settingsTheme:
                "THEMA",

            winterNavHome:
                "HOME",

            winterNavServices:
                "SERVICES",

            winterNavRentals:
                "WINTERVERMIETUNG",

            winterNavContacts:
                "KONTAKT",

            winterSmallTitle:
                "ANNALISA HOUSE",

            winterHomeTitle:
                "Ihr Zuhause im Winter.",

            winterHomeText:
                "Ein warmer und gemütlicher Ort, um den Gardasee während der ruhigeren Monate des Jahres zu erleben.",

            winterHomeButton:
                "WINTERVERMIETUNG ENTDECKEN",

            winterServicesTitle:
                "Services",

            winterServicesText:
                "Alles, was Sie brauchen, um sich auch im Winter wie zu Hause zu fühlen.",

            winterService1Title:
                "Komplettes Haus",

            winterService1Text:
                "Das gesamte Haus steht Ihnen zur Verfügung.",

            winterService2Title:
                "Warme Atmosphäre",

            winterService2Text:
                "Gemütliche Räume für jeden Tag.",

            winterService3Title:
                "Gardasee",

            winterService3Text:
                "Natur, Ruhe und sehenswerte Orte entdecken.",

            winterRentalsTitle:
                "Wintervermietung",

            winterRentalsText:
                "Das Haus wird für den gesamten Winterzeitraum vermietet, ungefähr von Oktober bis Mai.",

            winterRentalsNoMonths:
                "Einzelne Monate können nicht gemietet werden.",

            winterAvailabilityButton:
                "VERFÜGBARKEIT ANFRAGEN",

            winterContactsTitle:
                "Kontakt",

            winterContactsText:
                "Für Informationen und Anfragen zur Winterverfügbarkeit kontaktieren Sie uns.",

            winterContactButton:
                "KONTAKTIEREN SIE UNS"

        },


        en: {

            winterBrand:
                "Annalisa House",

            winterLocation:
                "Lake Garda",

            settingsTitle:
                "SETTINGS",

            settingsLanguage:
                "LANGUAGE",

            settingsTheme:
                "THEME",

            winterNavHome:
                "HOME",

            winterNavServices:
                "SERVICES",

            winterNavRentals:
                "WINTER RENTALS",

            winterNavContacts:
                "CONTACT",

            winterSmallTitle:
                "ANNALISA HOUSE",

            winterHomeTitle:
                "Your winter home.",

            winterHomeText:
                "A warm and welcoming place to experience Lake Garda during the quieter months of the year.",

            winterHomeButton:
                "DISCOVER WINTER RENTALS",

            winterServicesTitle:
                "Services",

            winterServicesText:
                "Everything you need to feel at home during the winter.",

            winterService1Title:
                "Entire house",

            winterService1Text:
                "The whole house is at your disposal.",

            winterService2Title:
                "Warm atmosphere",

            winterService2Text:
                "Welcoming spaces to enjoy every day.",

            winterService3Title:
                "Lake Garda",

            winterService3Text:
                "Nature, tranquillity and villages to discover.",

            winterRentalsTitle:
                "Winter rentals",

            winterRentalsText:
                "The house is rented for the entire winter period, approximately from October to May.",

            winterRentalsNoMonths:
                "Individual months cannot be rented.",

            winterAvailabilityButton:
                "REQUEST AVAILABILITY",

            winterContactsTitle:
                "Contact",

            winterContactsText:
                "For information and winter availability requests, contact us.",

            winterContactButton:
                "CONTACT US"

        }

    };


    /* ========================================
       CAMBIO LINGUA
    ======================================== */

    function changeWinterLanguage(language) {

        const selectedLanguage =
            winterTranslations[language];


        if (!selectedLanguage) {

            return;

        }


        document
            .querySelectorAll("[data-i18n]")
            .forEach(
                function (element) {

                    const key =
                        element.dataset.i18n;


                    if (selectedLanguage[key]) {

                        element.textContent =
                            selectedLanguage[key];

                    }

                }
            );


        document.documentElement.lang =
            language;


        localStorage.setItem(
            "annalisaLanguage",
            language
        );


        if (winterLanguageSubmenu) {

            winterLanguageSubmenu.classList.remove(
                "open"
            );

        }

    }


    /* ========================================
       LINGUA
    ======================================== */

    document
        .querySelectorAll("[data-language]")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const language =
                            button.getAttribute(
                                "data-language"
                            );


                        changeWinterLanguage(
                            language
                        );

                    }
                );

            }
        );


    if (
        winterLanguageButton &&
        winterLanguageSubmenu
    ) {

        winterLanguageButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                winterLanguageSubmenu.classList.toggle(
                    "open"
                );

            }
        );

    }


    /* ========================================
       IMPOSTAZIONI
    ======================================== */

    if (
        settingsButton &&
        settingsPanel
    ) {

        settingsButton.addEventListener(
            "click",
            function () {

                settingsPanel.classList.toggle(
                    "open"
                );

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

                settingsPanel.classList.remove(
                    "open"
                );

            }
        );

    }


    /* ========================================
       TEMA
    ======================================== */

    if (
        winterThemeButton &&
        winterThemeSubmenu
    ) {

        winterThemeButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                winterThemeSubmenu.classList.toggle(
                    "open"
                );

            }
        );

    }


    document
        .querySelectorAll("[data-theme]")
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const theme =
                            button.getAttribute(
                                "data-theme"
                            );


                        document.body.classList.remove(
                            "light-theme",
                            "dark-theme"
                        );


                        document.body.classList.add(
                            theme + "-theme"
                        );


                        localStorage.setItem(
                            "annalisaTheme",
                            theme
                        );


                        if (winterThemeSubmenu) {

                            winterThemeSubmenu.classList.remove(
                                "open"
                            );

                        }

                    }
                );

            }
        );


    /* ========================================
       CHIUDI MENU CLICCANDO FUORI
    ======================================== */

    document.addEventListener(
        "click",
        function () {

            if (winterLanguageSubmenu) {

                winterLanguageSubmenu.classList.remove(
                    "open"
                );

            }

        }
    );


    /* ========================================
       RESTORE LINGUA
    ======================================== */

    const savedLanguage =
        localStorage.getItem(
            "annalisaLanguage"
        );


    if (
        savedLanguage &&
        winterTranslations[savedLanguage]
    ) {

        changeWinterLanguage(
            savedLanguage
        );

    } else {

        changeWinterLanguage("it");

    }


    /* ========================================
       RESTORE TEMA
    ======================================== */

    const savedTheme =
        localStorage.getItem(
            "annalisaTheme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-theme"
        );

    } else {

        document.body.classList.add(
            "light-theme"
        );

    }

});
