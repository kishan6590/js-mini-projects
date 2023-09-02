const content = document.querySelector(".minus");
console.log(content);

content.addEventListener("click", () => {
  decrement();
});

const cheez = document.querySelector("#reader");
console.log(cheez);
const decrement = () => {
  let value = parseInt(cheez.textContent);
  console.log(value);
  value = value - 1;
  cheez.textContent = value;
};

const content1 = document.querySelector(".plus");
content1.addEventListener("click", () => {
  increment();
});

function increment() {
  let value = parseInt(cheez.innerHTML);
  value++;
  cheez.textContent = value;
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  let value = parseInt(cheez.textContent);
  value = 0;
  cheez.textContent = value;
});
