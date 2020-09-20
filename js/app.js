let snakeStartSize = 3;
let snakeBody = new Array();
let snakeHead = Math.floor(Math.random() * 100) + 1 ;
let x;

// Use getElementsByClassName to find elements as HTMLcollection, then turn into array so we can use forEach to add a new class
function displaySnakeHead() {
    x = Array.from(document.getElementsByClassName(snakeHead));
    x.forEach(element => element.classList.add('snakehead'));
}

function keyPress() {
    document.onkeydown = logKey;
}

function clearBox() {
    x.forEach(element => element.classList.remove('snakehead'));
}

function logKey(e) {
    clearBox();
    // Up
    if (e.keyCode == '38') {
        snakeHead -= 10;
        if (snakeHead < 1) {
            snakeHead += 100;
        }
    }
    // Down
    else if (e.keyCode == '40') {
        snakeHead += 10;
        if (snakeHead > 100) {
            snakeHead -= 100;
        }
    }
    // Left
    else if (e.keyCode == '37') {
       snakeHead -= 1;
       if (snakeHead % 10 == 0) {
           snakeHead += 10;
       }
    }
    // Right
    else if (e.keyCode == '39') {
       snakeHead += 1;
       if (snakeHead % 10 == 1) {
           snakeHead -= 10;
      }
    }
    displaySnakeHead();
}

function init() {
    // buildSnake(snakeStartSize);
    // console.log(snakeBody);
    displaySnakeHead();
    keyPress();
}
  
window.addEventListener('DOMContentLoaded', init);