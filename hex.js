
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"] 

let clickBtn = document.querySelector("#btn");

let color = document.querySelector("#color");

let body = document.querySelector("#body-color");

let getRandomNumber = () => {

    return Math.floor(Math.random() * hex.length)
}

clickBtn.addEventListener("click", () => {

    let hexColor = "#"

    for(let i = 0; i < 6; i++){

        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor

    document.body.style.backgroundColor = hexColor
})