// Javascript File
const container = document.querySelector('#container');
const gridButton = document.querySelector("#gridButton");
const resetButton = document.querySelector('#resetButton');
let sizeInput;
let size;
let maxNumber = 100;
let grid;
let div;

for (i=0;i < 4096; i++) {
    const div = document.createElement('div');
    div.className = "grid";

    container.appendChild(div);

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue";
    })
}


gridButton.addEventListener("click", resizeGrid);
resetButton.addEventListener("click",reset);

function reset () {
    window.location.reload();
}

function resizeGrid () {
    while (true) {
    sizeInput = prompt("Please enter the number of squares per side");

    if (sizeInput === null) {
        alert("Prompt cancelled by user");
        break;
    }

    size = Number(sizeInput);

    if (!isNaN(size) && size <= maxNumber) {
        grid = size * size;
        for (i=0;i < grid; i++) {
            const div = document.createElement('div');
            div.className = "grid";
        
            container.appendChild(div);
        
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "blue";
            })
        }
        break;
    } else {
        alert(`Invalid input. Please enter a number less than or equal to ${maxNumber}.`);
    }
    }
    
}

