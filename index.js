// fetch HTML Elements
let countEl = document.getElementById("count-el")
let saveCount = document.getElementById("save")

// Reisende zählen
let count = 0
function increment() {
      count += 1
      countEl.textContent = count
}

// Zwichenspeichern
function save() {
      let output = count + " - "
      saveCount.textContent += output
      count = 0
      countEl.textContent = count
}
