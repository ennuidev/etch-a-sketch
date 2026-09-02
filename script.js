const body = document.querySelector("body")
const container = document.querySelector(".container");
const btn = document.createElement("button")

body.appendChild(btn);
btn.textContent = "Pick your grid size!"

container.before(btn)


for (let i = 0; i < 256; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares")
    container.appendChild(squares);

    
    
    squares.addEventListener("mouseover", () => {
        // squares.style.backgroundColor = "grey";
        let firstRGB = Math.floor(Math.random() * 256);
        let secondRGB = Math.floor(Math.random() * 256);
        let thirdRGB = Math.floor(Math.random() * 256);

    const randomColors = [firstRGB, secondRGB, thirdRGB].join(',');
        squares.style.backgroundColor = `rgb(${randomColors})`
         
    })

    
   
}



btn.addEventListener("click", () => {
    
    let size = prompt("Enter your grid size!");
    
    if (Number.isNaN(Number(size))) {
        alert("This is not a number!");

    } else if (size > 100) {
        alert("Number can't be higher than 100!");

    } else {
        let gridSize = 640 / size;

        const allSquares = document.querySelectorAll(".squares");
        for (let square of allSquares) {
            square.remove();
        }

        for (let i = 0; i < size * size; i++) {

            const squares = document.createElement("div");
            squares.classList.add("squares");

            squares.style.width = `${gridSize}px`;
            squares.style.height = `${gridSize}px`;

            container.appendChild(squares);
    
            squares.addEventListener("mouseover", () => {
                // squares.style.backgroundColor = "grey";
                let firstRGB = Math.floor(Math.random() * 256);
                let secondRGB = Math.floor(Math.random() * 256);
                let thirdRGB = Math.floor(Math.random() * 256);

            const randomColors = [firstRGB, secondRGB, thirdRGB].join(',');
                squares.style.backgroundColor = `rgb(${randomColors})`
            });
        }
    }
});

