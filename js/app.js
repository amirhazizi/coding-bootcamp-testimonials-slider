// persons
import persons from "./data.js"

// variables
const nextBtn = document.querySelector("#next-btn")
const prevBtn = document.querySelector("#prev-btn")
const userText = document.querySelector(".user-desc")
const userName = document.querySelector(".user-name")
const userProfes = document.querySelector(".user-profes")
const userImages = document.querySelector(".avatar-container")
// index
let index = 0

// nextBtn event
nextBtn.addEventListener("click", () => {
  index++
  indexChecker()
  showSlider()

  showUser(index)
})

// prevBtn event
prevBtn.addEventListener("click", () => {
  index--
  indexChecker()
  showSlider("prev")
  showUser(index)
})

// DOMContentLoaded event
window.addEventListener("DOMContentLoaded", () => {
  showUser(index)
  const personImages = persons
    .map((person, index) => {
      const { image, name } = person
      let position = "next"
      if (index === 0) position = "active"
      if (index === persons.length - 1) position = "last"
      return `<img
              class="avatar ${position} rounded-md mx-auto drop-shadow-2xl absolute bottom-0 left-0"
              src='${image}'
              alt='${name}'
            />`
    })
    .join("")
  userImages.innerHTML += personImages
})

// user switcher function
function showUser(index) {
  let personNumber = index
  const {
    image: imageSrc,
    name,
    professional: prof,
    text,
  } = persons[personNumber]
  userName.innerHTML = name
  userProfes.innerHTML = prof
  userText.innerHTML = text
}

// index cheacker
function indexChecker() {
  if (index >= persons.length) index = 0
  if (index < 0) index = persons.length - 1
}

// slider images func
function showSlider(type) {
  const active = document.querySelector(".active")
  const last = document.querySelector(".last")
  let next = active.nextElementSibling || userImages.firstElementChild
  if (next.classList.contains("opacity-0")) next = next.nextElementSibling
  active.classList.remove("active")
  last.classList.remove("last")
  next.classList.remove("next")
  if (type === "prev") {
    active.classList.add("last")
    last.classList.add("next")
    next = active.previousElementSibling || userImages.lastElementChild
    if (next.classList.contains("opacity-0")) next = userImages.lastElementChild
    next.classList.add("active")
    next.classList.remove("next")
    return
  }

  //   active.classList.remove("next")
  last.classList.remove("next")
  next.classList.add("active")
  active.classList.add("last")
}
