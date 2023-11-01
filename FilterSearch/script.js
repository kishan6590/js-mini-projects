const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
  searchFun(event);
});

function searchFun(event) {
  let filter = input.value.toUpperCase();
  let tr = document.querySelectorAll("tr");

  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].querySelectorAll("td");

    let preContent = td[0];

    let content = preContent.innerHTML;

    if (preContent) {
      if (content.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
