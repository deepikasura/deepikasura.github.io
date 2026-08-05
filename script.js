window.addEventListener("load", () => {

    const loader = document.getElementById("loader");


    loader.style.opacity = "0";


    setTimeout(() => {

        loader.style.display = "none";

    },800);


});



const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


});



sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(30px)";

section.style.transition="1s";


observer.observe(section);


});
const cards = document.querySelectorAll(".photo-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});
const music = document.getElementById("bgMusic");

document.addEventListener("click", function () {
    music.volume = 0;
    music.play();

    let fade = setInterval(() => {
        if (music.volume < 1) {
            music.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);
}, { once: true });
const cards = document.querySelectorAll(".photo-card");

cards.forEach(card => {
    let randomTilt = (Math.random() * 6 - 3).toFixed(2); // -3deg to +3deg
    card.style.setProperty('--tilt', `${randomTilt}deg`);
});
