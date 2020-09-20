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

function clearHead() {
    x.forEach(element => element.classList.remove('snakehead'));
}

function logKey(e) {
    clearHead();
    clearBody();
    snakeBody.pop();
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
    snakeBody = x.concat(snakeBody);
    displaySnakeHead();
    displaySnakeBody();
}

function initialSnakeBodyPosition() {
    let a;
    let b;
    a = Array.from(document.getElementsByClassName(snakeHead -1));
    b = Array.from(document.getElementsByClassName(snakeHead -2));
    snakeBody = a.concat(b);
}

function displaySnakeBody() {
    snakeBody.forEach(element => element.classList.add('snakebody'));
}
function clearBody() {
    snakeBody.forEach(element => element.classList.remove('snakebody'));
}

function displayApple() {
    let a;
    applePosition = Math.floor(Math.random() * 100) + 1;
    a = Array.from(document.getElementsByClassName(applePosition));
    a.forEach((apple) => {
        if (apple.classList.contains('snakehead')) {
            displayApple();
        }
        else if (apple.classList.contains('snakebody')) {
            displayApple();
        }
    })
    a.forEach(element => element.classList.add('apple'));
}

function init() {
    // buildSnake(snakeStartSize);
    // console.log(snakeBody);
    displaySnakeHead();
    keyPress();
    initialSnakeBodyPosition();
    displaySnakeBody();
    displayApple();
}
  
window.addEventListener('DOMContentLoaded', init);