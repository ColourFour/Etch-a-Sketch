let boxNumber = 16;

const container = document.querySelector(".container");

for(let i = 0; i< boxNumber; i++){
const interactBox = document.createElement("div");
interactBox.setAttribute("id", `boxPosition${i}`)
interactBox.setAttribute("class", `colorBox`)
container.appendChild(interactBox);
}
