/*      CAROUSEL        */

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})



/*      HAMBURGER MENU      */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('header--navigation__list')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})


/*      LAST MODIFIED       */
const todayy = new Date();
document.querySelector("#year").textContent = todayy.getFullYear();

document.getElementById("modify").innerHTML = document.lastModified;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
let day = days[todayy.getDay()] + ", " + (todayy.getDate()) + " " + (months[todayy.getMonth()]) + " " + (todayy.getFullYear());
document.querySelector("#date").textContent = day;