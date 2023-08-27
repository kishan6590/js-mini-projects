let friend = document.querySelector("#friend");

let btn = document.querySelector("#btn");

let flag = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    friend.innerHTML = "Friend";
    friend.style.color = "green";
    btn.innerHTML = "Remove Friend";

    flag = 1;
  } else {
    friend.innerHTML = "Strange";
    friend.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});
