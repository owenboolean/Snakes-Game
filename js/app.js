let snakeStartSize = 3;
let snakeBody = new Array();
let snakeHead = Math.floor(Math.random() * 100) + 1 ;
let x;

// function buildSnake(size) {
//     for (let i=1; i<=size; i++) {
//         snakeBody.push(i);
//     }
// }

function displaySnakeHead() {
    x = document.getElementById(snakeHead);
    x.classList.add('snakehead');
}

function init() {
    // buildSnake(snakeStartSize);
    // console.log(snakeBody);
    displaySnakeHead();
}
  
window.addEventListener('DOMContentLoaded', init);