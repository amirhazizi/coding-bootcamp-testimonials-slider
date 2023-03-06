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

// user switcher function
function showUser(num) {
  const personNumber = num
  if (personNumber === persons.length) personNumber = 0
  if (personNumber < 0) personNumber = persons.length - 1
  const { image: imageSrc, name, prof, text } = persons[personNumber]
  userImage.setAttribute("src", imageSrc)
  userName.innerHTML = name
  userProfes.innerHTML = prof
  userText.innerHTML = text
}
// DOMContentLoaded event
window.addEventListener("DOMContentLoaded", () => {
  showUser(index)
})
