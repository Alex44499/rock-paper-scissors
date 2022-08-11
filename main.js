// Buttons
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

// Score and result 
const result = document.querySelector('.result')
const userScore = document.querySelector('.player-score')
const pcScore = document.querySelector('.computer-score')

// All buttons at once for version 2 
const buttons = document.querySelectorAll('button')


let playerScore = 0
let compScore = 0

// Computer choice
let computerPlay = () => {
  let arrOfChoices = ['rock', 'paper', 'scissors']
  let randomNum = Math.floor(Math.random() * arrOfChoices.length)
  return arrOfChoices[randomNum]
}

// One game round with all combinations and score count

let playerRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    const p = document.createElement('p')
    p.innerText = `You tied. You both picked ${playerSelection}`
    result.append(p)
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    compScore++
    const p = document.createElement('p')
    p.innerText = 'You lost! Rock crushes scissors'
    result.append(p)
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++
    const p = document.createElement('p')
    p.innerText = 'You won! Scissors cuts paper'
    result.append(p)
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    compScore++
    const p = document.createElement('p')
    p.innerText = 'You lost! Paper cover rock'
    result.append(p)
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++
    const p = document.createElement('p')
    p.innerText = 'You win! Rock crushes scissors'
    result.append(p)
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    compScore++
    const p = document.createElement('p')
    p.innerText = 'You lost! Scissors cuts paper'
    result.append(p)
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++
    const p = document.createElement('p')
    p.innerText = 'You won! Paper cover rock'
    result.append(p)
  }
}


// Score update 
const updateScore = (playerScore, compScore) => {
  userScore.innerText = `${playerScore}`
  pcScore.innerText = `${compScore}`
}


// Winner check*(up to 5 wins)
const checkWinner = (playerScore, compScore) => {
  if (playerScore == 5) {
    const theWinner = document.createElement('h3')
    theWinner.innerText = `Wow You win. Your score ${playerScore} to computer score ${compScore}`
    updateScore(playerScore, compScore)
    result.append(theWinner)
  } else if (compScore == 5) {
    const theWinner = document.createElement('h3')
    theWinner.innerText = `Looser. Computer win. Computer score ${compScore} to Your score ${playerScore}`
    updateScore(playerScore, compScore)
    result.append(theWinner)
  }
}



// Version 2 
// Button response to user choice 
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = `${button.className}`
    playerRound(playerSelection, computerSelection)
    updateScore(playerScore, compScore)
    checkWinner(playerScore, compScore)
  })
})

// Version 1 

// rockButton.addEventListener('click', () => {
//   const computerSelection = computerPlay()
//   const playerSelection = 'rock'
//   playerRound(playerSelection, computerSelection)
//   updateScore(playerScore, compScore)
//   checkWinner(playerScore, compScore)
// })

// paperButton.addEventListener('click', () => {
//   const computerSelection = computerPlay()
//   const playerSelection = 'paper'
//   playerRound(playerSelection, computerSelection)
//   updateScore(playerScore, compScore)
//   checkWinner(playerScore, compScore)
// })

// scissorsButton.addEventListener('click', () => {
//   const computerSelection = computerPlay()
//   const playerSelection = 'scissors'
//   playerRound(playerSelection, computerSelection)
//   updateScore(playerScore, compScore)
//   checkWinner(playerScore, compScore)
// })
