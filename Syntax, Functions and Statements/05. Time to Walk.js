function walking(steps, footprint, speed) {
    let speedInMeters = speed / 3.6;
    let allWayInMeters = steps * footprint;
    let breaks = Math.floor(allWayInMeters / 500);
    let timeToHome = Math.ceil((allWayInMeters / speedInMeters) + (breaks * 60));

    let hours = Math.floor(timeToHome / 3600);
    let minutes = Math.floor((timeToHome - hours * 3600) / 60);
    let seconds = timeToHome - (hours * 3600 + minutes * 60); 
    console.log(`${hours < 10 ? '0': ''}${hours}:${minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`)
}

walking(4000, 0.60, 5)
walking(2564, 0.70, 5.5)