const gridSize = document.getElementById("grid-value");
const container = document.getElementById("container");


function createGrid(){
    container.innerHTML = "";
    const value = Number(gridSize.value); 
    if (isNaN(value)) return;

    const squareGrid = value ** 2;
    const boxSize = 600 / value;
    container.style.setProperty('--square-size', `${boxSize}px`);

    for (let i = 0; i < squareGrid; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", () => {
        newDiv.classList.toggle("active");
        newDiv.style.backgroundColor = randomColor(); 
});
    }
}

const randomColor = function getRandomColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

gridSize.addEventListener("input", createGrid);


