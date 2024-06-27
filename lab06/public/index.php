<?php
	require_once('_config.php');
	include "../app/models/Dice.php";
	include "../app/models/YatzyGame.php";
	include "../app/models/YatzyEngine.php";
?>

<html>

	<head>
		<title>PHP Yatzy</title>
	</head>

	<body>
		<button id="rollBtn">Roll</button><br><br>

		<div id="diceDiv">

		</div>

	<script type="text/javascript">
		var diceDiv = document.getElementById('diceDiv');

		window.onload = function () {

			<?php initialize_dice() ?>;

			var pos1Roll = <?php echo $pos1Roll ?>;	
			var pos2Roll = <?php echo $pos2Roll ?>;	
			var pos3Roll = <?php echo $pos3Roll ?>;	
			var pos4Roll = <?php echo $pos4Roll ?>;	
			var pos5Roll = <?php echo $pos5Roll ?>;	

			for (var i=0; i<5; i++) {
				var img = document.createElement('img');
				img.src = `/assets/dice${pos1Roll}.png`;
				img.alt = pos1Roll;
				img.width = "100";
				img.style = "margin: 5px";

				diceDiv.appendChild(img);
			}
		};

		document.getElementById('rollBtn').addEventListener('click', () => {
			window.reload();
			diceDiv.innerHTML = "";
			var x = "<?php on_roll_click() ?>";

			var pos1Roll = <?php echo $pos1Roll ?>;	
			var pos2Roll = <?php echo $pos2Roll ?>;	
			var pos3Roll = <?php echo $pos3Roll ?>;	
			var pos4Roll = <?php echo $pos4Roll ?>;	
			var pos5Roll = <?php echo $pos5Roll ?>;	

			for (var i=1; i<6; i++) {
				var img = document.createElement('img');
				img.width = "100";
				img.style = "margin: 5px";

				if (i == 1) {
					img.src = `/assets/dice${pos1Roll}.png`;
					img.alt = pos1Roll;
				}
				else if (i == 2) {
					img.src = `/assets/dice${pos2Roll}.png`;
					img.alt = pos2Roll;
				}
				else if (i == 3) {
					img.src = `/assets/dice${pos3Roll}.png`;
					img.alt = pos3Roll;
				}
				else if (i == 4) {
					img.src = `/assets/dice${pos4Roll}.png`;
					img.alt = pos4Roll;
				}
				else if (i == 5) {
					img.src = `/assets/dice${pos5Roll}.png`;
					img.alt = pos5Roll;
				}

				diceDiv.appendChild(img);
			}
		});
	</script>

	</body>

</html>
