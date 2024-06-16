let btn = document.getElementById("btn");
let input = document.getElementById("input");
let copyBtn = document.getElementById("copyBtn");
let charNumPunct =
  "abcdefghijklmnopqrstuvwxyz@#$&0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = document.getElementById("numbers");

// console.log(charNumPunct.length);

for (let i = 0; i < 32; i++) {
  let newOption = document.createElement("option");
  newOption.classList.add("NumOption");
  newOption.innerHTML = i + 1;
  numbers.appendChild(newOption);
  // console.log(option)
}

numbers.addEventListener("change", () => {
  let selectedOption = numbers.options[numbers.selectedIndex];

  btn.addEventListener("click", () => {
    let value = "";
    for (let i = 0; i < selectedOption.innerHTML; i++) {
      let randomNumber = Math.round(Math.random() * 65);
      // console.log(randomNumber);
      value = value + charNumPunct[randomNumber];
      input.value = value;
    }
  });
});

copyBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("You must generate password first!");
  } else {
    navigator.clipboard.writeText(input.value);
    alert("Password is copied to your clipboard!");
  }
});
