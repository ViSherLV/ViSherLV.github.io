const closeMenu = document.getElementById("main-header__menu--close");
const openMenu = document.getElementById("main-header__menu--open");
const mainMenu = document.getElementById("main-header__menu");
openMenu.addEventListener("click", function () {
    mainMenu.style.visibility = "visible";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";

})
closeMenu.addEventListener("click", function () {
    mainMenu.style.visibility = "hidden";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
})

var media = window.matchMedia("(min-width: 780px)")

function myFunction(x) {
    if (x.matches) { // If media query matches
        mainMenu.style.visibility = "visible";
        closeMenu.style.display = "none";
        openMenu.style.display = "none";

    } else {
        mainMenu.style.visibility = "hidden";
        openMenu.style.display = "block";
    }
}


myFunction(media);
media.addListener(myFunction);