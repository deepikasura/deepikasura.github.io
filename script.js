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
