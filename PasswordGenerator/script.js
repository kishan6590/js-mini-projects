const slider = document.querySelector("#slider");
const inputField = document.querySelector("#inputField");
const passwordLength = document.querySelector("#passwordLength");

const button = document.querySelector("button");
const lowerCase = document.querySelector("#lowerCase");
const upperCase = document.querySelector("#upperCase");
const number = document.querySelector("#number");
const symbols = document.querySelector("#symbols");

const copyIcon = document.querySelector("#copyIcon");
const copyTitle = document.querySelector("#copyTitle");

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChar = "0123456789";
const symbolsChar = "!@#$%^&*()_+";

passwordLength.innerHTML = slider.value;
let allowedCases = "";
slider.addEventListener("input", () => {
  passwordLength.innerHTML = slider.value;
});

button.addEventListener("click", () => {
  let password = genratePassword();
  inputField.value = password;
});
const genratePassword = () => {
  allowedCases += lowerCase.checked ? lowerCaseChar : "";
  allowedCases += upperCase.checked ? upperCaseChar : "";
  allowedCases += number.checked ? numbersChar : "";
  allowedCases += symbols.checked ? symbolsChar : "";

  let password = "";

  if (slider.value !== 0 && allowedCases !== "") {
    for (let i = 0; i < slider.value; i++) {
      password += allowedCases.charAt(
        Math.floor(Math.random() * allowedCases.length)
      );
    }
  }

  return password;
};

copyIcon.addEventListener("click", () => {
  if (slider.value !== 0 && allowedCases !== "") {
    navigator.clipboard.writeText(inputField.value);
    copyTitle.style.display = "block";
    setTimeout(() => {
      copyTitle.style.display = "none";
    }, 2000);
  }
});
