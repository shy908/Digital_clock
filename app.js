const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");
const timeFormatSelector = document.getElementById("time-format")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = ""

    const selectedFormat = parseInt(timeFormatSelector.value);

    if (selectedFormat === 12) {
        ampm = (h >= 12) ? "PM" : "AM";
        h = (h % 12) || 12; // to convert 0 to 12 for 12-hour format
    } else {
        ampm = ""; // an empty string for 24-hour format
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;
    
    setTimeout(updateClock, 1000);
}

updateClock();

// Event listener to update the clock when the time format changes
timeFormatSelector.addEventListener("change", updateClock);

