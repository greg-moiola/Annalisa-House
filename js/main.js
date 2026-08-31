import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    orderBy,
    query,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";


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

const auth =
    getAuth(app);


console.log("Firebase collegato correttamente!");
console.log("AUTH CARICATO");


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
    document.querySelectorAll(".menu-links a");

const pages =
    document.querySelectorAll(".page");


const curiositaSlider =
    document.querySelector(".curiosita-slider");


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

                        page.classList.remove("active");

                    }
                );


                const selectedPage =
                    document.getElementById(pageId);


                if (selectedPage) {

                    selectedPage.classList.add("active");

                }



                closeMenu();

            }
        );

    }
);


/* =========================
   TRADUZIONI
========================= */

const translations = {

    it: {

        namePlaceholder: "Il tuo nome",

        reviewPlaceholder:
            "Scrivi qui la tua recensione...",

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

        writeReview:
            "SCRIVI RECENSIONE",

        writeReviewTitle:
            "SCRIVI RECENSIONE",

        reviewName:
            "Nome",

        reviewCountry:
            "Paese",

        reviewRating:
            "Valutazione",

        reviewText:
            "La tua recensione",

        publishReview:
            "PUBBLICA RECENSIONE",

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

        navinformazioni: 
            "INFORMAZIONI",

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
            "Area amministratore.",

        informazioniTitle:"INFORMAZIONI",

        curiositaAnnalisaTitle:
    "ANNALISA",

        doveSiamoTitle:
    "DOVE SIAMO",

        curiositaAnnalisaText:
    "Mi chiamo Annalisa ho 53 anni e ho preso il mio primo aereo a 2 anni, da allora non mi sono mai fermata. Amo viaggiare, esplorare, conoscere luoghi e persone. Ho sistemato la mia casa sul lago di Garda per dare agli ospiti tutto quello che cerco io negli appartamenti in giro per il mondo. Servizi, e tutto il necessario per rendere il soggiorno piacevole e comodo.",

        curiositaCheckinTitle:
    "CHECK-IN & CHECK-OUT",

        checkinLabel:
    "CHECK-IN",

        checkoutLabel:
    "CHECK-OUT",

        curiositaAnimaliTitle:
    "AMICI DEGLI ANIMALI",

        curiositaAnimaliText:
    "Annalisa House è felice di accogliere i vostri animali, perché una vacanza è davvero speciale quando la si può condividere con chi amiamo.",

        requestAvailability:
    "RICHIEDI DISPONIBILITÀ",

        howToSendRequest: 
            "COME VUOI INVIARE LA RICHIESTA?",
    
        mailAppOption: 
            "PROGRAMMA EMAIL",

        service1:
             "Riscaldamento",
                

        service2:
                    "Aria condizionata",
                

        service3:
                    "Pompa di calore",
                

        service4:
                    "Rilevatore di fumo",
                

        service5:
                    "Estintore",
                
        service6:
                    "Wi-Fi",
                

        service7:
                    "Televisore",
                

        service8:
                    "Frigorifero",
        

        service9:
                    "Forno",
                

        service10:
                    "Lavatrice",
                

        service11:
                    "Macchina del caffé",
                

        service12:
                    "Bollitore",
                
        service13:
                  "Balcone",
                

        service14:
                    "Posto auto",
                
        service15:
                    "Piscina",
                

        service16:
                    "Culla per bambini",
               


       
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

        writeReview:
            "BEWERTUNG SCHREIBEN",

        writeReviewTitle:
            "BEWERTUNG SCHREIBEN",

        reviewName:
            "Name",

        reviewCountry:
            "Land",

        reviewRating:
            "Bewertung",

        reviewText:
            "Ihre Bewertung",

        publishReview:
            "BEWERTUNG VERÖFFENTLICHEN",

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

        navinformazioni: 
            "INFORMATIONEN",

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
            "Administrationsbereich.",
  
        informazioniTitle: 
            "INFORMATIONEN",

        curiositaAnnalisaTitle:
    "ANNALISA",

        doveSiamoTitle:
    "WO WIR SIND",

         curiositaAnnalisaText:
    "Ich heiße Annalisa, bin 53 Jahre alt und bin mit 2 Jahren zum ersten Mal geflogen. Seitdem habe ich nie aufgehört zu reisen. Ich liebe es, zu reisen, zu entdecken und neue Orte und Menschen kennenzulernen. Ich habe mein Haus am Gardasee so eingerichtet, dass meine Gäste all das vorfinden, was ich selbst in Ferienwohnungen auf der ganzen Welt suche. Dienstleistungen und alles, was für einen angenehmen und komfortablen Aufenthalt notwendig ist.",

         curiositaCheckinTitle:
    "CHECK-IN & CHECK-OUT",

         checkinLabel:
    "CHECK-IN",

         checkoutLabel:
    "CHECK-OUT",

         curiositaAnimaliTitle:
    "TIERFREUNDLICH",

         curiositaAnimaliText:
    "Annalisa House freut sich, Ihre Haustiere willkommen zu heißen, denn ein Urlaub ist wirklich etwas Besonderes, wenn man ihn mit denjenigen teilen kann, die man liebt.",

        requestAvailability:
    "VERFÜGBARKEIT ANFRAGEN",

        howToSendRequest: 
            "WIE MÖCHTEN SIE DIE ANFRAGE SENDEN?",
    
        mailAppOption: 
            "E-MAIL-PROGRAMM",

        service1:
    "Heizung",

service2:
    "Klimaanlage",

service3:
    "Wärmepumpe",

service4:
    "Rauchmelder",

service5:
    "Feuerlöscher",

service6:
    "WLAN",

service7:
    "Fernseher",

service8:
    "Kühlschrank",

service9:
    "Backofen",

service10:
    "Waschmaschine",

service11:
    "Kaffeemaschine",

service12:
    "Wasserkocher",

service13:
    "Balkon",

service14:
    "Parkplatz",

service15:
    "Swimmingpool",

service16:
    "Babybett",

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

        writeReview:
            "WRITE A REVIEW",

        writeReviewTitle:
            "WRITE A REVIEW",

        reviewName:
            "Name",

        reviewCountry:
            "Country",

        reviewRating:
            "Rating",

        reviewText:
            "Your review",

        publishReview:
            "PUBLISH REVIEW",

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

        navinformazioni: 
            "INFORMATION",

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
            "Administration area.",

        informazioniTitle: 
            "INFORMATION",

        curiositaAnnalisaTitle:
    "ANNALISA",

        doveSiamoTitle:
    "WHERE WE ARE",

        curiositaAnnalisaText:
    "My name is Annalisa, I am 53 years old and I took my first flight when I was 2 years old. Since then, I have never stopped travelling. I love travelling, exploring and discovering new places and people. I have arranged my home on Lake Garda to give guests everything I look for myself in apartments around the world. Services and everything necessary to make your stay pleasant and comfortable.",

        curiositaCheckinTitle:
    "CHECK-IN & CHECK-OUT",

        checkinLabel:
    "CHECK-IN",

        checkoutLabel:
    "CHECK-OUT",

        curiositaAnimaliTitle:
    "PET FRIENDLY",

        curiositaAnimaliText:
    "Annalisa House is happy to welcome your pets, because a holiday is truly special when you can share it with those you love.",

        requestAvailability:
    "REQUEST AVAILABILITY",

        howToSendRequest: 
            "HOW WOULD YOU LIKE TO SEND THE REQUEST?",
    
        mailAppOption: 
            "EMAIL CLIENT",

        service1:
    "Heating",

service2:
    "Air conditioning",

service3:
    "Heat pump",

service4:
    "Smoke detector",

service5:
    "Fire extinguisher",

service6:
    "Wi-Fi",

service7:
    "Television",

service8:
    "Refrigerator",

service9:
    "Oven",

service10:
    "Washing machine",

service11:
    "Coffee machine",

service12:
    "Kettle",

service13:
    "Balcony",

service14:
    "Parking space",

service15:
    "Swimming pool",

service16:
    "Baby cot",

    }

};


/* =========================
   LANGUAGE MENU
========================= */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const languageOptions =
    document.querySelectorAll(".language-option");


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
   CHANGE LANGUAGE
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


                if (selectedLanguage[key]) {

                    element.textContent =
                        selectedLanguage[key];

                }

            }
        );


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(
            (element) => {

                const key =
                    element.dataset.i18nPlaceholder;


                if (selectedLanguage[key]) {

                    element.placeholder =
                        selectedLanguage[key];

                }

            }
        );


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

                option.textContent =
                    getCountryFlag(country) +
                    " " +
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


    languageMenu.classList.remove("open");

}


/* =========================
   LANGUAGE EVENTS
========================= */

languageButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        languageMenu.classList.toggle("open");

    }
);


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


document.addEventListener(
    "click",
    () => {

        languageMenu.classList.remove("open");

    }
);


/* =========================
   RESTORE LANGUAGE
========================= */

const savedLanguage =
    localStorage.getItem(
        "annalisaLanguage"
    );


if (
    savedLanguage &&
    translations[savedLanguage]
) {

    changeLanguage(savedLanguage);

} else {

    changeLanguage("it");

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


writeReviewButton.addEventListener(
    "click",
    () => {

        reviewModal.classList.add("open");

    }
);


reviewModalClose.addEventListener(
    "click",
    () => {

        reviewModal.classList.remove("open");

    }
);


reviewModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === reviewModal
        ) {

            reviewModal.classList.remove("open");

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
    document.getElementById(
        "publishReviewButton"
    );

const reviewNameInput =
    document.getElementById(
        "reviewName"
    );

const reviewCountrySelect =
    document.getElementById(
        "reviewCountry"
    );

const reviewTextInput =
    document.getElementById(
        "reviewText"
    );


publishReviewButton.addEventListener(
    "click",
    async () => {

        const name =
            reviewNameInput.value.trim();

        const country =
            reviewCountrySelect.value;

        const text =
            reviewTextInput.value.trim();


        if (!name) {

            alert(
                "Inserisci il tuo nome."
            );

            return;

        }


        if (selectedRating === 0) {

            alert(
                "Seleziona una valutazione."
            );

            return;

        }


        if (!text) {

            alert(
                "Scrivi una recensione."
            );

            return;

        }


        try {

            publishReviewButton.disabled =
                true;


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


            reviewNameInput.value =
                "";

            reviewCountrySelect.value =
                "IT";

            reviewTextInput.value =
                "";

            selectedRating =
                0;


            ratingButtons.forEach(
                (star) => {

                    star.textContent =
                        "☆";

                }
            );


            reviewModal.classList.remove(
                "open"
            );


            publishReviewButton.disabled =
                false;


            publishReviewButton.textContent =
                "PUBBLICA RECENSIONE";


            await loadReviews();


        } catch (error) {

            console.error(
                "Errore nel salvataggio:",
                error
            );


            alert(
                "Si è verificato un errore. Riprova."
            );


            publishReviewButton.disabled =
                false;


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
        document.getElementById(
            "reviewsList"
        );


    if (!reviewsList) {

        return;

    }


    reviewsList.innerHTML =
        "";


    try {

        const reviewsQuery =
            query(
                collection(db, "reviews"),
                orderBy("data", "desc")
            );


        const snapshot =
            await getDocs(
                reviewsQuery
            );


        snapshot.forEach(
            (documentSnapshot) => {

                const review =
                    documentSnapshot.data();


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "review-card";


                const rating =
                    Number(
                        review.stelle
                    ) || 0;


                const stars =
                    "★".repeat(rating) +
                    "☆".repeat(5 - rating);


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


                card.innerHTML = `

                    <div class="review-top">

                        <span class="review-author">

                            ${getCountryFlag(review.paese)}

                            ${escapeHTML(
                                review.nome || ""
                            )}

                        </span>


                        <span class="review-date">

                            ${formattedDate}

                        </span>

                    </div>


                    <div class="review-stars">

                        ${stars}

                    </div>


                    <p class="review-text">

                        ${escapeHTML(
                            review.testo || ""
                        )}

                    </p>

                `;


                reviewsList.appendChild(
                    card
                );

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
   SICUREZZA TESTO
========================= */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =========================
   ADMIN LOGIN
========================= */

const adminLogin =
    document.getElementById(
        "adminLogin"
    );

const adminPanel =
    document.getElementById(
        "adminPanel"
    );

const adminEmail =
    document.getElementById(
        "adminEmail"
    );

const adminPassword =
    document.getElementById(
        "adminPassword"
    );

const adminLoginButton =
    document.getElementById(
        "adminLoginButton"
    );

const adminLoginMessage =
    document.getElementById(
        "adminLoginMessage"
    );

const adminLogoutButton =
    document.getElementById(
        "adminLogoutButton"
    );


/* =========================
   LOGIN
========================= */

adminLoginButton.addEventListener(
    "click",
    async () => {

        const email =
            adminEmail.value.trim();


        const password =
            adminPassword.value;


        if (
            !email ||
            !password
        ) {

            adminLoginMessage.textContent =
                "Inserisci email e password.";

            return;

        }


        try {

            adminLoginMessage.textContent =
                "Accesso in corso...";


            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


            adminLoginMessage.textContent =
                "";


        } catch (error) {

            console.error(error);


            adminLoginMessage.textContent =
                "Email o password non corretti.";

        }

    }
);


/* =========================
   STATO ADMIN
========================= */

onAuthStateChanged(
    auth,
    (user) => {

        if (user) {

            adminLogin.style.display =
                "none";

            adminPanel.style.display =
                "block";

            loadAdminReviews();

        } else {

            adminLogin.style.display =
                "block";

            adminPanel.style.display =
                "none";

        }

    }
);

/* =========================
   LOGOUT
========================= */

adminLogoutButton.addEventListener(
    "click",
    async () => {

        await signOut(auth);

    }
);


/* =========================
   CARICA RECENSIONI
========================= */

loadReviews();


/* =========================
   CARICA RECENSIONI ADMIN
========================= */

async function loadAdminReviews() {

    const adminReviewsList =
        document.getElementById("adminReviewsList");

    adminReviewsList.innerHTML = "";

    try {

        const reviewsQuery =
            query(
                collection(db, "reviews"),
                orderBy("data", "desc")
            );

        const snapshot =
            await getDocs(reviewsQuery);


        if (snapshot.empty) {

            adminReviewsList.innerHTML =
                "<p>Nessuna recensione presente.</p>";

            return;

        }


        snapshot.forEach(
            (documentSnapshot) => {

                const review =
                    documentSnapshot.data();

                const reviewId =
                    documentSnapshot.id;


                const card =
                    document.createElement("div");

                card.className =
                    "admin-review-card";


                const stars =
                    "★".repeat(review.stelle) +
                    "☆".repeat(5 - review.stelle);


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


                card.innerHTML = `

                    <div class="admin-review-top">

                        <span class="admin-review-author">

                            ${getCountryFlag(review.paese)}

                            ${escapeHTML(review.nome)}

                        </span>

                        <span class="admin-review-date">

                            ${formattedDate}

                        </span>

                    </div>


                    <div class="admin-review-stars">

                        ${stars}

                    </div>


                    <p class="admin-review-text">

                        ${escapeHTML(review.testo)}

                    </p>


                    <button
                        class="delete-review-button"
                        data-review-id="${reviewId}">

                        ELIMINA

                    </button>

                `;


                adminReviewsList.appendChild(card);

            }
        );


        /* =========================
           PULSANTI ELIMINA
        ========================= */

        const deleteButtons =
            adminReviewsList.querySelectorAll(
                ".delete-review-button"
            );


        deleteButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    async () => {

                        const reviewId =
                            button.dataset.reviewId;


                        const confirmed =
                            confirm(
                                "Sei sicuro di voler eliminare questa recensione?"
                            );


                        if (!confirmed) {

                            return;

                        }


                        try {

                            button.disabled = true;

                            button.textContent =
                                "ELIMINAZIONE...";


                            await deleteDoc(
                                doc(
                                    db,
                                    "reviews",
                                    reviewId
                                )
                            );


                            await loadAdminReviews();

                            await loadReviews();


                        } catch (error) {

                            console.error(
                                "Errore eliminazione recensione:",
                                error
                            );


                            alert(
                                "Errore durante l'eliminazione della recensione."
                            );


                            button.disabled = false;

                            button.textContent =
                                "ELIMINA";

                        }

                    }
                );

            }
        );


    } catch (error) {

        console.error(
            "Errore caricamento recensioni Admin:",
            error
        );

        adminReviewsList.innerHTML =
            "<p>Errore nel caricamento delle recensioni.</p>";

    }

}


/* =========================
   RICHIEDI DISPONIBILITÀ
========================= */

const availabilityButton =
    document.getElementById("availabilityButton");

const availabilityModal =
    document.getElementById("availabilityModal");

const availabilityModalClose =
    document.getElementById("availabilityModalClose");

const gmailOption =
    document.getElementById("gmailOption");

const mailAppOption =
    document.getElementById("mailAppOption");


if (
    availabilityButton &&
    availabilityModal &&
    availabilityModalClose &&
    gmailOption &&
    mailAppOption
) {

    const email =
        "AnnalisaHouse2026@gmail.com";

    const subject =
        "Richiesta disponibilità – Annalisa House";


    /* =========================
       RILEVA DISPOSITIVO
    ========================= */

    const isMobile =
        /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
        );


    /* =========================
       CLICK PULSANTE
    ========================= */

    availabilityButton.addEventListener(
        "click",
        () => {

            /* TELEFONO */

            if (isMobile) {

                window.location.href =
                    `mailto:${email}?subject=${encodeURIComponent(subject)}`;

                return;

            }


            /* PC */

            availabilityModal.classList.add("open");

        }
    );


    /* =========================
       CHIUDI MODAL
    ========================= */

    availabilityModalClose.addEventListener(
        "click",
        () => {

            availabilityModal.classList.remove("open");

        }
    );


    /* CLICK FUORI DAL MODAL */

    availabilityModal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === availabilityModal
            ) {

                availabilityModal.classList.remove("open");

            }

        }
    );


    /* =========================
       GMAIL
    ========================= */

    gmailOption.addEventListener(
        "click",
        () => {

            const gmailURL =
                "https://mail.google.com/mail/?view=cm" +
                "&fs=1" +
                "&to=" +
                encodeURIComponent(email) +
                "&su=" +
                encodeURIComponent(subject);

            window.open(
                gmailURL,
                "_blank"
            );

            availabilityModal.classList.remove("open");

        }
    );


    /* =========================
       PROGRAMMA EMAIL
    ========================= */

    mailAppOption.addEventListener(
        "click",
        () => {

            window.location.href =
                `mailto:${email}?subject=${encodeURIComponent(subject)}`;

            availabilityModal.classList.remove("open");

        }
    );

}


/* =========================
   GALLERIA LIGHTBOX
========================= */

const galleryLightbox =
    document.getElementById("galleryLightbox");

const galleryLightboxImage =
    document.getElementById("galleryLightboxImage");

const galleryLightboxClose =
    document.getElementById("galleryLightboxClose");

const galleryLightboxPrev =
    document.getElementById("galleryLightboxPrev");

const galleryLightboxNext =
    document.getElementById("galleryLightboxNext");


const galleryImages =
    document.querySelectorAll(".gallery-item img");


let currentGalleryIndex = 0;


/* =========================
   APRI LIGHTBOX
========================= */

function openGalleryLightbox(index) {

    currentGalleryIndex = index;

    galleryLightboxImage.src =
        galleryImages[currentGalleryIndex].src;

    galleryLightbox.classList.add("open");

}


/* =========================
   CHIUDI LIGHTBOX
========================= */

function closeGalleryLightbox() {

    galleryLightbox.classList.remove("open");

}


/* =========================
   FOTO PRECEDENTE
========================= */

function previousGalleryImage() {

    currentGalleryIndex--;

    if (currentGalleryIndex < 0) {

        currentGalleryIndex =
            galleryImages.length - 1;

    }

    galleryLightboxImage.src =
        galleryImages[currentGalleryIndex].src;

}


/* =========================
   FOTO SUCCESSIVA
========================= */

function nextGalleryImage() {

    currentGalleryIndex++;

    if (
        currentGalleryIndex >=
        galleryImages.length
    ) {

        currentGalleryIndex = 0;

    }

    galleryLightboxImage.src =
        galleryImages[currentGalleryIndex].src;

}


/* =========================
   CLICK SULLE FOTO
========================= */

galleryImages.forEach(
    (image, index) => {

        image.addEventListener(
            "click",
            () => {

                openGalleryLightbox(index);

            }
        );

    }
);


/* =========================
   PULSANTE CHIUDI
========================= */

galleryLightboxClose.addEventListener(
    "click",
    closeGalleryLightbox
);


/* =========================
   PRECEDENTE
========================= */

galleryLightboxPrev.addEventListener(
    "click",
    previousGalleryImage
);


/* =========================
   SUCCESSIVA
========================= */

galleryLightboxNext.addEventListener(
    "click",
    nextGalleryImage
);


/* =========================
   CLICK SULLO SFONDO
========================= */

galleryLightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            galleryLightbox
        ) {

            closeGalleryLightbox();

        }

    }
);


/* =========================
   TASTIERA
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !galleryLightbox.classList.contains("open")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeGalleryLightbox();

        }


        if (event.key === "ArrowLeft") {

            previousGalleryImage();

        }


        if (event.key === "ArrowRight") {

            nextGalleryImage();

        }

    }
);
