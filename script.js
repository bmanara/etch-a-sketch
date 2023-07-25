const container = document.querySelector("#sketch");
const slider = document.querySelector("#dimensions")

// Create default sized grid (16 x 16)
createGrid(16);

// When slider changes, change grid and change text
slider.onchange = function() {
    createGrid(slider.value);
}

slider.oninput = function() {
    document.querySelector("#dimension-text").textContent = `Grid: ${slider.value} x ${slider.value}`;
}


function createGrid(size) {
    // Creates a grid in sketch container based on size x size dimensions
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < size; j++) {
            const grid = document.createElement('div');
            grid.className = "grid";
            grid.addEventListener("mouseover", () => {
                grid.classList.add("highlighted");
            })
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}


