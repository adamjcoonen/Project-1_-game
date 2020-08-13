
/*--------- constants ------ */

const holes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const gameTime = 30;
const molePic = '<img class="mole" src="https://media.istockphoto.com/vectors/cartoon-cute-mole-vector-id586064082">'


/* --------- apps state variables ---------*/


let playerScore, molesHit, molesAppeared, molesEsc, plyHitPercent, timestarted = false, counter;
let seconds = 30
//These are the numbers that will render on the DOM showing the overa;;
//success of the player.



/*---------- cached element references  -------*/

// These are the DOM elements that render 

const scoreELs = {
    mHits: document.querySelector('#moles_Hit'),
    mAppear: document.querySelector('#moles_shown'),
    mEsc: document.querySelector('#moles_esc')
}

let moleEl = document.querySelector('.mole')
let holeEl = document.querySelectorAll('.hole')
let clockEl = document.getElementById('timer')

/* -------- event listeners ---------*/

document.getElementById("container").style.cursor = "crosshair";
document.querySelector('button').addEventListener('click',startTime );

// holeEl.addEventListener('click',moleHit)

/* ---------- Functions --------------*/
 function init(){
 }
// This function starts the clock and sets the 'time started to true' as 
// a condition for the other fucntions to run
    function startTime(){
        if( timestarted === false){
        timestarted = true;
        counter = setInterval(function(){
            if(seconds >= 0){
                clockEl.innerHTML = seconds;
                seconds--;
            }else{
            clearInterval(counter);
            timestarted = false;
            seconds = 0
            init
            }
            },1000)
        }  
    }
  
  
    nextMrender(); 
    
 // get a random time for the moles to apprear
 
 


 function mTime(min,max){
    return Math.round(Math.random() * (max - min) + min);
 }
// get random holes for the moles to show up in. 
 function randHoles(holeEl){
     const index   = Math.floor(Math.random() * holeEl.length)
     hole = holeEl[index]
     return hole
 }


// This function adds the number of moles clicked by the player to thier score




 ///this section renders the randomly placed images to the DOM
function mRender(cb){
    if (timestarted === true){
       const hole = randHoles(holeEl)
       hole.innerHTML = molePic 
        }
        
        setTimeout(cb, mTime(500,1000))}
    function nextMrender(){
        mRender(nextMrender)  
    }
console.log('hello world')