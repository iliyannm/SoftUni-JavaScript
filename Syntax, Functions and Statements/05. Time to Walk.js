function calculateWalkingTime(steps, studentFootprint, speed) { 
    allTheWay = steps * studentFootprint;
    let breaks = Math.floor(allTheWay / 500);
    let timeWithoutBreaks = Math.ceil((((allTheWay / 1000) / speed) * 60) * 60);
    let fullTime = (breaks * 60) + timeWithoutBreaks;

    let hours = Math.floor(fullTime / 3600)
    if (hours < 10) {
        hours = String(`0${hours}`)
    }

    let minutes = Math.floor(fullTime / 60)
    if (minutes < 10) {
        minutes = String(`0${minutes}`)
    }
    
    let seconds = (fullTime - (minutes * 60))
    if (seconds < 10) {
        seconds = String(`0${seconds}`)
    }

    console.log(`${hours}:${minutes}:${seconds}`)
}
