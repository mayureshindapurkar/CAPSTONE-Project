
var attempts = 0;

var randomNumber = Math.random()*100;
var secretNumber = Math.floor(randomNumber)+1;

function guessingGame() {

				
				var guess = prompt("Enter a number between 1 to 100");

				if (parseInt(guess) == secretNumber) {
		alert("Congrats you found it!!!!");
		return true;
				} else if (guess < secretNumber) {
		alert("Oh you missed it :( \n Your guess is too small \n Try again");
		attempts++;
		console.log("Number of attempts:" + attempts);
		guessingGame();
				} else if (guess > secretNumber) {
		alert("Oh you missed it :( \n Your guess is too large  \n Try again");
		attempts++;
		console.log("Number of attempts:" + attempts);
		guessingGame();
				}
}
