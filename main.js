const container = document.querySelector("#container");

const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

const createBox = () => {
    const box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
}

const createGrid = (row, col) => {
    for(let j = 0; j < col; j++)
    {
        for (let i = 0; i < row; i++)
            createBox();
    }
}

createGrid(4, 4);