// Number Guessing Game for Node.js
const readline = require('readline');

// Setup readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 3;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 10. You have 3 attempts!");

// Function to play the game
function playGame() {
    if (attempts > 0) {
        rl.question("Enter your guess: ", (input) => {
            const userGuess = parseInt(input, 10);

            if (userGuess === randomNumber) {
                console.log("Congratulations! You guessed the correct number!");
                rl.close();
            } else if (userGuess > randomNumber) {
                console.log("Too high! Try again.");
                attempts--;
                console.log(`Attempts left: ${attempts}`);
                playGame();
            } else if (userGuess < randomNumber) {
                console.log("Too low! Try again.");
                attempts--;
                console.log(`Attempts left: ${attempts}`);
                playGame();
            } else {
                console.log("Invalid input! Please enter a number.");
                playGame();
            }
        });
    } else {
        console.log(`Game over! The correct number was ${randomNumber}.`);
        rl.close();
    }
}

// Start the game
playGame();
