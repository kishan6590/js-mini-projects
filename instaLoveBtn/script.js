let container = document.querySelector(".sub-container");
console.log(container);
let heart = document.querySelector("#heart");
console.log(heart);

container.addEventListener("dblclick", () => {
  console.log("clicked");

  heart.style.transform = "translate(-50%,-50%) scale(1)";
  heart.style.opacity = "0.6";
  setTimeout(() => {
    heart.style.opacity = "0";
    heart.style.transform = "translate(-50%,-50%) scale(0)";
  }, 1000);
});
