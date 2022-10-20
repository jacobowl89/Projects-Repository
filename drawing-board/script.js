let pixels = 30
const container = document.querySelector(".container")

const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    newSize = prompt("Provide new grid size in px: ")
    start(newSize)
})



function changeSize(pixels){
    const squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.style.width = `${960/pixels- 0}px`;
        square.style.height = `${960/pixels - 0}px`;
    })}



function start(pixels) {
    container.innerHTML = ""
    for (let i = 0; i < pixels*pixels; i++) {

        const square = document.createElement("div")

        container.appendChild(square).classList.add(`square`)
        square.addEventListener("mouseover", () => {
            if (square.style.backgroundColor == ""){
            square.style.backgroundColor =`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.1)`

        } else {
            let newColor = String(square.style.backgroundColor)
            let end = newColor.slice(-4,-1)
            square.style.backgroundColor =`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Number(end) + 0.2})`
        }   
        })
    }
    changeSize(pixels)}





    start(pixels)



