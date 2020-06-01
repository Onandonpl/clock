const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const digital_hours = document.querySelector(".digital-hours").firstElementChild;
const digital_minutes = document.querySelector(".digital-minutes").firstElementChild;
const digital_seconds = document.querySelector(".digital-seconds").firstElementChild;



function run_the_clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hrPosition = h * 30 + ((m * 6) / 12);
    let minPosition = m * 6 + (s * 6) / 60;
    let secPosition = s * 6;


    hours.style.transform = 'rotate(' + hrPosition + 'deg)';
    minutes.style.transform = 'rotate(' + minPosition + 'deg)';
    seconds.style.transform = 'rotate(' + secPosition + 'deg)';

    digital_hours.textContent = h < 10 ? `0${h}:` : `${h}:`;
    digital_minutes.textContent = m < 10 ? `0${m}:` : `${m}:`;
    digital_seconds.textContent = s < 10 ? `0${s}` : `${s}`;



}
var interval = setInterval(run_the_clock, 1000);