/ Initialize your variables
var letters = ["a","b","c","d","e"];
var userGuess;
var randomLetter;
var wins = 0;
var losses = 0;
var guessesLeftInit = 5;
var guessesLeft = 0;    // Resets game upon start

// Select DOM elements by ID
var userGuessEl = document.getElementById('userGuess');
var winsEl = document.getElementById('wins');
var lossesEl = document.getElementById('losses');
var guessesLeftEl = document.getElementById('guessesLeft');


var resetGame = function() {
  // Resets stats
  guessesLeft = guessesLeftInit;

  // Updates corresponding elements
  userGuessEl.textContent = '';
  winsEl.textContent = wins;
  lossesEl.textContent = losses;
  guessesLeftEl.textContent = guessesLeft;
  console.log(guessesLeft);

  // Resets randomLetter
  pickLetter();
}

var pickLetter = function() {
  // Picks a random letter from array
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log("Random letter: " + randomLetter);
}

var userWins = function() {
  // Alerts if user won
  alert("YAY! YOU ARE PSYCHIC!");
  console.log("USER WINS");

  wins++;
  winsEl.textContent = wins;
  resetGame();
}

var userLoses = function() {
  // Alert if user loses
  alert("BOO! You are NOT psychic!");
  console.log("USER LOSES");

  losses++;
  lossesEl.textContent = losses;
  resetGame();
}

var userGuessed = function() {
  guessesLeft--;
  guessesLeftEl.textContent = guessesLeft;
  console.log("Guesses left: " + guessesLeft);
}

var userEnteredInvalidInput = function() {
  // Alert if invalid input
  alert("You didn't input a letter! Try again.");
}

var compareLetter = function() {



  // Waits for user input
  document.addEventListener('keypress', function(e) {

    // Checks if game is over
    if (guessesLeft == 0) {
      resetGame();
    }

    var alphabet = ["a", 
    "b", 
    "c", 
    "d", 
    "e", 
    "f", 
    "g", 
    "h", 
    "i", 
    "j", 
    "k", 
    "l", 
    "m", 
    "n", 
    "o", 
    "p", 
    "q", 
    "r", 
    "s", 
    "t", 
    "u", 
    "v", 
    "x", 
    "y", 
    "z"];
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;


var newLetter = function() {
    var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var userGuess = null;
    var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + 
        guessesSoFar + " Computer picked: " + letterToBeGuessed);
    
    document.onkeyup = function(event) {
    
    
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
        if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
            guessesSoFar[guessesSoFar.length] = userGuess;
            guessesLeft--;
        }
    
    
        if (letterToBeGuessed == userGuess) {
            wins++;
            console.log("You won!");
            guessesLeft = 9;
            guessesSoFar = [];
            letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
            console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " +
                guessesSoFar + " Computer picked: " + letterToBeGuessed);
        }
    
    
        if (guessesLeft == 0) {
            losses++;
            console.log("You lost!");
            guessesLeft = 9;
            guessesSoFar = [];
            letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
            console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " +
                guessesSoFar + " Computer picked: " + letterToBeGuessed);
        }
    
        var html = "<p><h1>The Psychic Game</h1></p>" + "<p>Guess what letter I'm thinking of?</h4></p>" + "<p>Wins: " +
            wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + guessesSoFar + "</p>";
    
        document.querySelector("#Game").innerHTML = html;
    }
    };
