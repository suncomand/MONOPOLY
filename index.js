var _a;
var gameBoardArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11,
    34, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12,
    33, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13,
    32, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14,
    31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15,
    30, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16,
    29, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17,
    28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18
];
var currentPlayerIndex = 0;
var players = [
    { name: "Player 1", position: 0, color: "black", element: null, score: 1000 },
    { name: "Player 2", position: 0, color: "red", element: null, score: 1000 }
];
/////CARDS interface info///////////////////
var cards = [
    { name: "GO", type: "special", description: "Collect $200 when you pass." },
    { name: "Mediterranean Avenue", type: "property", color: "brown", price: 60, rent: [2, 10, 30, 90, 160, 250], houseCost: 50, hotelCost: 50 },
    { name: "Community Chest", type: "special", description: "Draw a Community Chest card." },
    { name: "Baltic Avenue", type: "property", color: "brown", price: 60, rent: [4, 20, 60, 180, 320, 450], houseCost: 50, hotelCost: 50 },
    { name: "Income Tax", type: "tax", amount: 200 },
    { name: "Reading Railroad", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { name: "Oriental Avenue", type: "property", color: "light blue", price: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50 },
    { name: "Chance", type: "special", description: "Draw a Chance card." },
    { name: "Vermont Avenue", type: "property", color: "light blue", price: 100, rent: [6, 30, 90, 270, 400, 550], houseCost: 50, hotelCost: 50 },
    { name: "Connecticut Avenue", type: "property", color: "light blue", price: 120, rent: [8, 40, 100, 300, 450, 600], houseCost: 50, hotelCost: 50 },
    { name: "Jail", type: "special", description: "Just visiting or in jail." },
    { name: "St. Charles Place", type: "property", color: "pink", price: 140, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, hotelCost: 100 },
    { name: "Electric Company", type: "utility", price: 150, rentMultiplier: [4, 10] },
    { name: "States Avenue", type: "property", color: "pink", price: 140, rent: [10, 50, 150, 450, 625, 750], houseCost: 100, hotelCost: 100 },
    { name: "Virginia Avenue", type: "property", color: "pink", price: 160, rent: [12, 60, 180, 500, 700, 900], houseCost: 100, hotelCost: 100 },
    { name: "St. James Place", type: "property", color: "orange", price: 180, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, hotelCost: 100 },
    { name: "Tennessee Avenue", type: "property", color: "orange", price: 180, rent: [14, 70, 200, 550, 750, 950], houseCost: 100, hotelCost: 100 },
    { name: "New York Avenue", type: "property", color: "orange", price: 200, rent: [16, 80, 220, 600, 800, 1000], houseCost: 100, hotelCost: 100 },
    { name: "Free Parking", type: "special", description: "No action." },
    { name: "Kentucky Avenue", type: "property", color: "red", price: 220, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, hotelCost: 150 },
    { name: "Indiana Avenue", type: "property", color: "red", price: 220, rent: [18, 90, 250, 700, 875, 1050], houseCost: 150, hotelCost: 150 },
    { name: "Illinois Avenue", type: "property", color: "red", price: 240, rent: [20, 100, 300, 750, 925, 1100], houseCost: 150, hotelCost: 150 },
    { name: "B&O Railroad", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { name: "Atlantic Avenue", type: "property", color: "yellow", price: 260, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, hotelCost: 150 },
    { name: "Ventnor Avenue", type: "property", color: "yellow", price: 260, rent: [22, 110, 330, 800, 975, 1150], houseCost: 150, hotelCost: 150 },
    { name: "Water Works", type: "utility", price: 150, rentMultiplier: [4, 10] },
    { name: "Marvin Gardens", type: "property", color: "yellow", price: 280, rent: [24, 120, 360, 850, 1025, 1200], houseCost: 150, hotelCost: 150 },
    { name: "Short Line", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { name: "Go to Jail", type: "special", description: "Move directly to Jail. Do not pass GO, do not collect $200." },
    { name: "Pacific Avenue", type: "property", color: "green", price: 300, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, hotelCost: 200 },
    { name: "North Carolina Avenue", type: "property", color: "green", price: 300, rent: [26, 130, 390, 900, 1100, 1275], houseCost: 200, hotelCost: 200 },
    { name: "Pennsylvania Avenue", type: "property", color: "green", price: 320, rent: [28, 150, 450, 1000, 1200, 1400], houseCost: 200, hotelCost: 200 },
    { name: "Short Line", type: "railroad", price: 200, rent: [25, 50, 100, 200] },
    { name: "Park Place", type: "property", color: "dark blue", price: 350, rent: [35, 175, 500, 1100, 1300, 1500], houseCost: 200, hotelCost: 200 },
    { name: "Luxury Tax", type: "tax", amount: 100 },
    { name: "Boardwalk", type: "property", color: "dark blue", price: 400, rent: [50, 200, 600, 1400, 1700, 2000], houseCost: 200, hotelCost: 200 },
    { name: "Pennsylvania Avenue", type: "property", color: "green", price: 320, rent: [28, 150, 450, 1000, 1200, 1400], houseCost: 200, hotelCost: 200 },
];
///////LAYOUT//////////////
var gameBoard = document.getElementById("gameBoard");
gameBoardArr.forEach(function (boxId, index) {
    var box = document.createElement("div");
    box.classList.add("box");
    ///////INDIVIDUAL CARDS///////////////
    if (boxId === -1) {
        box.classList.add("empty");
    }
    else {
        var card_1 = cards[boxId];
        box.classList.add(card_1.type);
        box.innerHTML = "<strong>".concat(card_1.name, "<br>").concat(card_1.price ? "$" + card_1.price : "", "</strong>");
        if (card_1.color)
            box.style.backgroundColor = card_1.color;
        if (card_1.type === "property" && card_1.price) {
            var buyButton = document.createElement("button");
            buyButton.textContent = "Buy";
            buyButton.classList.add("buyButton");
            card_1.buyButton = buyButton;
            buyButton.addEventListener("click", function () { return handleBuyProperty(card_1, index); });
            box.appendChild(buyButton);
        }
    }
    gameBoard.appendChild(box);
});
///////BUY LOGIC////////////
function handleBuyProperty(card, index) {
    var currentPlayer = players[currentPlayerIndex];
    if (card.price && currentPlayer.score >= card.price) {
        currentPlayer.score -= card.price;
        card.owner = currentPlayer.name;
        document.getElementById('player1Score').innerText = "Player 1's Score: $".concat(players[0].score);
        document.getElementById('player2Score').innerText = "Player 2's Score: $".concat(players[1].score);
        var box = document.querySelectorAll('.box')[index];
        box.innerHTML = "<strong>".concat(card.name, "<br>").concat(card.price ? "$" + card.price : "", "</strong><br>Owned by: ").concat(card.owner);
        if (card.buyButton) {
            card.buyButton.disabled = true;
            card.buyButton.textContent = "Purchased";
        }
        alert("".concat(currentPlayer.name, " bought ").concat(card.name, " for $").concat(card.price));
    }
    else {
        alert("".concat(currentPlayer.name, " cannot afford ").concat(card.name));
    }
}
////LAYOUT FROM O - 35 ////////////
var validPositions = gameBoardArr.slice(0, 36).map(function (boxId, index) { return boxId !== -1 ? index : -1; }).filter(function (index) { return index !== -1; });
//////ROLL DICE///////////////////
function rollDice() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    var currentPlayer = players[currentPlayerIndex];
    ////CALCULATE POSITION////////////
    var currentValidPositionIndex = validPositions.indexOf(currentPlayer.position);
    var newPositionIndex = (currentValidPositionIndex + diceRoll) % validPositions.length;
    //////NEW POSITION//////////
    var newPosition = validPositions[newPositionIndex];
    currentPlayer.position = newPosition;
    // Update the position of the player on the board
    updatePlayerPosition();
    // Display the dice roll result and the current position of the player
    document.getElementById('diceResult').innerText = "".concat(currentPlayer.name, " rolled a ").concat(diceRoll, " and is now on position ").concat(currentPlayer.position);
    // Switch to the next player
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    // Update the turn indicator
    document.getElementById('turnIndicator').innerText = "".concat(players[currentPlayerIndex].name, "'s Turn");
}
// Update the players' positions on the board
function updatePlayerPosition() {
    // Clear previous player positions
    document.querySelectorAll('.player').forEach(function (playerElement) { return playerElement.remove(); });
    players.forEach(function (player) {
        var playerBox = document.querySelectorAll('.box')[player.position];
        var playerElement = document.createElement('div');
        playerElement.classList.add('player');
        playerElement.style.backgroundColor = player.color;
        playerBox.appendChild(playerElement);
        player.element = playerElement;
    });
    // Update positions display
    document.getElementById('player1Position').innerText = "Player 1's Position: ".concat(players[0].position);
    document.getElementById('player2Position').innerText = "Player 2's Position: ".concat(players[1].position);
}
// Event listener for dice roll button
(_a = document.getElementById('rollDiceButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', rollDice);
