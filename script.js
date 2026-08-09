/* =========================================
   DEEPS.CORE SCRIPT
   ========================================= */

/* SMOOTH SCROLL */

let lenis;

if (typeof Lenis !== "undefined") {

    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        infinite: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}


/* LOADER */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }

});


/* SECTION SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            sectionObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.05
});


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease, transform 1s ease";

    sectionObserver.observe(section);

});


/* PHOTO CARD ANIMATION */

const cards = document.querySelectorAll(".photo-card");

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            cardObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.05
});


cards.forEach(card => {
    cardObserver.observe(card);
});


/* MUSIC */

const music = document.getElementById("bgMusic");

let musicStarted = false;

function startMusic() {

    if (!music || musicStarted) return;

    music.play()
        .then(() => {
            musicStarted = true;
        })
        .catch(() => {});

}

document.addEventListener("click", startMusic, {
    passive: true
});

document.addEventListener("touchstart", startMusic, {
    passive: true
});