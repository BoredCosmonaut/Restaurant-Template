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





document.getElementById("res-submit").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("res-confirm").style.display = "flex"
})

document.getElementById("close-conformation").addEventListener("click", function() {
    document.getElementById("res-confirm").style.display = "none"
})