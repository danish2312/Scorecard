let countHome = 0

function incrementOneHome() {
    countHome += 1
    document.getElementById("homeScore").textContent = countHome
}

function incrementTwoHome() {
    countHome += 2
    document.getElementById("homeScore").textContent = countHome
}

function incrementThreeHome() {
    countHome += 3
    document.getElementById("homeScore").textContent = countHome
}


let countGuest = 0

function incrementOneGuest() {
    countGuest += 1
    document.getElementById("guestScore").textContent = countGuest
}

function incrementTwoGuest() {
    countGuest += 2
    document.getElementById("guestScore").textContent = countGuest
}

function incrementThreeGuest() {
    countGuest += 3
    document.getElementById("guestScore").textContent = countGuest
}