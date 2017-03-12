//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!

var medallion1 = $("#medallion-1");
var medallion2 = $("#medallion-2");
var medallion3 = $("#medallion-3");
var medallion4 = $("#medallion-4");

var hitCount;

var scoreCounter = 0;

var medallionValue;

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!

// This function generates a random number between min/max
function randomNumber (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// This function will generate the point value for each image
function generateImagePoints() {
	medallion1.attr("data-medallionvalue", randomNumber(1, 12));
	medallion2.attr("data-medallionvalue", randomNumber(1, 12));
	medallion3.attr("data-medallionvalue", randomNumber(1, 12));
	medallion4.attr("data-medallionvalue", randomNumber(1, 12));
}

function generateHitCount() {
	hitCount = parseInt(randomNumber(19, 120));
	$("#hit-count").html(hitCount);
	console.log(hitCount);
}

function resetScoreCounter() {
	scoreCounter = 0;
	$("#score-counter").html(scoreCounter);
}

function generateNewScore() {
	$("#score-counter").html(scoreCounter);
}

// This function starts game on page load or on reset game button press.
function gameStart() {
	wins = 0;
	losses = 0;
	generateHitCount();
	generateImagePoints();
	resetScoreCounter();
}

// This function will start the new number to guess and new crystal
// counts over on game win/loss condition. Win/loss counts will show
// from previous round(s).
function resetGame() {
	generateHitCount();
	generateImagePoints();
	resetScoreCounter();
}

//---------------------------------------------------------------------------
// ACTUAL GAME BITS!

gameStart();

// Use this click function to add value to total.
$(".medallion-images").click(function() {
	// Adds data attribute to each image
	medallionValue = ($(this).attr("data-medallionvalue"));
	// Changes data attribute to an integer
	medallionValue = parseInt(medallionValue);
	// Console logs data attribute for testing
	console.log(medallionValue);
	scoreCounter += medallionValue;
	generateNewScore();
	console.log(scoreCounter);

	// If score matches target, you win!
	if (hitCount === scoreCounter) {
		alert("Woo!");
		wins++;
		resetGame();
	}

	// If score goes above target, you lose!
	else if (scoreCounter >= hitCount) {
		alert("Oh No! You've gone too far!");
		losses++;
		resetGame();
	}

// End of function -- do not delete!
});