let input = document.getElementById("input");

let buttons = document.querySelectorAll("button");

buttons = Array.from(buttons);

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string.toString();
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;

      console.log(string);
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
});
