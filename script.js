window.onload = function () {

    setTimeout(function () {

        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.visibility = "hidden";

    }, 2200);

};
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 800);
});
