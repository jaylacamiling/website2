const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const ball = document.createElement('div')
const scoreEL = document.getElementById('score')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 100
let LPaddleSpeed = 20
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

const ballRadius = 20
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

let score = 0 // Display the score and increase score by one every time it hits the paddle
let level = 1 //Display the level and increasse by one everytime the score increases by ten
// As levels increase, increase ball speed
// If ball gets past paddle, end game

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ){
        ballXDirection = ballXDirection * -1
    }

    if (ballXPosition - ballRadius <= 0) {
        document.getElementById("message").textContent = "Game Over!";
        return;
    }

}

createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w'){
        wKey = true
    }
    if (event.key == 's'){
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w'){
        wKey = false
    }
    if (event.key == 's'){
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0){
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()



document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        if (LPaddleYPosition < 0 ) {
            LPaddleYPosition = 0
        }
       else {
            LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
        }
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (event.key == 's') {
       if (LPaddleYPosition >= windowHeight - LPaddleHeight){
            LPaddlePosition = windowHeight - LPaddleHeight
        }
        else {
       LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
      }
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
 })

 function checkCollision(ball, paddle) {
    // Simple AABB collision detection
    if (
      ball.y + ball.radius >= paddle.y &&
      ball.y - ball.radius <= paddle.y + paddle.height &&
      ball.x + ball.radius >= paddle.x &&
      ball.x - ball.radius <= paddle.x + paddle.width
    ) {
      return true;
    }
    return false;
  }

  function checkCollision(ball, paddle) {
    // Simple AABB collision detection
    if (
      ball.y + ball.radius >= paddle.y &&
      ball.y - ball.radius <= paddle.y + paddle.height &&
      ball.x + ball.radius >= paddle.x &&
      ball.x - ball.radius <= paddle.x + paddle.width
    ) {
      return true;
    }
    return false;
  }
