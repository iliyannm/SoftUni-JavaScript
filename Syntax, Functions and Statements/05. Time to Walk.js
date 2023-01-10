function walking(steps, footprint, speed) {
    let fullTimeInSeconds = 0;
    let fullRoadInMeters = steps * footprint;
    let breaks = Math.floor(fullRoadInMeters / 500)
    fullTimeInSeconds += breaks * 60;
    let speedInMeters = (speed * 1000) / 3600;
    fullTimeInSeconds += fullRoadInMeters / speedInMeters;
    let hours = Math.floor(fullTimeInSeconds / 3600);
    fullTimeInSeconds -= hours * 3600;
    let minutes = Math.floor(fullTimeInSeconds / 60);
    fullTimeInSeconds -= minutes * 60;
    let seconds = Math.ceil(fullTimeInSeconds);
    console.log(`${(hours < 10 ? '0': '') + hours}:${(minutes < 10 ? '0': '') + minutes}:${(seconds < 10 ? '0': '') + seconds}`)
}

walking(4000, 0.60, 5)
walking(2564, 0.70, 5.5)