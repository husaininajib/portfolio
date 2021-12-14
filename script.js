const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const navPanel = document.querySelector(".nav-panel")
const navLink = document.querySelectorAll(".nav-link")
const arrowToTop = document.querySelector(".arrow-to-home")
const header = document.querySelector("header")

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

window.addEventListener("scroll", () => {
    const headerHeight = header.clientHeight
    const scrollDistance = window.pageYOffset
    if (scrollDistance > headerHeight / 2) {
        arrowToTop.classList.add("appear")
    } else {
        arrowToTop.classList.remove("appear")
    }
    if (scrollDistance != 0) {
        nav.classList.add("change-bg")
    } else {
        nav.classList.remove("change-bg")
    }
})