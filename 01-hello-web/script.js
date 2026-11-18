// ---------- 1. Greeting based on the time of day ----------
const hour = new Date().getHours();
const greetingElement = document.getElementById("greeting");

if (hour < 12) {
  greetingElement.textContent = "Good morning ☀️";
} else if (hour < 18) {
  greetingElement.textContent = "Good afternoon 🌤️";
} else {
  greetingElement.textContent = "Good evening 🌙";
}

// ---------- 2. Fun fact button ----------
const facts = [
  "I wrote this page myself.",
  "My favourite food is spaghetti.",
  "I once was 10th in a national competition.",
  "I have a pet called Fluffy.",
];
let factIndex = 0;

const factElement = document.getElementById("fact");
const factButton = document.getElementById("fact-button");

factButton.addEventListener("click", function () {
  factElement.textContent = facts[factIndex];
  factIndex = factIndex + 1;
  if (factIndex === facts.length) {
    factIndex = 0;
  }
});

// ---------- 3. Dark mode toggle ----------
const themeButton = document.getElementById("theme-button");

function updateThemeButton() {
  themeButton.textContent = document.body.classList.contains("dark")
    ? "Switch to light mode"
    : "Switch to dark mode";
}

// On page load: restore the saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
updateThemeButton();

// On click: switch theme, save it, update the button
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeButton();
});

// ---------- 4. Counter button ----------
const counterButton = document.getElementById("counter-button");
let counter = 0;

counterButton.addEventListener("click", function () {
  counter++;
  if (counter === 1) {
    counterButton.textContent = `Clicked ${counter} time`;
  } else {
    counterButton.textContent = `Clicked ${counter} times`;
  };
});
