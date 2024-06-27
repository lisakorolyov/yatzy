<?php

global $rollNum;

global $pos1Roll;
global $pos2Roll;
global $pos3Roll;
global $pos4Roll;
global $pos5Roll;

global $pos1Keep;
global $pos2Keep;
global $pos3Keep;
global $pos4Keep;
global $pos5Keep;

global $dice;

function on_roll_click() {

	global $rollNum, $pos1Roll, $pos2Roll, $pos3Roll, $pos4Roll, $pos5Roll, $pos1Keep, $pos2Keep, $pos3Keep, $pos4Keep, $pos5Keep, $dice;

	$rollNum++;

	for ($i=1; $i<=5; $i++) 
	{
		$roll = $dice->roll();

		if ($i == 1) {
			$pos1Roll = $roll;
		}
		else if ($i == 2) {
			$pos2Roll = $roll;
		}
		else if ($i == 3) {
			$pos3Roll = $roll;
		}
		else if ($i == 4) {
			$pos4Roll = $roll;
		}
		else if ($i == 5) {
			$pos5Roll = $roll;
		}
	}
}

function initialize_dice() {

	global $rollNum, $pos1Roll, $pos2Roll, $pos3Roll, $pos4Roll, $pos5Roll, $pos1Keep, $pos2Keep, $pos3Keep, $pos4Keep, $pos5Keep, $dice;

	$dice = new Dice();
	$rollNum = 0;

	$pos1Roll = 1;
	$pos2Roll = 1;
	$pos3Roll = 1;
	$pos4Roll = 1;
	$pos5Roll = 1;

	$pos1Keep = false;
	$pos2Keep = false;
	$pos3Keep = false;
	$pos4Keep = false;
	$pos5Keep = false;
}
?>