const menuButton =
    document.getElementById("menuButton");


const menuClose =
    document.getElementById("menuClose");


const menuOverlay =
    document.getElementById("menuOverlay");


const menuLinks =
    document.querySelectorAll(
        ".menu-links a"
    );


const pages =
    document.querySelectorAll(
        ".page"
    );



/* =========================
   LINGUA
========================= */

const languageButton =
    document.getElementById(
        "languageButton"
    );


const languageMenu =
    document.getElementById(
        "languageMenu"
    );


const languageOptions =
    document.querySelectorAll(
        ".language-option"
    );



/* =========================
   TRADUZIONI
========================= */

const translations = {

    it: {

        homeTitle:
            "ANNALISA HOUSE",

        homeLocation:
            "Lago di Garda",

        navHome:
            "HOME",

        navGallery:
            "GALLERIA",

        navServices:
            "SERVIZI",

        navReviews:
            "RECENSIONI",

        navContacts:
            "CONTATTI",

        navAdmin:
            "ADMIN",

        galleryTitle:
            "GALLERIA",

        galleryText:
            "Le immagini della casa saranno presto disponibili.",

        servicesTitle:
            "SERVIZI",

        servicesText:
            "Scopri tutti i servizi disponibili presso Annalisa House.",

        reviewsTitle:
            "RECENSIONI",

        reviewsText:
            "Le recensioni dei nostri ospiti saranno disponibili qui.",

        contactsTitle:
            "CONTATTI",

        contactsText:
            "Contattaci per maggiori informazioni su Annalisa House.",

        adminTitle:
            "ADMIN",

        adminText:
            "Area amministratore."

    },


    de: {

        homeTitle:
            "ANNALISA HOUSE",

        homeLocation:
            "Gardasee",

        navHome:
            "HOME",

        navGallery:
            "GALERIE",

        navServices:
            "SERVICES",

        navReviews:
            "BEWERTUNGEN",

        navContacts:
            "KONTAKT",

        navAdmin:
            "ADMIN",

        galleryTitle:
            "GALERIE",

        galleryText:
            "Die Bilder des Hauses werden bald verfügbar sein.",

        servicesTitle:
            "SERVICES",

        servicesText:
            "Entdecken Sie alle verfügbaren Services im Annalisa House.",

        reviewsTitle:
            "BEWERTUNGEN",

        reviewsText:
            "Hier werden die Bewertungen unserer Gäste angezeigt.",

        contactsTitle:
            "KONTAKT",

        contactsText:
            "Kontaktieren Sie uns für weitere Informationen über Annalisa House.",

        adminTitle:
            "ADMIN",

        adminText:
            "Administrationsbereich."

    },


    en: {

        homeTitle:
            "ANNALISA HOUSE",

        homeLocation:
            "Lake Garda",

        navHome:
            "HOME",

        navGallery:
            "GALLERY",

        navServices:
            "SERVICES",

        navReviews:
            "REVIEWS",

        navContacts:
            "CONTACT",

        navAdmin:
            "ADMIN",

        galleryTitle:
            "GALLERY",

        galleryText:
            "Photos of the house will be available soon.",

        servicesTitle:
            "SERVICES",

        servicesText:
            "Discover all the services available at Annalisa House.",

        reviewsTitle:
            "REVIEWS",

        reviewsText:
            "Guest reviews will be available here.",

        contactsTitle:
            "CONTACT",

        contactsText:
            "Contact us for more information about Annalisa House.",

        adminTitle:
            "ADMIN",

        adminText:
            "Administration area."

    }

};



/* =========================
   CAMBIO LINGUA
========================= */

function changeLanguage(language) {


    const selectedLanguage =
        translations[language];


    if (!selectedLanguage) {

        return;

    }


    document
        .querySelectorAll("[data-i18n]")
        .forEach(
            (element) => {

                const key =
                    element.dataset.i18n;


                if (
                    selectedLanguage[key]
                ) {

                    element.textContent =
                        selectedLanguage[key];

                }

            }
        );


    languageButton.textContent =
        language.toUpperCase() + " ▾";


    document.documentElement.lang =
        language;


    localStorage.setItem(
        "annalisaLanguage",
        language
    );


    languageMenu.classList.remove(
        "open"
    );

}



/* =========================
   APRI MENU LINGUA
========================= */

languageButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        languageMenu.classList.toggle(
            "open"
        );

    }
);



/* =========================
   SELEZIONA LINGUA
========================= */

languageOptions.forEach(
    (option) => {

        option.addEventListener(
            "click",
            () => {

                const language =
                    option.dataset.language;


                changeLanguage(
                    language
                );

            }
        );

    }
);



/* =========================
   CHIUDI MENU LINGUA
   CLICCANDO FUORI
========================= */

document.addEventListener(
    "click",
    () => {

        languageMenu.classList.remove(
            "open"
        );

    }
);



/* =========================
   MENU HAMBURGER
========================= */

menuButton.addEventListener(
    "click",
    () => {

        menuOverlay.classList.add(
            "open"
        );

    }
);



/* =========================
   CHIUDI MENU
========================= */

function closeMenu() {

    menuOverlay.classList.remove(
        "open"
    );

}


menuClose.addEventListener(
    "click",
    closeMenu
);



/* =========================
   CAMBIO PAGINA
========================= */

menuLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const pageId =
                    link.dataset.page;


                pages.forEach(
                    (page) => {

                        page.classList.remove(
                            "active"
                        );

                    }
                );


                const selectedPage =
                    document.getElementById(
                        pageId
                    );


                selectedPage.classList.add(
                    "active"
                );


                closeMenu();

            }
        );

    }
);



/* =========================
   LINGUA SALVATA
========================= */

const savedLanguage =
    localStorage.getItem(
        "annalisaLanguage"
    );


if (savedLanguage) {

    changeLanguage(
        savedLanguage
    );

}
