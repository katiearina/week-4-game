//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!

// Set variables for each medallion (total of 4)
var medallion1 = $("#medallion-1");
var medallion2 = $("#medallion-2");
var medallion3 = $("#medallion-3");
var medallion4 = $("#medallion-4");

// Set variable for target point count
var hitCount;

// Set player score at start
var scoreCounter = 0;

// Set variable for medallion points
var medallionValue;

// Set variable for winSound
// Tried to link file locally ("../sounds/WW_Get_Item.wav")
// and it wouldn't work -- any thoughts?
var winSound = new Audio("https://katiearina.github.io/week-4-game/assets/sounds/WW_Get_Item.wav");

// Set variable for loseSound
// Tried to link file locally ("../sounds/OOT_DekuNut_Freeze.wav")
// and it wouldn't work -- any thoughts?
var loseSound = new Audio("https://katiearina.github.io/week-4-game/assets/sounds/OOT_DekuNut_Freeze.wav");

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

// This function generates a random number between min/max
function randomNumber (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// This function will generate the random point value for each medallion image
function generateImagePoints() {
	medallion1.attr("data-medallionvalue", randomNumber(1, 12));
	medallion2.attr("data-medallionvalue", randomNumber(1, 12));
	medallion3.attr("data-medallionvalue", randomNumber(1, 12));
	medallion4.attr("data-medallionvalue", randomNumber(1, 12));
}

// This function generates random number target
function generateHitCount() {
	hitCount = parseInt(randomNumber(19, 120));
	$("#hit-count").html(hitCount);
	console.log(hitCount);
}

// Resets player score to 0
function resetScoreCounter() {
	scoreCounter = 0;
	$("#score-counter").html(scoreCounter);
}

// Writes player score to page
function generateNewScore() {
	$("#score-counter").html(scoreCounter);
}

// Writes win count to page
function writeWins() {
	$("#win-count").html(wins);
}

// Plays win sound
function playWinSound() {
	winSound.play();
}

// Writes loss count to page
function writeLosses() {
	$("#loss-count").html(losses);
}

// Plays loss sound
function playLoseSound() {
	loseSound.play();
}

// Writes instructions to header
function writeStartText() {
	$("#title-section").html("<h2>Legend of Zelda Medallion Collector Game!</h2> <h4>Click any Medallion to Start!</h4>");
}

// Writes regular game text to header
function writeRegularText() {
	$("#title-section").html("<h2>Legend of Zelda</h2> <h4>Medallion Collector Game!</h4>");
}

// This function starts game over completely
function gameStart() {
	wins = 0;
	losses = 0;
	writeStartText();
	writeWins();
	writeLosses();
	generateHitCount();
	generateImagePoints();
	resetScoreCounter();
}

// This function will start the new number to guess and new crystal
// counts over on game win/loss condition. Win/loss counts will show
// from previous round(s).
function resetGame() {
	writeStartText();
	generateHitCount();
	generateImagePoints();
	resetScoreCounter();
}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!

// Starts game on page load
gameStart();

// On click of any medallion image
$(".medallion-images").click(function() {

	// Adds data attribute to each image
	medallionValue = ($(this).attr("data-medallionvalue"));

	// Changes data attribute to an integer
	medallionValue = parseInt(medallionValue);

	// Adds medallion value to score
	scoreCounter += medallionValue;

	// Writes new player score to page
	generateNewScore();

	// Writes regular text to header
	writeRegularText();

		// If score matches target, you win!
		if (hitCount === scoreCounter) {
			wins++;
			writeWins();
			playWinSound();
			resetGame();
		}

		// If score goes above target, you lose!
		else if (scoreCounter >= hitCount) {
			losses++;
			writeLosses();
			playLoseSound();
			resetGame();
		}

// End of function -- do not delete!
});