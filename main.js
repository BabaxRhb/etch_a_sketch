const container = document.querySelector("#container");

const createGrid = (row, col) => {
    for (let j = 0; j < col; j++) {
        const rowGrid = document.createElement("div");
        rowGrid.classList.add("row");
        container.appendChild(rowGrid);
        for (let i = 0; i < row; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            rowGrid.appendChild(box);
        }
    }
}

const row = 4;
const column = 4;

createGrid(row, column);