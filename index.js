let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function home1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function home2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function home3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guest1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guest2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guest3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    guestScore = 0
    homeScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}
