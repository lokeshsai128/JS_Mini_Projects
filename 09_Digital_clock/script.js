const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampnEl = documetn.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours
    let m = new Date().getMinutes
    let s = new Date().getSeconds
    let ampm = "AM"

    if(h > 12){
        h = h-12
        ampm = "PM"
    }
}