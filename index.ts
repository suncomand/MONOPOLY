interface MonopolyCard {
    name: string
    type: string
    color?: string
    price?: number
    rent?: number[]
    houseCost?: number
    hotelCost?: number
    description?: string
    amount?: number
    rentMultiplier?: number[]
    owner?: string
    buyButton?: HTMLButtonElement
}

const gameBoardArr = [
    0, 1, 2, 3,  4, 5, 6, 7, 8, 9, 10,
    35, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11,
    34, -1, -1, -1, -1, -1, -1, -1, -1, -1, 12,
    33, -1, -1, -1, -1, -1, -1, -1, -1, -1, 13,
    32, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14,
    31, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15,
    30, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16,
    29, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17,
    28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18
]


let currentPlayerIndex = 0
let players = [
    { name: "Player 1", position: 0, color: "black", element: null as HTMLDivElement | null ,  score: 1000},
    { name: "Player 2", position: 0, color: "red", element: null as HTMLDivElement | null,  score: 1000 }
]

/////CARDS interface info///////////////////


const cards: MonopolyCard[] = [
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
]


///////LAYOUT//////////////
const gameBoard = document.getElementById("gameBoard")

gameBoardArr.forEach((boxId, index) => {
    const box = document.createElement("div")
    box.classList.add("box")

///////INDIVIDUAL CARDS///////////////

    if (boxId === -1) {
        box.classList.add("empty")
    } else {
        const card = cards[boxId]
        box.classList.add(card.type)
        box.innerHTML = `<strong>${card.name}<br>${card.price ? "$" + card.price : ""}</strong>`
        if (card.color) box.style.backgroundColor = card.color

        if (card.type === "property" && card.price) {
            const buyButton = document.createElement("button")
            buyButton.textContent = "Buy"
            buyButton.classList.add("buyButton")
            card.buyButton = buyButton

            buyButton.addEventListener("click", () => handleBuyProperty(card, index))
            box.appendChild(buyButton)
        }
    }

    gameBoard.appendChild(box)
})

///////BUY LOGIC////////////

function handleBuyProperty(card: MonopolyCard, index: number) {
    const currentPlayer = players[currentPlayerIndex]

    if (card.price && currentPlayer.score >= card.price) {
        currentPlayer.score -= card.price
        card.owner = currentPlayer.name

        document.getElementById('player1Score')!.innerText = `Player 1's Score: $${players[0].score}`
        document.getElementById('player2Score')!.innerText = `Player 2's Score: $${players[1].score}`

        const box = document.querySelectorAll('.box')[index]
        box.innerHTML = `<strong>${card.name}<br>${card.price ? "$" + card.price : ""}</strong><br>Owned by: ${card.owner}`

        if (card.buyButton) {
            card.buyButton.disabled = true
            card.buyButton.textContent = "Purchased"
        }
        alert(`${currentPlayer.name} bought ${card.name} for $${card.price}`)
    } else {
        alert(`${currentPlayer.name} cannot afford ${card.name}`)
    }
}


////LAYOUT FROM O - 35 ////////////
const validPositions = gameBoardArr.slice(0, 36).map((boxId, index) => boxId !== -1 ? index : -1).filter(index => index !== -1)

//////ROLL DICE///////////////////

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1
    const currentPlayer = players[currentPlayerIndex]

    ////CALCULATE POSITION////////////
    let currentValidPositionIndex = validPositions.indexOf(currentPlayer.position)
    let newPositionIndex = (currentValidPositionIndex + diceRoll) % validPositions.length

    //////NEW POSITION//////////
    let newPosition = validPositions[newPositionIndex]

    currentPlayer.position = newPosition
    updatePlayerPosition()

/////DISPLAY AND RETURN///////////////////
    document.getElementById('diceResult')!.innerText = `${currentPlayer.name} rolled a ${diceRoll} and is now on position ${currentPlayer.position}`
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length
    document.getElementById('turnIndicator')!.innerText = `${players[currentPlayerIndex].name}'s Turn`
}

//////UPDATE POSITION OF THE PLAYER/////////////////
function updatePlayerPosition() {
    document.querySelectorAll('.player').forEach(playerElement => playerElement.remove())

    players.forEach(player => {
        const playerBox = document.querySelectorAll('.box')[player.position]
        const playerElement = document.createElement('div')
        playerElement.classList.add('player')
        playerElement.style.backgroundColor = player.color
        playerBox.appendChild(playerElement)
        player.element = playerElement
    })


    document.getElementById('player1Position').innerText = `Player 1's Position: ${players[0].position}`
    document.getElementById('player2Position').innerText = `Player 2's Position: ${players[1].position}`
}

document.getElementById('rollDiceButton')?.addEventListener('click', rollDice)


