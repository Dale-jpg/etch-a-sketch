// Javascript File
const container = document.querySelector('#container');

for (i=0;i < 256; i++) {
    const div = document.createElement('div');
    div.className = "grid";

    container.appendChild(div);

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue";
    })
}


