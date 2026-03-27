// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set max attempts
let maxAttempts = 7;
let attemptsLeft = maxAttempts;

// Function to check user's guess
function checkGuess() {
    const userInput = document.getElementById("guessInput").value;
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    // Validate input
    if (userInput === "" || userInput < 1 || userInput > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100";
        return;
    }

    let guess = Number(userInput);
    attemptsLeft--;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        endGame();
    } 
    else if (guess > randomNumber) {
        message.textContent = "📉 Too high!";
    } 
    else {
        message.textContent = "📈 Too low!";
    }

    attempts.textContent = "Attempts left: " + attemptsLeft;

    // If no attempts left
    if (attemptsLeft === 0 && guess !== randomNumber) {
        message.textContent = "❌ Game Over! Number was " + randomNumber;
        endGame();
    }

    document.getElementById("guessInput").value = "";
}

// End game
function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
}

// Restart game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").disabled = false;
    document.querySelector("button").disabled = false;
    document.getElementById("restartBtn").style.display = "none";
}
