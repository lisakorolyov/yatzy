const DICE_FILENAME_PREFIX = "./assets/dice";
const IMG_FILE_EXTENSION = ".png";
const SELECTED_KEYWORD = "selected";
const BONUS = 50;
const MIN_SUM_FOR_BONUS = 63;

let rolls = 0;
var sum = 0;
var bonus = 0;
var total = 0;
var occurrences = {};
var bonusApplied = false;

var rollBtn = document.getElementById("rollButton");
var sumCell = document.getElementById("sumCell");
var bonusCell = document.getElementById("bonusCell");
var totalCell = document.getElementById("totalCell");

function onKeepDiceClicked(element) {

    if (rolls == 3) {
        return;
    }

    let diceImgFileName = element.src;
    let diceSide = element.alt;

    if (diceImgFileName.includes(SELECTED_KEYWORD)) { // un-keep
        element.src = DICE_FILENAME_PREFIX + diceSide + IMG_FILE_EXTENSION;
    }
    else if (rolls != 0) { // keep
        element.src = DICE_FILENAME_PREFIX + diceSide + SELECTED_KEYWORD + IMG_FILE_EXTENSION;
    }

    let allSelected = true;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (!position.src.includes(SELECTED_KEYWORD)) {
            allSelected = false;
        }
    }

    if (allSelected) {
        rollBtn.disabled = true;
    }
    else if (rollBtn.disabled) {
        rollBtn.disabled = false;
    }
}

function onNewGameClicked() {
    window.location.reload();
} 

function unSelectAllDice() {
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.src.includes(SELECTED_KEYWORD)) {
            position.src = DICE_FILENAME_PREFIX + position.alt + IMG_FILE_EXTENSION;
        }
    }
}

function resetRolls() {
    rolls = 0;
    document.getElementById('turnCounter').textContent = 0;
    rollBtn.disabled = false;
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

    let result = count;
    sum += result;

    if (sum >= MIN_SUM_FOR_BONUS && !bonusApplied) {
        bonus = BONUS;
        bonusCell.textContent = BONUS;
        total += bonus;
        bonusApplied = true;
    }
    sumCell.textContent = sum;
    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("onesHeader");
    document.getElementById("onesCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnTwosClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 2) {
            count++;
        }
    }

    let result = count * 2;
    sum += result;

    if (sum >= MIN_SUM_FOR_BONUS && !bonusApplied) {
        bonus = BONUS;
        bonusCell.textContent = BONUS;
        total += bonus;
        bonusApplied = true;
    }
    sumCell.textContent = sum;
    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("twosHeader");
    document.getElementById("twosCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnThreesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 3) {
            count++;
        }
    }

    let result = count * 3;
    sum += result;

    if (sum >= MIN_SUM_FOR_BONUS && !bonusApplied) {
        bonus = BONUS;
        bonusCell.textContent = BONUS;
        total += bonus;
        bonusApplied = true;
    }
    sumCell.textContent = sum;
    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("threesHeader");
    document.getElementById("threesCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnFoursClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 4) {
            count++;
        }
    }

    let result = count * 4;
    sum += result;

    if (sum >= MIN_SUM_FOR_BONUS && !bonusApplied) {
        bonus = BONUS;
        bonusCell.textContent = BONUS;
        total += bonus;
        bonusApplied = true;
    }
    sumCell.textContent = sum;
    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("foursHeader");
    document.getElementById("foursCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnFivesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 5) {
            count++;
        }
    }

    let result = count * 5;
    sum += result;

    if (sum >= MIN_SUM_FOR_BONUS && !bonusApplied) {
        bonus = BONUS;
        bonusCell.textContent = BONUS;
        total += bonus;
        bonusApplied = true;
    }
    sumCell.textContent = sum;
    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("fivesHeader");
    document.getElementById("fivesCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnSixesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 6) {
            count++;
        }
    }

    let result = count * 6;
    sum += result;

    if (sum >= MIN_SUM_FOR_BONUS && !bonusApplied) {
        bonus = BONUS;
        bonusCell.textContent = BONUS;
        total += bonus;
        bonusApplied = true;
    }
    sumCell.textContent = sum;
    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("sixesHeader");
    document.getElementById("sixesCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function countOccurrences() {
    occurrences = {};
    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    diceRolls.forEach(i => {
        if (occurrences[i]) {
            occurrences[i]++;
        }
        else {
            occurrences[i] = 1;
        }
    });
}

function OnOnePairClicked() {
    unSelectAllDice();
    countOccurrences();

    let resultKey = -1;

    for (let key in occurrences) {
        if (occurrences[key] >= 2 && parseInt(key) > resultKey) {
            resultKey = key;
        }
    }

    let result = 0;
    if (resultKey != -1) {
        result = 2 * parseInt(resultKey);
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("onePairHeader");
    document.getElementById("onePairCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnTwoPairClicked() {
    unSelectAllDice();
    countOccurrences();

    let resultKeys = [];

    for (let key in occurrences) {
        if (occurrences[key] >= 2) {
            resultKeys.push(key);
        }
    }
    let result = 0;
    if (resultKeys.length == 2) {
        result = (2 * parseInt(resultKeys[0])) + (2 * parseInt(resultKeys[1]));
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("twoPairHeader");
    document.getElementById("twoPairCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnThreeOfAKindClicked() {
    unSelectAllDice();
    countOccurrences();

    let resultKey = -1;

    for (let key in occurrences) {
        if (occurrences[key] >= 3 && parseInt(key) > resultKey) {
            resultKey = key;
        }
    }

    let result = 0;
    if (resultKey != -1) {
        result = 3 * parseInt(resultKey);
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("threeOfAKindHeader");
    document.getElementById("threeOfAKindCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnFourOfAKindClicked() {
    unSelectAllDice();
    countOccurrences();

    let resultKey = -1;

    for (let key in occurrences) {
        if (occurrences[key] >= 4 && parseInt(key) > resultKey) {
            resultKey = key;
        }
    }

    let result = 0;
    if (resultKey != -1) {
        result = 4 * parseInt(resultKey);
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("fourOfAKindHeader");
    document.getElementById("fourOfAKindCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnSmallStraightClicked() {
    unSelectAllDice();
    countOccurrences();

    let result = 0;
    if ("1" in occurrences 
        && "2" in occurrences
        && "3" in occurrences
        && "4" in occurrences
        && "5" in occurrences
    ) {
        result = 15;
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("smallStraightHeader");
    document.getElementById("smallStraightCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnLargeStraightClicked() {
    unSelectAllDice();
    countOccurrences();

    let result = 0;
    if ("2" in occurrences 
        && "3" in occurrences
        && "4" in occurrences
        && "5" in occurrences
        && "6" in occurrences
    ) {
        result = 20;
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("largeStraightHeader");
    document.getElementById("largeStraightCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnFullHouseClicked() {
    unSelectAllDice();
    countOccurrences();

    let result = 0;

    if (occurrences.length == 2) {
        for (let key in occurrences) {
            if (occurrences[key] == 3) {
                result += (parseInt(key) * occurrences[key])
            }
            else if (occurrences[key] == 2) {
                result += (parseInt(key) * occurrences[key])
            }
        }
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("fullHouseHeader");
    document.getElementById("fullHouseCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnChanceClicked() {
    unSelectAllDice();
    countOccurrences();


    let result = 0;

    for (let key in occurrences) {
        result += parseInt(key) * occurrences[key];
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("chanceHeader");
    document.getElementById("chanceCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}

function OnYatzyClicked() {
    unSelectAllDice();
    countOccurrences();

    let result = 0;

    if (occurrences.length == 1) {
        result = 50;
    }

    total += result;
    totalCell.textContent = total;
    
    let headerCell = document.getElementById("yatzyHeader");
    document.getElementById("yatzyCell").textContent = result;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    resetRolls();
}