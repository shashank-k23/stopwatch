//setting zoom level
document.body.style.zoom="90%"

//Global vars
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let counter = 0;
let interval = null;

//adding Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

//Updating the Time

function timer() {
    counter++;

    let mins = Math.floor(counter / 6001);
    let secs = Math.floor((counter - (mins * 6001)) / 100);
    let hundrth = counter % 100;

    if (hundrth < 10) hundrth = '0' + hundrth;
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;

    // updating the time 

    time_el.innerText = `${mins}:${secs}:${hundrth}`;
}
// function executed when start button is pressed
function start() {
    if (interval) {
        return
    }
    //interval = setInterval(timer, 1000);
    interval = setInterval(timer, 10);
}
// function executed when stop button is pressed
function stop() {
    clearInterval(interval);
    interval = null;
}
// function executed when reset button is pressed

function reset() {
    stop();
    counter = 0;
    time_el.innerText = '00:00:00';
}