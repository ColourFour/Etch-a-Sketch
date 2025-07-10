const gridSize = document.getElementById("grid-value");
const container = document.getElementById("container");


function createGrid(){
    container.innerHTML = "";
    const value = Number(gridSize.value); 
    if (isNaN(value)) return;

    const squareGrid = value ** 2;

    for (let i = 0; i < squareGrid; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-square");
        container.appendChild(newDiv);
    }
}

gridSize.addEventListener("input", createGrid);


