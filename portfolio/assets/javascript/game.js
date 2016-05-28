$( document ).ready(function() {

	//-------------------------------------------------

	var matchNumber = 0;
	var totalNumber = 0;
	var redNumber	= 0;
	var blueNumber = 0;
	var yellownumber = 0;
	var whiteNumber = 0;
	var wins = 0;
	var losses = 0;

	$('#wins').html('Wins: ' + wins);
	$('#losses').html('Losses: ' + losses);

	console.log('in game.js');

	function random (){
		matchNumber = Math.floor(Math.random() *101 + 19);
		console.log(matchNumber);
		$('#random-number-box').html(matchNumber);
		blueNumber = Math.floor(Math.random() *12 + 1);
		console.log(blueNumber);
		redNumber = Math.floor(Math.random() *12 + 1);
		console.log(redNumber);
		yellowNumber = Math.floor(Math.random() *12 + 1);
		console.log(yellowNumber);
		whiteNumber = Math.floor(Math.random() *12 + 1);
		console.log(whiteNumber);
		totalNumber = 0;
		$('#total-score').html(totalNumber);

	}

	random();


	function checkWinOrLose() {
		if (totalNumber == matchNumber) {
			wins++;
			console.log('you win');
			$('#win-loss').html('You Win');
			$('#wins').html( 'Wins: ' + wins);
			//run code here to reset values
			random();
			totalNumber = 0;
		} else if (totalNumber > matchNumber) {
			losses++;
			$('#win-loss').html('You Lose')
			console.log('you lose');
			$('#losses').html( 'losses: ' + losses);
			random();
			totalNumber = 0;
		}		
	}


	$('#blue').on('click', function() {
		//all the code that should run when the blue uttoon is clicked;
		totalNumber = totalNumber + blueNumber;
		$('#total-score').html(totalNumber);
		checkWinOrLose();
	});	

	$('#red').on('click', function() {
		//all the code that should run when the red button is clicked;
		totalNumber = totalNumber + redNumber;
		$('#total-score').html(totalNumber);
		checkWinOrLose();
	});	


	$('#yellow').on('click', function() {
		//all the code that should run when the blue uttoon is clicked;
		totalNumber = totalNumber + yellowNumber;
		$('#total-score').html(totalNumber);
		checkWinOrLose();
	});	


	$('#white').on('click', function() {
		//all the code that should run when the blue uttoon is clicked;
		totalNumber = totalNumber + whiteNumber;
		$('#total-score').html(totalNumber);
		checkWinOrLose();
	});	

});

