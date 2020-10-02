var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
        for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}
}
for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again";
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        });
        reset();
    }


function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
}




resetButton.addEventListener("click", function(){
    reset();
    
});







function changeColor(color){
   //loop through all squares
   for(var i = 0; i < colors.length; i++) {
       //change each color to match the given color
   squares[i].style.background = color;
   }

}
function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}
function generateRandomColors(num){
//make an array
var arr =[]
//add num random colors to array
for(var i = 0; i < num; i++){
    arr.push(randomColor())
//return that array
}
return arr;
}
function randomColor(){
    //pick a red from 0-255
   var r = Math.floor(Math.random() * 256);
        //pick a red from 0-255
        var g = Math.floor(Math.random() * 256);
            //pick a red from 0-255
            var b = Math.floor(Math.random() * 256);
            
           return "rgb(" + r + ", " + g + ", " + b + ")";
}