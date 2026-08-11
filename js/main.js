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


const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const languageOptions =
    document.querySelectorAll(
        ".language-option"
    );



/* =========================
   OPEN MENU
========================= */

menuButton.addEventListener(
    "click",
    () => {

        menuOverlay.classList.add("open");

    }
);



/* =========================
   CLOSE MENU
========================= */

function closeMenu() {

    menuOverlay.classList.remove("open");

}


menuClose.addEventListener(
    "click",
    closeMenu
);



/* =========================
   CHANGE PAGE
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
   LANGUAGE MENU
========================= */

languageButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        languageMenu.classList.toggle("open");

    }
);


/* =========================
   LANGUAGE SELECTION
========================= */

languageOptions.forEach(
    (option) => {

        option.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const language =
                    option.dataset.language;

                changeLanguage(language);

            }
        );

    }
);


/* =========================
   CLOSE LANGUAGE MENU
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
   RESTORE LANGUAGE
========================= */

const savedLanguage =
    localStorage.getItem(
        "annalisaLanguage"
    );


if (savedLanguage) {

    languageButton.textContent =
        savedLanguage.toUpperCase() + " ▾";

}


/* =========================
   TRADUZIONI
========================= */

const translations = {

    it: {

        writeReview: "SCRIVI RECENSIONE",

        writeReviewTitle: "SCRIVI RECENSIONE",

        reviewName: "Nome",

        reviewCountry: "Paese",

        reviewRating: "Valutazione",

        reviewText: "La tua recensione",

        publishReview: "PUBBLICA RECENSIONE",

        homeTitle: "ANNALISA HOUSE",
        homeLocation: "Lago di Garda",

        navHome: "HOME",
        navGallery: "GALLERIA",
        navServices: "SERVIZI",
        navReviews: "RECENSIONI",
        navContacts: "CONTATTI",
        navAdmin: "ADMIN",

        galleryTitle: "GALLERIA",
        galleryText: "Le immagini della casa saranno presto disponibili.",

        servicesTitle: "SERVIZI",
        servicesText: "Scopri tutti i servizi disponibili presso Annalisa House.",

        reviewsTitle: "RECENSIONI",
        reviewsText: "Le recensioni dei nostri ospiti saranno disponibili qui.",

        contactsTitle: "CONTATTI",
        contactsText: "Contattaci per maggiori informazioni su Annalisa House.",

        adminTitle: "ADMIN",
        adminText: "Area amministratore."

    },


    de: {

        writeReview: "BEWERTUNG SCHREIBEN",

        writeReviewTitle: "BEWERTUNG SCHREIBEN",

        reviewName: "Name",

        reviewCountry: "Land",

        reviewRating: "Bewertung",

        reviewText: "Ihre Bewertung",

        publishReview: "BEWERTUNG VERÖFFENTLICHEN",

        homeTitle: "ANNALISA HOUSE",
        homeLocation: "Gardasee",

        navHome: "HOME",
        navGallery: "GALERIE",
        navServices: "SERVICES",
        navReviews: "BEWERTUNGEN",
        navContacts: "KONTAKT",
        navAdmin: "ADMIN",

        galleryTitle: "GALERIE",
        galleryText: "Die Bilder des Hauses werden bald verfügbar sein.",

        servicesTitle: "SERVICES",
        servicesText: "Entdecken Sie alle verfügbaren Services im Annalisa House.",

        reviewsTitle: "BEWERTUNGEN",
        reviewsText: "Hier werden die Bewertungen unserer Gäste angezeigt.",

        contactsTitle: "KONTAKT",
        contactsText: "Kontaktieren Sie uns für weitere Informationen über Annalisa House.",

        adminTitle: "ADMIN",
        adminText: "Administrationsbereich."

    },


    en: {

        writeReview: "WRITE A REVIEW",

        writeReviewTitle: "WRITE A REVIEW",

        reviewName: "Name",

        reviewCountry: "Country",

        reviewRating: "Rating",

        reviewText: "Your review",

        publishReview: "PUBLISH REVIEW",

        homeTitle: "ANNALISA HOUSE",
        homeLocation: "Lake Garda",

        navHome: "HOME",
        navGallery: "GALLERY",
        navServices: "SERVICES",
        navReviews: "REVIEWS",
        navContacts: "CONTACT",
        navAdmin: "ADMIN",

        galleryTitle: "GALLERY",
        galleryText: "Photos of the house will be available soon.",

        servicesTitle: "SERVICES",
        servicesText: "Discover all the services available at Annalisa House.",

        reviewsTitle: "REVIEWS",
        reviewsText: "Guest reviews will be available here.",

        contactsTitle: "CONTACT",
        contactsText: "Contact us for more information about Annalisa House.",

        adminTitle: "ADMIN",
        adminText: "Administration area."

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
        .forEach((element) => {

            const key =
                element.dataset.i18n;

            if (selectedLanguage[key]) {

                element.textContent =
                    selectedLanguage[key];

            }

        });

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
   REVIEW MODAL
========================= */

const reviewModal =
    document.getElementById("reviewModal");

const writeReviewButton =
    document.getElementById("writeReviewButton");

const reviewModalClose =
    document.getElementById("reviewModalClose");


/* =========================
   OPEN MODAL
========================= */

writeReviewButton.addEventListener(
    "click",
    () => {

        reviewModal.classList.add("open");

    }
);


/* =========================
   CLOSE MODAL
========================= */

reviewModalClose.addEventListener(
    "click",
    () => {

        reviewModal.classList.remove("open");

    }
);


/* =========================
   CLOSE CLICKING OUTSIDE
========================= */

reviewModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === reviewModal
        ) {

            reviewModal.classList.remove(
                "open"
            );

        }

    }
);


/* =========================
   RATING STARS
========================= */

const ratingButtons =
    document.querySelectorAll(
        "#ratingStars button"
    );


let selectedRating = 0;


ratingButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                selectedRating =
                    Number(
                        button.dataset.rating
                    );


                ratingButtons.forEach(
                    (star) => {

                        const rating =
                            Number(
                                star.dataset.rating
                            );


                        if (
                            rating <=
                            selectedRating
                        ) {

                            star.textContent =
                                "★";

                        } else {

                            star.textContent =
                                "☆";

                        }

                    }
                );

            }
        );

    }
);
