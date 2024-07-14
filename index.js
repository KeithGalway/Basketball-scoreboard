let homeEl = document.getElementById('score1')                  // get home element - displays home score
let guestEl = document.getElementById('score2')                 // get guest element - displays guest score
let homeScore = 0                                               // declare homeScrore - holds home score
let guestScore = 0                                              // declare guestScore - holds guest score

let [seconds, minutes] = [0, 12]                                // defines array to hold minutes and seconds
let displayTime = document.getElementById('displayTime')        // get display time element - displays timer countdown
let timer = null                                                // timer - holds the timer count

// clockTime function runs the timer for the clock
function clockTime() {
    if (seconds === 0) {
        seconds = 60
        minutes--                                          
    }
    seconds--

    let s = seconds < 10 ? '0' + seconds: seconds
    let m = minutes < 10 ? '0' + minutes: minutes

    displayTime.style.color = '#bfd200'
    displayTime.innerText = m + ':' + s
}

// clockStart function starts the clock when start button is clicked
function clockStart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(clockTime, 1000)
}

// clockStop function stops the clock
function clockStop() {
    clearInterval(timer)
}

// clockReset function resets the clock
function clockReset() {
    clearInterval(timer)
    homeScore = 0
    homeEl.textContent = homeScore
    guestScore = 0
    guestEl.textContent = guestScore
    seconds = 0
    minutes = 12
    displayTime.textContent = minutes + ':' + '00'
    displayTime.style.color = '#f94f6d'
    guestEl.style.color = '#f94f6d'
    homeEl.style.color = '#f94f6d'
}

// incrementBy1 function increments score by 1 point
function incrementBy1(team) {
    if (team === 'home') {
        homeScore += 1
        homeEl.textContent = homeScore
    } else if (team === 'guest') {
        guestScore += 1
        guestEl.textContent = guestScore
    }
    colorWinner()
}

// incrementBy2 function increments score by 2 points
function incrementBy2(team) {
    if (team === 'home') {
        homeScore += 2
        homeEl.textContent = homeScore
    } else if ( team === 'guest') {
        guestScore += 1
        guestEl.textContent = guestScore
    }
    colorWinner()
}

// incrementBy3 function increments score by 3 points
function incrementBy3(team) {
    if (team === 'home') {
        homeScore += 3
        homeEl.textContent = homeScore
    } else if (team === 'guest') {
        guestScore += 3
        guestEl.textContent = guestScore
    }
    colorWinner()
}

// colorWinner function highlights the winner
function colorWinner() {
    if (homeScore > guestScore) {
        homeEl.style.color = '#70e000'
        guestEl.style.color = '#f94f6d'
    } else if (guestScore > homeScore) {
        guestEl.style.color = '#70e000'
        homeEl.style.color = '#f94f6d'
    } else {
        guestEl.style.color = '#f94f6d'
        homeEl.style.color = '#f94f6d'
    }
}