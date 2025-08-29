console.log("Beginning the program...");

const dark = document.getElementById("dark-mode1"); // Button or toggle element
const darkText = document.getElementById("darktext1"); // Text element for dark mode indication
const darkSection = document.getElementById("dark1"); // Section to apply dark mode styles
const darkcheck = document.getElementById("switchmode"); //Checkbox
const Sun = document.getElementsByClassName("sun");
const Moon = document.getElementsByClassName("moon");
let darkmodetoggle = false;

dark.addEventListener("click", function () {
  if (!darkmodetoggle) {
    darkcheck.checked = true;
    document.body.style.backgroundColor = "#262627ff";
    document.body.style.color = "#ffffff";
    dark.textContent = "Light Mode";
    darkSection.style.backgroundColor = "#333334ff";
    darkmodetoggle = true;
    darkText.style.color = "#ffffff";
    console.log("Dark mode enabled.");
  } else {
    darkcheck.checked = false;
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    dark.textContent = "Dark Mode";
    darkSection.style.backgroundColor = "#ffffff";
    darkText.style.color = "#000000";
    darkmodetoggle = false;
    console.log("Light mode enabled.");
  }
});

darkcheck.addEventListener("change", function () {
  if (!darkmodetoggle && darkcheck.checked) {
    document.body.style.backgroundColor = "#262627ff";
    document.body.style.color = "#ffffff";
    dark.textContent = "Light Mode";
    darkSection.style.backgroundColor = "#333334ff";
    darkmodetoggle = true;
    darkText.style.color = "#ffffff";
    console.log("Dark mode enabled.");
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    dark.textContent = "Dark Mode";
    darkSection.style.backgroundColor = "#ffffff";
    darkText.style.color = "#000000";
    darkmodetoggle = false;
    console.log("Light mode enabled.");
  }
});
