let snakeStartSize = 3;
let snakeBody = new Array();
let snakeHead = Math.floor(Math.random() * 100) + 1 ;
let x;
let endOfTail;
let direction;

// Use getElementsByClassName to find elements as HTMLcollection, then turn into array so we can use forEach to add a new class
function displaySnakeHead() {
    // console.log("first" + snakeHead);
    // snakeBody.forEach(element => console.log(element));
    x = Array.from(document.getElementsByClassName(snakeHead));
    x.forEach(element => element.classList.add('snakehead'));
}

function keyPress() {
    document.onkeydown = logKey;
}

function clearHead() {
    x.forEach(element => element.classList.remove('snakehead'));
}

function stepUp() {
    direction = "up";
    snakeHead -= 10;
    if (snakeHead < 1) {
        snakeHead += 100;
    }
}

function stepDown() {
    direction = "down";
    snakeHead += 10;
    if (snakeHead > 100) {
        snakeHead -= 100;
    }
}

function stepLeft() {
    direction = "left";
    snakeHead -= 1;
    if (snakeHead % 10 == 0) {
        snakeHead += 10;
    }
}

function stepRight() {
    direction = "right";
    snakeHead += 1;
    if (snakeHead % 10 == 1) {
        snakeHead -= 10;
   }
}

function popSnakeBody() {
    if (snakeBody.length > 1) {
    endOfTail = snakeBody.pop();
    }
}

function logKey(e) {
    clearHead();
    clearBody();
    popSnakeBody();

    if (e.keyCode == '38') { stepUp(); }
    else if (e.keyCode == '40') { stepDown(); }
    else if (e.keyCode == '37') { stepLeft(); }
    else if (e.keyCode == '39') { stepRight(); }

    snakeBody = x.concat(snakeBody);
    displaySnakeHead();
    displaySnakeBody();
    eatApple();
    gameEnd();
}

function displaySnakeBody() {
    snakeBody.forEach(element => element.classList.add('snakebody'));
}
function clearBody() {
    snakeBody.forEach(element => element.classList.remove('snakebody'));
}

// Generate random position for apple using recusion to loop if apple is in the same position as the snake
function displayApple() {
    let a;
    applePosition = Math.floor(Math.random() * 100) + 1;
    a = Array.from(document.getElementsByClassName(applePosition));
    a.forEach((apple) => {
        if (apple.classList.contains('snakehead')) {
            a = [];
            displayApple();
        }
        else if (apple.classList.contains('snakebody')) {
            a = [];
            displayApple();
        }
    })
    a.forEach(element => element.classList.add('apple'));
}

function eatApple() {
    let a
    a = Array.from(document.getElementsByClassName('snakehead apple'));
    if (a.length > 0) {
        a.forEach(element => element.classList.remove('apple'));
        snakeBody.push(endOfTail);
        displayApple();
    }
}

function gameEnd() {
    let a
    a = Array.from(document.getElementsByClassName('snakehead snakebody'));
    if (a.length > 0) {
        console.log('You have lost the game!')
    }
}

function step() {
    let intervalID 
    intervalID = setInterval(() => { 
        console.log("test");
        clearHead();
        clearBody();
        endOfTail = snakeBody.pop();

        if (direction == "up") { stepUp(); }
        else if (direction == "down") { stepDown(); }
        else if (direction == "left") { stepLeft(); }
        else if (direction == "right") { stepRight(); }

        snakeBody = x.concat(snakeBody);
        displaySnakeHead();
        displaySnakeBody();
        eatApple();
        gameEnd();
     }, 1000);
}

function init() {
    displaySnakeHead();
    displaySnakeBody();
    keyPress();
    displayApple();
    step();
}
  
window.addEventListener('DOMContentLoaded', init);