import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    orderBy,
    query
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


/* =========================
   FIREBASE
========================= */

const firebaseConfig = {

    apiKey: "AIzaSyC9sl_86qiMF9aG2pA5Zh594-b9ytTbDLE",

    authDomain:
        "annalisa-house.firebaseapp.com",

    projectId:
        "annalisa-house",

    storageBucket:
        "annalisa-house.firebasestorage.app",

    messagingSenderId:
        "72106901461",

    appId:
        "1:72106901461:web:c2926494a7c508a70b475c"

};


const app =
    initializeApp(firebaseConfig);


const db =
    getFirestore(app);


console.log(
    "Firebase collegato correttamente!"
);


/* =========================
   MENU
========================= */

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

        namePlaceholder: "Il tuo nome",

        reviewPlaceholder: "Scrivi qui la tua recensione...",

        countryIT: "Italia",

        countryDE: "Germania",

        countryAT: "Austria",

        countryCH: "Svizzera",

        countryFR: "Francia",

        countryES: "Spagna",

        countryGB: "Regno Unito",

        countryUS: "Stati Uniti",

        countryNL: "Paesi Bassi",

        countryBE: "Belgio",

        countryOTHER: "Altro",

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

        namePlaceholder:
    "Dein Name",

reviewPlaceholder:
    "Schreiben Sie hier Ihre Bewertung...",

countryIT:
    "Italien",

countryDE:
    "Deutschland",

countryAT:
    "Österreich",

countryCH:
    "Schweiz",

countryFR:
    "Frankreich",

countryES:
    "Spanien",

countryGB:
    "Vereinigtes Königreich",

countryUS:
    "Vereinigte Staaten",

countryNL:
    "Niederlande",

countryBE:
    "Belgien",

countryOTHER:
    "Andere",

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

        namePlaceholder:
    "Your name",

reviewPlaceholder:
    "Write your review here...",

countryIT:
    "Italy",

countryDE:
    "Germany",

countryAT:
    "Austria",

countryCH:
    "Switzerland",

countryFR:
    "France",

countryES:
    "Spain",

countryGB:
    "United Kingdom",

countryUS:
    "United States",

countryNL:
    "Netherlands",

countryBE:
    "Belgium",

countryOTHER:
    "Other",

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

    /* =========================
   PLACEHOLDER
========================= */

document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {

        const key =
            element.dataset.i18nPlaceholder;

        if (selectedLanguage[key]) {

            element.placeholder =
                selectedLanguage[key];

        }

    });


/* =========================
   PAESI
========================= */

const countryOptions =
    document.querySelectorAll(
        "#reviewCountry option"
    );


countryOptions.forEach(
    (option) => {

        const country =
            option.dataset.country;

        const key =
            "country" + country;

        if (selectedLanguage[key]) {

            const flag =
                option.textContent.trim().split(" ")[0];

            option.textContent =
                flag + " " +
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


/* =========================
   FIRESTORE - RECENSIONI
========================= */

const publishReviewButton =
    document.getElementById("publishReviewButton");

const reviewNameInput =
    document.getElementById("reviewName");

const reviewCountrySelect =
    document.getElementById("reviewCountry");

const reviewTextInput =
    document.getElementById("reviewText");


publishReviewButton.addEventListener(
    "click",
    async () => {

        const name =
            reviewNameInput.value.trim();

        const country =
            reviewCountrySelect.value;

        const text =
            reviewTextInput.value.trim();


        /* CONTROLLI */

        if (!name) {

            alert("Inserisci il tuo nome.");

            return;

        }


        if (selectedRating === 0) {

            alert("Seleziona una valutazione.");

            return;

        }


        if (!text) {

            alert("Scrivi una recensione.");

            return;

        }


        /* SALVATAGGIO FIRESTORE */

        try {

            publishReviewButton.disabled = true;

            publishReviewButton.textContent =
                "PUBBLICAZIONE...";


            await addDoc(
                collection(db, "reviews"),
                {

                    nome: name,

                    paese: country,

                    stelle: selectedRating,

                    testo: text,

                    data: serverTimestamp()

                }
            );


            /* RESET */

            reviewNameInput.value = "";

            reviewCountrySelect.value = "IT";

            reviewTextInput.value = "";

            selectedRating = 0;


            ratingButtons.forEach(
                (star) => {

                    star.textContent = "☆";

                }
            );


            reviewModal.classList.remove("open");


            publishReviewButton.disabled = false;

            publishReviewButton.textContent =
                "PUBBLICA RECENSIONE";


            /* RICARICA RECENSIONI */

            loadReviews();


        } catch (error) {

            console.error(
                "Errore nel salvataggio:",
                error
            );


            alert(
                "Si è verificato un errore. Riprova."
            );


            publishReviewButton.disabled = false;

            publishReviewButton.textContent =
                "PUBBLICA RECENSIONE";

        }

    }
);

/* =========================
   CARICAMENTO RECENSIONI
========================= */

async function loadReviews() {

    const reviewsList =
        document.getElementById("reviewsList");


    reviewsList.innerHTML = "";


    try {

        const reviewsQuery =
            query(
                collection(db, "reviews"),
                orderBy("data", "desc")
            );


        const snapshot =
            await getDocs(reviewsQuery);


        snapshot.forEach(
            (documentSnapshot) => {

                const review =
                    documentSnapshot.data();


                const card =
                    document.createElement("div");

                card.className =
                    "review-card";


                /* STELLE */

                const stars =
                    "★".repeat(review.stelle) +
                    "☆".repeat(5 - review.stelle);


                /* DATA */

                let formattedDate =
                    "";


                if (review.data) {

                    const date =
                        review.data.toDate();


                    formattedDate =
                        date.toLocaleDateString(
                            "it-IT",
                            {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            }
                        );

                }


                /* RECENSIONE */

                card.innerHTML = `

                    <div class="review-top">

                        <span class="review-author">
                            ${getCountryFlag(review.paese)}
                            ${escapeHTML(review.nome)}
                        </span>

                        <span class="review-date">
                            ${formattedDate}
                        </span>

                    </div>

                    <div class="review-stars">
                        ${stars}
                    </div>

                    <p class="review-text">
                        ${escapeHTML(review.testo)}
                    </p>

                `;


                reviewsList.appendChild(card);

            }
        );


    } catch (error) {

        console.error(
            "Errore caricamento recensioni:",
            error
        );

    }

}

/* =========================
   BANDIERE
========================= */

function getCountryFlag(country) {

    const flags = {

        IT: "🇮🇹",

        DE: "🇩🇪",

        AT: "🇦🇹",

        CH: "🇨🇭",

        FR: "🇫🇷",

        ES: "🇪🇸",

        GB: "🇬🇧",

        US: "🇺🇸",

        NL: "🇳🇱",

        BE: "🇧🇪",

        OTHER: "🌍"

    };


    return flags[country] || "🌍";

}

/* =========================
   SICUREZZA TESTO
========================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}

loadReviews();
