const hamburger = document.querySelector(".hamburger")
const navPanel = document.querySelector(".nav-panel")
const navLink = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
    navPanel.classList.toggle("show")
    hamburger.classList.toggle("rotate")
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navPanel.classList.remove("show")
    hamburger.classList.remove("rotate")

    })
})