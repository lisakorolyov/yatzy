/*const DICE_SIDE_INDEX = 4;
const DICE_FILENAME_PREFIX = "./assets/dice";
const IMG_FILE_EXTENSION = ".png";
const SELECTED_KEYWORD = "selected";

function unSelectAllDice() {
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.src.includes(SELECTED_KEYWORD)) {
            position.src = DICE_FILENAME_PREFIX + diceSide + IMG_FILE_EXTENSION;
        }
    }
}

function OnOnesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 1) {
            count++;
        }
    }
    
    let headerCell = document.getElementById("onesHeader");
    document.getElementById("onesCell").textContent = count;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
}

function OnTwosClicked() {

}

function OnThreesClicked() {

}

function OnFoursClicked() {

}

function OnFivesClicked() {

}

function OnSixesClicked() {

}

function OnOnePairClicked() {

}

function OnTwoPairClicked() {

}

function OnThreeOfAKindClicked() {

}

function OnFourOfAKindClicked() {

}

function OnSmallStraightClicked() {

}

function OnLargeStraightClicked() {

}

function OnFullHouseClicked() {

}

function OnChanceClicked() {

}

function OnYatzyClicked() {

}*/