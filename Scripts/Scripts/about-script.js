//Script for the header

document.querySelector("#home").addEventListener("click", () => {
    document.location= "home.html"
})

//Redirects the page to about us page
document.querySelector("#about").addEventListener("click", () => {
    document.location = "about.html"
})

document.querySelector("#menu").addEventListener("click", () => {
    document.location = "menu-page.html"
})

document.querySelector("#res").addEventListener("click", () => {
    document.location = "reservation.html"
})

document.querySelector("#hamburger").addEventListener("click", function() {
    console.log("clikc")
    const navMenu = document.querySelector("#header-inside");
    if(navMenu.style.display === "none") {
        navMenu.style.display = "flex"
    }
    else {
        navMenu.style.display = "none"
    }
})