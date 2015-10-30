
var attempts = 0;

function guessingGame() {

				var secretNumber = 44;
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
