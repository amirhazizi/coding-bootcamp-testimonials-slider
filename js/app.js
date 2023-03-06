// persons
import persons from "./data.js"

// variables
const nextBtn = document.querySelector("#next-btn")
const prevBtn = document.querySelector("#prev-btn")
const userImage = document.querySelector(".avatar")
const userText = document.querySelector(".user-desc")
const userName = document.querySelector(".user-name")
const userProfes = document.querySelector(".user-profes")
// index
let index = 0

// nextBtn event
nextBtn.addEventListener("click", () => {
  index++
  indexChecker()
  showUser(index)
})

// prevBtn event
prevBtn.addEventListener("click", () => {
  index--
  indexChecker()
  showUser(index)
})

// DOMContentLoaded event
window.addEventListener("DOMContentLoaded", () => {
  showUser(index)
})

// user switcher function
function showUser(index) {
  let personNumber = index
  console.log("personNum", personNumber)
  const {
    image: imageSrc,
    name,
    professional: prof,
    text,
  } = persons[personNumber]
  userImage.setAttribute("src", imageSrc)
  userName.innerHTML = name
  userProfes.innerHTML = prof
  userText.innerHTML = text
}

// index cheacker
function indexChecker() {
  if (index >= persons.length) index = 0
  if (index < 0) index = persons.length - 1
}
