let userScore = 0;
let compScore = 0;
let roundsPlayed = 0;

const totalRounds = parseInt(localStorage.getItem('rounds')) || 5; // Default to 5 rounds
const username = localStorage.getItem('username') || "Player";

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Update message with player info
document.querySelector("h1").innerText = `Welcome, ${username}! Rock Paper Scissors`;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const endGame = () => {
    const finalMsg = document.createElement("div");
    finalMsg.classList.add("final-msg");
    if (userScore > compScore) {
        finalMsg.innerText = `${username} wins! Final Score: ${userScore} - ${compScore}`;
        finalMsg.style.color = "green";
    } else if (userScore < compScore) {
        finalMsg.innerText = `Computer wins! Final Score: ${compScore} - ${userScore}`;
        finalMsg.style.color = "red";
    } else {
        finalMsg.innerText = `It's a draw! Final Score: ${userScore} - ${compScore}`;
        finalMsg.style.color = "blue";
    }
    document.body.appendChild(finalMsg);

    // Disable further clicks
    choices.forEach((choice) => {
        choice.style.pointerEvents = "none";
    });
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    roundsPlayed++;

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

    if (roundsPlayed >= totalRounds) {
        endGame();
    }
};

// Add event listeners to choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
