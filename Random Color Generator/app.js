const colors = ["green", "red", "blue", "skyblue", "yellow", "grey", "black", "cyan", "purple", "orange"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

let getRandomNumber = () => Math.floor(Math.random() * colors.length); 