const clock = document.querySelector("#clock");

clock.style.color = "#212121";

setInterval(() => {
  const date = new Date().toLocaleTimeString();
  clock.textContent = date;
}, 1000);
