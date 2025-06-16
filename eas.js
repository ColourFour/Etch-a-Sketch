const input = document.getElementById("html-boxNumber");
const container = document.querySelector(".container");

input.addEventListener("input", () => {
  const boxNumber = Number(input.value);

  container.innerHTML = '';

  for (let i = 0; i < boxNumber * boxNumber; i++) {
    const interactBox = document.createElement("div");
    interactBox.setAttribute("id", `boxPosition${i}`);
    interactBox.setAttribute("class", "colorBox");
    container.appendChild(interactBox);
  }
  
  input.addEventListener("input", () => {
  const value = Number(input.value);
  if (value > 0) {
    document.documentElement.style.setProperty('--box-divisor', value);
  }
  
});
});

input.addEventListener("hover",() =>{
  interactBox.setAttribute("class", "filled");
});
