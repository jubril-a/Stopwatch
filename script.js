let timer = document.querySelector("#timer");
let controlButton = document.querySelector(".control_button");

function addASecond(){

    if (second < 59) {
        second += 1;
    } else {
        second = 0;
        
        if (minute < 59) {
            minute += 1;
        } else {
            minute = 0;
            hour += 1;
        }

    }

    timer.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

function start() {
    second = 0;
    minute = 0;
    hour = 0;
    increment = setInterval(addASecond, 1000);
}

controlButton.addEventListener('click', () => {

    if (controlButton.getAttribute('data-function') == "start") {
       start();
       controlButton.setAttribute('data-function', 'stop');
       controlButton.textContent = "Stop";
    } else {
        clearInterval(increment);
        controlButton.setAttribute('data-function', 'start');
       controlButton.textContent = "Re-Start";
    }
})

