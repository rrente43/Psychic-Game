
alert("Guess what letter I'm thinking of!");

var items = ['q', 'w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

var wins = 0;
var losses = 0;
var guessesLeft = 9
var computerGuess = [];
var lettersGuessed = [];



// computer letter generator
 window.onload = function(){
    var compGuess= items[this.Math.floor(Math.random()*this.items.length)];
    computerGuess.push(compGuess);
    console.log(this.computerGuess[0]);
}

document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);

    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = items[Math.floor(Math.random() * items.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
        
    }
    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
    }
    
    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }
    


    var html = "<p>Guess what letter I'm thinking of</p>"+
              "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses left: " + guessesLeft + "</p>" +
              "<p>Your guesses so far: " + lettersGuessed + "</p>";
    //
// 

          document.querySelector("#game").innerHTML = html;
    
    }