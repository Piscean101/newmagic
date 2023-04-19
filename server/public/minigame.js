import Maths from '/math.js';
import { newQuestion, options, valid, correct } from '/math.js';

document.addEventListener('DOMContentLoaded', () => {
let time = 6;
let cashout = 0;
let playoverlay = document.getElementById('play-overlay');
playoverlay.addEventListener('click', () => {
playoverlay.className = 'fade';
newQuestion(options, valid);
setInterval(countdown, 1000);
    function countdown () {    
        if (time === 0) {
            newQuestion(options, valid);
            time += 6;
        }    
        time --;
        playoverlay.innerHTML = time;
    }
})
const submit = document.getElementById('play-submit');
const input = document.getElementById('play-input');
const playstatus = document.getElementById('play-status');
const claimgold = document.getElementById('claim-gold');
const claim = document.getElementById('claim');
const hiddengold = document.getElementById('hidden-gold');
submit.addEventListener('click', (e) => {
    submit.style.visibility = 'hidden';
    e.preventDefault();
    let valuetest = input.value;
    if (!valuetest) {
        time = 1;
    }
    if (valuetest != correct) {
        playstatus.innerHTML = `Nice Try! The correct answer was ${correct}`;
    } else (
        playstatus.innerHTML = 'Correct!',
        cashout += 1,
        setTimeout(document.getElementById('claim').classList.add('general-fade'), 3000),
        claimgold.innerHTML = cashout,
        hiddengold.value += 1,
        console.log(hiddengold.value)
    )
    input.value = '';
    playstatus.classList.add('status-fade');
}, false)
claim.addEventListener('click', (e) => {
})
});
console.log('boope');
