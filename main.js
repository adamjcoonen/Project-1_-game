
/*--------- constants ------ */

const holes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const gameTime = 30;
const molePic = 'url("https://media.istockphoto.com/vectors/cartoon-cute-mole-vector-id586064082")'


/* --------- apps state variables ---------*/


let playerScore, plyHitPercent, timestarted = false, counter;
let seconds = 30;
let hits = 0;
let appears = 0;
//These are the numbers that will render on the DOM showing the overa;;
//success of the player.



/*---------- cached element references  -------*/

// These are the DOM elements that render 


let mHits = document.getElementById('moles_Hit')
let mAppear = document.getElementById('moles_shown')
let mEsc = document.getElementById('moles_esc')

let moleEl = document.querySelector('.mole')
let holeEl = document.getElementsByClassName('hole')
let clockEl = document.getElementById('timer')
let winMsg = document.getElementById('scoring')



/* -------- event listeners ---------*/

document.getElementById("container").style.cursor = "crosshair";
document.querySelector('button').addEventListener('click',startTime );
document.getElementById("container").addEventListener('click', moleHit)
document.getElementById('reset').addEventListener('click', init)


/* ---------- Functions --------------*/

function init(){ 
    for (i = 0; i < holeEl.length; i++){
        holeEl[i].style.backgroundImage = null
    }
     timestarted = false
     seconds = gameTime;
 }
// This function starts the clock and sets the 'time started to true' as 
// a condition for the other fucntions to run
    function startTime(){
        if( seconds > 0 && timestarted === false ){
        timestarted = true;
        counter = setInterval(function(){
            if(seconds >= 0){
                clockEl.innerHTML = seconds;
                seconds--;
            }else{
            timestarted = false;
            showScore()
            }
            },1000)
             } 
    }

    nextMrender(); 
    nextUnrender();

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


// This function adds the number of moles clicked by the player to their score and removes the mole element
function moleHit(evt){ 
    if(evt.target.style.backgroundImage == molePic && timestarted === true) {
    evt.target.style.backgroundImage = null
     hits++ } 
    }
// renders the final score for the player
function showScore(){
    mHits.innerHTML = `You got ${hits} moles`
    mAppear.innerHTML = `Out of ${appears}`
    mEsc.innerHTML = `but ${appears-hits} moles escaped!`
}



 ///this section renders the randomly placed images to the DOM
function mRender(cb){
    if (timestarted === true){
       const hole = randHoles(holeEl)
       hole.style.backgroundImage = molePic;
       appears++;
        }
        
        setTimeout(cb, mTime(100,1000))
    }
    function mUnRender(cb) {
        if (timestarted === true ){
            let full = randHoles(holeEl)
            full.style.backgroundImage = null;   
        }
            
             setTimeout(cb, 500)
         }
    
    
        
    function nextMrender(){
        mRender(nextMrender)};
    function nextUnrender(){
        mUnRender(nextUnrender);
        };
        
