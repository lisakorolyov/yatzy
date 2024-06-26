<?php
require_once('_config.php');

$dice = new Dice();

for ($i=1; $i<=5; $i++) {
	$roll = $dice->roll();
	$imgpath = "/assets/dice$roll.png";

	echo "<img src=\"$imgpath\" alt=\"$roll\" width=\"100px;\" style=\"margin: 5px;\">";
}

?>