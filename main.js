let playerScore = 0
let compScore = 0

// Computer choice

let computerPlay = () => {
  let arrOfChoices = ['rock', 'paper', 'scissors']
  let randomNum = Math.floor(Math.random() * arrOfChoices.length)
  return arrOfChoices[randomNum]
}

// One game round with possible combinations and score counting

let playerRound = (playerSelection, computerSelection) => {
  console.log('1 ', playerSelection, '2 ', computerSelection)
  if (playerSelection === computerSelection) {
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)
    return `You tied. You both picked ${playerSelection}`
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    compScore++
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)
    return 'You lost! Rock crushes scissors'
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)
    return 'You won! Scissors cuts paper'
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    compScore++
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)
    return 'You lost! Paper cover rock'
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)

    return 'You win! Rock crushes scissors'
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    compScore++
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)
    return 'You lost! Scissors cuts paper'
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++
    console.log('Player score ', playerScore)
    console.log('Comp score ', compScore)
    return 'You won! Paper cover rock'
  }
}

// Game 5 rounds

let game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelectionAny = prompt('Make your choice')
    let playerSelection = playerSelectionAny.toLowerCase()
    let computerSelection = computerPlay()
    playerRound(playerSelection, computerSelection)
  }
  if (playerScore > compScore) {
    return 'You beat the computer'
  } else if (playerScore < compScore) {
    return 'Computer beats you'
  } else {
    return 'You tied with computer'
  }
}

console.log(game())
