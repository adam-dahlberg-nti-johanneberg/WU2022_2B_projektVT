const burger = document.querySelector(".burgerMenu")
const nav = document.querySelector("nav")

function toggleMenu() {
    nav.classList.toggle("navActive")
    burger.classList.toggle("toggle")
    console.log("function executed")
}

burger.addEventListener("click",toggleMenu)