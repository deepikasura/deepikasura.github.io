// =========================================
// DEEPS.CORE
// Smooth scrolling + existing animations
// =========================================


// LOADER
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }

});


// =========================================
// SMOOTH SCROLLING
// =========================================

let targetScroll = window.scrollY;
let currentScroll = window.scrollY;
let scrolling = false;

function smoothScroll() {

    currentScroll +=
        (targetScroll - currentScroll) * 0.08;

    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > 0.5) {

        requestAnimationFrame(smoothScroll);

    } else {

        currentScroll = targetScroll;
        scrolling = false;

    }

}


// Mouse wheel
window.addEventListener("wheel", (event) => {

    event.preventDefault();

    targetScroll += event.deltaY;

    targetScroll = Math.max(
        0,
        Math.min(
            targetScroll,
            document.documentElement.scrollHeight - window.innerHeight
        )
    );

    if (!scrolling) {

        scrolling = true;

        requestAnimationFrame(smoothScroll);

    }

}, { passive: false });


// Keep position correct if the user resizes the page
window.addEventListener("resize", () => {

    targetScroll = window.scrollY;
    currentScroll = window.scrollY;

});


// =========================================
// SECTION SCROLL ANIMATION
// =========================================

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                sectionObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.05
    }
);


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    sectionObserver.observe(section);

});


// =========================================
// PHOTO CARD ANIMATION
// =========================================

const cards =
    document.querySelectorAll(".photo-card");

const cardObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                cardObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.05
    }
);


cards.forEach(card => {

    cardObserver.observe(card);

});


// =========================================
// MUSIC
// =========================================

const music =
    document.getElementById("bgMusic");

let musicStarted = false;

function startMusic() {

    if (!music || musicStarted) {
        return;
    }

    music.play()
        .then(() => {

            musicStarted = true;

        })
        .catch(() => {});

}


document.addEventListener(
    "click",
    startMusic,
    {
        passive: true
    }
);

document.addEventListener(
    "touchstart",
    startMusic,
    {
        passive: true
    }
);