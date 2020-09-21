let snakeBodyStartSize = 2;
let snakeBody = new Array();
let snakeHeadPosition = Math.floor(Math.random() * 100) + 1 ;
let snakeHead = new Array();
let endOfTail;
let direction;
let score;
let speed = 1000;
let intervalID;

// Use getElementsByClassName to find elements as HTMLcollection, then turn into array
function displaySnakeHead() {
    snakeHead = Array.from(document.getElementsByClassName(snakeHeadPosition));
    snakeHead.forEach(element => element.classList.add('snakehead'));
}

// Listen for arrow key press
function keyPress() {
    document.onkeydown = logKey;
}

// Clear snake head
function clearHead() {
    snakeHead.forEach(element => element.classList.remove('snakehead'));
}

// Find position for up direction with wrap around
function stepUp() {
    direction = "up";
    snakeHeadPosition -= 10;
    if (snakeHeadPosition < 1) { snakeHeadPosition += 100; }
}
// Find position for down direction with wrap around
function stepDown() {
    direction = "down";
    snakeHeadPosition += 10;
    if (snakeHeadPosition > 100) { snakeHeadPosition -= 100; }
}
// Find position for left direction with wrap around
function stepLeft() {
    direction = "left";
    snakeHeadPosition -= 1;
    if (snakeHeadPosition % 10 == 0) { snakeHeadPosition += 10; }
}
// Find position for right direction with wrap around
function stepRight() {
    direction = "right";
    snakeHeadPosition += 1;
    if (snakeHeadPosition % 10 == 1) { snakeHeadPosition -= 10; }
}
// Pops of tail to simulate movement
function popSnakeBody() {
    if (snakeBody.length >= snakeBodyStartSize) { endOfTail = snakeBody.pop(); }
}
// When key stroke pressed this clears the snake then finds new position of snake
// displays new position of snake then checks if we eat apple or crash into body
function logKey(e) {
    clearHead();
    clearBody();
    popSnakeBody();

    if (e.keyCode == '38') { stepUp(); }
    else if (e.keyCode == '40') { stepDown(); }
    else if (e.keyCode == '37') { stepLeft(); }
    else if (e.keyCode == '39') { stepRight(); }

    snakeBody = snakeHead.concat(snakeBody);
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
    applePosition = Math.floor(Math.random() * 100) + 1;
    let a = Array.from(document.getElementsByClassName(applePosition));
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
// Checks if we eat apple
function eatApple() {
    let a = Array.from(document.getElementsByClassName('snakehead apple'));
    if (a.length > 0) {
        a.forEach(element => element.classList.remove('apple'));
        snakeBody.push(endOfTail);
        displayApple();
        speed -= 50;
        clearInterval(intervalID);
        step();
    }
}
// Checks if we crash into snakebody and displays score and play again button
function gameEnd() {
    score = snakeBody.length - 2;
    let a = Array.from(document.getElementsByClassName('snakehead snakebody'));
    if (a.length > 0) {
        console.log('You have finished the game! Your final score is ' + score)
        clearInterval(intervalID);
        document.getElementById('end-game-message').innerHTML = '<button onClick="window.location.reload();">Thanks for playing Snakes! Your final score is ' + score + '. Click here to play again.</button>';
    }
}

// Keeps the snake moving at intervals, looking for when we eat apples or crash into body
function step() {
        intervalID = setInterval(() => { 
        clearHead();
        clearBody();
        popSnakeBody()

        if (direction == "up") { stepUp(); }
        else if (direction == "down") { stepDown(); }
        else if (direction == "left") { stepLeft(); }
        else if (direction == "right") { stepRight(); }

        snakeBody = snakeHead.concat(snakeBody);
        displaySnakeHead();
        gameEnd();
        displaySnakeBody();
        eatApple();
        
     }, speed);
}

function init() {
    displaySnakeHead();
    displaySnakeBody();
    keyPress();
    displayApple();
    step();
}
  
window.addEventListener('DOMContentLoaded', init);