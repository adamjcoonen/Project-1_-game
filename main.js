
/*--------- constants ------ */

const hole = []
const gameTime = 60;



/* --------- apps state variables ---------*/


let playerScore, molesHit, molesAppeared, molesEsc, plyHitPercent, timestarted = false, counter;
let seconds = 60
//These are the numbers that will render on the DOM showing the overa;;
//success of the player.



/*---------- cached element references  -------*/

// These are the DOM elements that render 

const scoreELs = {
    mHits: document.querySelector('#moles_Hit'),
    mAppear: document.querySelector('#moles_shown'),
    mEsc: document.querySelector('#moles_esc')
}


const mole = document.getElementById('#mole')
const mHole = document.querySelectorAll('.hole')
let clock = document.querySelector('timer')

/* -------- event listeners ---------*/

document.getElementById('mole').onclick = moleHit;
document.querySelector('button').addEventListener('click', gTime);




/* ---------- Functions --------------*/

    function gTime(){
        if( timestarted === false){
        timestarted = true;
        counter = setInterval(function(){
            if(seconds <= gameTime){
                document.getElementById('timer').innerHTML = seconds;
                seconds--;
            }else{
            clearInterval(counter);
            timestarted = false;
            seconds = 0
            }
            },1000)
        }   
    }

function moleHit(){

};

function render(){

}

// let myGreeting = setTimeout(function sayHi() {
//     alert('Hello, Mr. Universe!');
//   }, 2000)
console.log('hello world')