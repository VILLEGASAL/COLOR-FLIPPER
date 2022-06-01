
let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let clickBtn = document.querySelector("#btn");

let color = document.querySelector("#color");

let body = document.querySelector("#body-color");

let getRandomNumber = () =>{

    return Math.random() * colors.length   
}

clickBtn.addEventListener("click", () => {

    let randomNumber = getRandomNumber();
    
    body.style.backgroundColor = colors[Math.floor(randomNumber)]

    color.textContent = colors[Math.floor(randomNumber)]

});