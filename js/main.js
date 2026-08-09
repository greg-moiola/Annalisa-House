const menuButton =
    document.getElementById("menuButton");


const menuClose =
    document.getElementById("menuClose");


const menuOverlay =
    document.getElementById("menuOverlay");



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

menuClose.addEventListener(
    "click",
    () => {

        menuOverlay.classList.remove("open");

    }
);
