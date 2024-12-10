// // const cards = document.querySelectorAll(".memory-card");

// // let hasFlippedCard = false;
// // let lockBoard = false;
// // let firstCard, secondCard;

// // function flipCard() {
// //   if (lockBoard) return;
// //   if (this === firstCard) return;
// //   this.classList.add("flip");

// //   if (!hasFlippedCard) {
// //     // first click

// //     hasFlippedCard = true;
// //     firstCard = this;
// //   } else {
// //     // second click
// //     secondCard = this;

// //     checkForMatch();
// //   }

// //   function checkForMatch() {
// //     // do cards match?
// //     if (firstCard.dataset.framework === secondCard.dataset.framework) {
// //       // it's a match
// //       disableCards();
// //     } else {
// //       unflippedCards();
// //     }
// //   }

// //   function disableCards() {
// //     // it's a match
// //     firstCard.removeEventListener("click", flipCard);
// //     secondCard.removeEventListener("click", flipCard);

// //     resetBoard();
// //   }

// //   function unflippedCards() {
// //     lockBoard = true;

// //     setTimeout(() => {
// //       firstCard.classList.remove("flip");
// //       secondCard.classList.remove("flip");

// //       resetBoard();
// //     }, 1500);
// //   }

// //   function resetBoard() {
// //     [hasFlippedCard, lockBoard] = [false, false];
// //     [firstCard, secondCard] = [null, null];
// //   }

// //   (function shuffle() {
// //     cards.forEach((card) => {
// //       let randomPos = Math.floor(Math.random() * 12);
// //       card.style.order = randomPos;
// //     });
// //   })();
// // }

// // cards.forEach((card) => card.addEventListener("click", flipCard));
// const cards = document.querySelectorAll(".memory-card");

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add("flip");

//   if (!hasFlippedCard) {
//     // first click
//     hasFlippedCard = true;
//     firstCard = this;

//     return;
//   }

//   // second click
//   secondCard = this;

//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener("click", flipCard);
//   secondCard.removeEventListener("click", flipCard);

//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");

//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// (function shuffle() {
//   cards.forEach((card) => {
//     let randomPos = Math.floor(Math.random() * 12);
//     card.style.order = randomPos;
//   });
// })();

// cards.forEach((card) => card.addEventListener("click", flipCard));

// const gameInfo = document.getElementById("game-info");
// const gameBoard = document.getElementById("game-board");
// const gameStatus = document.getElementById("game-status");
// const startButton = document.getElementById("start-button");
// const retryButton = document.getElementById("retry-button");
// const nextButton = document.getElementById("next-button");
// const exitButton = document.getElementById("exit-button");
// const timerDisplay = document.getElementById("time");
// const levelTitle = document.getElementById("level-title");
// const statusTitle = document.getElementById("status-title");
// const scoreSummary = document.getElementById("score-summary");

// let timer;
// let timeRemaining;
// let score = 0;
// let targetScore = 150;
// let currentLevel = 1;

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;
// let matchedPairs = 0;

// const cards = document.querySelectorAll(".memory-card");

// function initializeGame(level) {
//   currentLevel = level;
//   score = 0;
//   matchedPairs = 0;
//   timeRemaining = level === 1 ? 120 : 60;
//   targetScore = level === 1 ? 150 : 300;

//   levelTitle.textContent = `Level ${level} - (Match the Tiles)`;
//   timerDisplay.textContent = timeRemaining;

//   gameInfo.classList.remove("hidden");
//   gameBoard.classList.add("hidden");
//   gameStatus.classList.add("hidden");

//   resetBoard();
//   shuffleCards();
// }

// function startGame() {
//   gameInfo.classList.add("hidden");
//   gameBoard.classList.remove("hidden");

//   startTimer();
//   cards.forEach((card) => card.addEventListener("click", flipCard));
// }

// function startTimer() {
//   timer = setInterval(() => {
//     timeRemaining--;
//     timerDisplay.textContent = timeRemaining;

//     if (timeRemaining <= 0) {
//       clearInterval(timer);
//       endGame(false);
//     }
//   }, 1000);
// }

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add("flip");

//   if (!hasFlippedCard) {
//     // First card clicked
//     hasFlippedCard = true;
//     firstCard = this;
//     return;
//   }

//   // Second card clicked
//   secondCard = this;
//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

//   isMatch ? handleMatch() : unflipCards();
// }

// function handleMatch() {
//   firstCard.removeEventListener("click", flipCard);
//   secondCard.removeEventListener("click", flipCard);

//   matchedPairs++;
//   score += 50;

//   if (matchedPairs === 6) {
//     clearInterval(timer);
//     endGame(true);
//   }

//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");

//     resetBoard();
//   }, 1000);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// function shuffleCards() {
//   cards.forEach((card) => {
//     let randomPos = Math.floor(Math.random() * 12);
//     card.style.order = randomPos;
//   });

//   cards.forEach((card) => card.classList.remove("flip")); // Reset card flips
// }

// function endGame(win) {
//   clearInterval(timer);
//   gameBoard.classList.add("hidden");
//   gameStatus.classList.remove("hidden");

//   if (win) {
//     statusTitle.textContent = "Level Complete!";
//     scoreSummary.textContent = `You scored ${score} points. Total score: ${score}`;
//     nextButton.classList.remove("hidden");
//     retryButton.classList.add("hidden");
//   } else {
//     statusTitle.textContent = "Level Incomplete";
//     scoreSummary.textContent = "";
//     nextButton.classList.add("hidden");
//     retryButton.classList.remove("hidden");
//   }
// }

// // Event Listeners
// startButton.addEventListener("click", startGame);
// retryButton.addEventListener("click", () => initializeGame(currentLevel));
// nextButton.addEventListener("click", () => initializeGame(currentLevel + 1));
// exitButton.addEventListener("click", () => alert("Thanks for playing!"));

// // Initialize Game
// initializeGame(1);

const gameInfo = document.getElementById("game-info");
const gameBoard = document.getElementById("game-board");
const gameStatus = document.getElementById("game-status");
const startButton = document.getElementById("start-button");
const retryButton = document.getElementById("retry-button");
const nextButton = document.getElementById("next-button");
const exitButton = document.getElementById("exit-button");
const timerDisplay = document.getElementById("time");
const levelTitle = document.getElementById("level-title");
const statusTitle = document.getElementById("status-title");
const scoreSummary = document.getElementById("score-summary");

let timer;
let timeRemaining;
let score = 0;
let totalScore = 0;
let targetScore = 150;
let currentLevel = 1;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

const cards = document.querySelectorAll(".memory-card");

function initializeGame(level) {
  currentLevel = level;
  score = 0;
  matchedPairs = 0;
  timeRemaining = level === 1 ? 120 : 60;
  targetScore = level === 1 ? 150 : 300;

  levelTitle.textContent = `Level ${level} - (Match the Tiles)`;
  timerDisplay.textContent = timeRemaining;

  gameInfo.classList.remove("hidden");
  gameBoard.classList.add("hidden");
  gameStatus.classList.add("hidden");

  resetBoard();
  shuffleCards();
}

function startGame() {
  gameInfo.classList.add("hidden");
  gameBoard.classList.remove("hidden");

  startTimer();
  cards.forEach((card) => card.addEventListener("click", flipCard));
}

function startTimer() {
  timer = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      endGame(false);
    }
  }, 1000);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // First card clicked
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // Second card clicked
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? handleMatch() : unflipCards();
}

function handleMatch() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  matchedPairs++;
  score += 50;

  if (matchedPairs === 6) {
    clearInterval(timer);
    endGame(true);
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffleCards() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });

  cards.forEach((card) => card.classList.remove("flip")); // Reset card flips
}

function endGame(win) {
  clearInterval(timer);
  gameBoard.classList.add("hidden");
  gameStatus.classList.remove("hidden");

  if (win) {
    totalScore += score;
    statusTitle.textContent = `Level ${currentLevel} Complete!`;
    scoreSummary.textContent = `You scored ${score} points. Total score: ${totalScore}.`;

    if (currentLevel === 2) {
      nextButton.classList.add("hidden");
      retryButton.textContent = "Restart Level 1";
      retryButton.classList.remove("hidden");
      exitButton.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
      retryButton.classList.add("hidden");
    }
  } else {
    statusTitle.textContent = "Level Incomplete";
    scoreSummary.textContent = "";
    nextButton.classList.add("hidden");
    retryButton.textContent = "Try Again";
    retryButton.classList.remove("hidden");
  }
}

// Event Listeners
startButton.addEventListener("click", startGame);
retryButton.addEventListener("click", () => {
  if (currentLevel === 2 && retryButton.textContent === "Restart Level 1") {
    initializeGame(1); // Restart Level 1
  } else {
    initializeGame(currentLevel); // Retry current level
  }
});
nextButton.addEventListener("click", () => initializeGame(currentLevel + 1));
exitButton.addEventListener("click", () => alert("Thanks for playing!"));

// Initialize Game
initializeGame(1);
