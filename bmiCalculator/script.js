const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<h2>Please give a valid height ${height}</h2>`;
    console.log(height);
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<h2>Please give a valid weight ${weight}</h2>`;
    console.log(height);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let feedback;
    switch (true) {
      case bmi < 18.6:
        feedback = "Underweight";
        break;
      case bmi >= 18.6 && bmi < 24.9:
        feedback = "Normal Range";
        break;
      case bmi > 24.9:
        feedback = "Overweight";
    }
    results.innerHTML = `<span>${bmi} ${feedback} </span>`;
  }
});
