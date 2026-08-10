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


                languageButton.textContent =
                    language.toUpperCase() + " ▾";


                languageMenu.classList.remove(
                    "open"
                );


                localStorage.setItem(
                    "annalisaLanguage",
                    language
                );

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
