// Dark theme
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
};

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

// Clock and message
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");

let active_bar = false;

// Show time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // Output time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;

  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set background and greeting
function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    greeting.textContent = "Good Afternoon";
  } else {
    // Evening
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    greeting.textContent = "Good Evening";
  }
}

function change() {
  active_bar = !active_bar;
  document.getElementById("burguer_ico").innerHTML = active_bar
    ? "&#88;"
    : "&#9776;";
}

// Run
showTime();
setBgGreet();
