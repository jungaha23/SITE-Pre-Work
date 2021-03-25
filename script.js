// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var speedUpFactor = 0;
var clueHoldTime = 1000;
var strikes = 3; //keeps track of the number of strikes
var pattern = [] //keeps track of the secret pattern of button presses!

var progress = 0; //assigned an integer that represents how far along the player is in guessing the pattern!
var gamePlaying = false; //Boolean that keeps track of whether the game is currently active!
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function playAudio(audio){
  document.getElementById(audio).play();
}

function generatePattern(difficulty){
    for(let i=0;i<=difficulty;i++){
      pattern.push(getRandomInt(difficulty)+1);
    }
    console.log(pattern);
}

function hideAllBtns(){
  for(let i=1;i<=16;i++){
      var str1 = "";
      str1 = "button" + i.toString();
      document.getElementById(str1).classList.add("hidden");
  }  
  for(let i=1;i<=12;i++){
      var str2 = "";
      str2 = "secMsg" + i.toString();
      document.getElementById(str2).classList.add("hidden");
  }  
}

function startGame(num){
    //initialize and reset game variables
    if(num==1){
      strikes = 12;
    }else{
      strikes = 3;
    }
    progress = 0;
    gamePlaying = true;
    console.log(num);
    pattern = [];
    clueHoldTime = 1000;
  
    if(num == 4){ //sets the speed up factor based on the game mode difficulty
      speedUpFactor = 50; 
    }else if(num == 9){
      speedUpFactor = 15;
    // }else if(num==1){
    //   speedUpFactor = 25;
    }else{
      speedUpFactor = 5;
    }
    
    
    if(num==1){
      document.getElementById("secMsg1").classList.remove("hidden");
      document.getElementById("secMsg2").classList.remove("hidden");
      document.getElementById("secMsg3").classList.remove("hidden");
      document.getElementById("secMsg4").classList.remove("hidden");
      document.getElementById("secMsg5").classList.remove("hidden");
      document.getElementById("secMsg6").classList.remove("hidden");
      document.getElementById("secMsg7").classList.remove("hidden");
      document.getElementById("secMsg8").classList.remove("hidden");
      document.getElementById("secMsg9").classList.remove("hidden");
      document.getElementById("secMsg10").classList.remove("hidden");
      document.getElementById("secMsg11").classList.remove("hidden");
      document.getElementById("secMsg12").classList.remove("hidden");
    }else{
      if(num>=4){
        document.getElementById("button1").classList.remove("hidden");
        document.getElementById("button2").classList.remove("hidden");
        document.getElementById("button3").classList.remove("hidden");
        document.getElementById("button4").classList.remove("hidden");
      }
      if(num>=9){
        document.getElementById("button5").classList.remove("hidden");
        document.getElementById("button6").classList.remove("hidden");
        document.getElementById("button7").classList.remove("hidden");
        document.getElementById("button8").classList.remove("hidden");
        document.getElementById("button9").classList.remove("hidden");
      }
      if(num==16){
        document.getElementById("button10").classList.remove("hidden");
        document.getElementById("button11").classList.remove("hidden");
        document.getElementById("button12").classList.remove("hidden");
        document.getElementById("button13").classList.remove("hidden");
        document.getElementById("button14").classList.remove("hidden");
        document.getElementById("button15").classList.remove("hidden");
        document.getElementById("button16").classList.remove("hidden");
      }  
    }
    
    document.getElementById("easyMode").classList.add("hidden");
    document.getElementById("medMode").classList.add("hidden");
    document.getElementById("hardMode").classList.add("hidden");
    document.getElementById("secretMessage").classList.add("hidden");
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    if(num!=1){
      generatePattern(num);  
      playClueSequence();
    }
    // }else{
    //   playSecretMessage(); // *** part of my secret message mode! ***
    // }
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function resumeGame(){
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 529.4,
  5: 600.4,
  6: 700.4,
  7: 800.4,
  8: 900.4,
  9: 1000.4,
  10: 800.4,
  11: 900.4,
  12: 1000.4,
  13: 1100,
  14: 1200,
  15: 1300,
  16: 1400,
}
function playTone(btn,len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

// *** part of my secret message mode! ***

// function lightSpecialButton(btn){
//   document.getElementById(btn).classList.add("lit")
// }

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// *** part of my secret message mode! ***

// function clearSpecialButton(btn){
//   document.getElementById(btn).classList.remove("lit")
// }

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}


function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= speedUpFactor;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}
// *** part of my secret message mode! ***

// function playSecretMessage(){ 
//   guessCounter = 0;
//   for(let i=1;i<=12;i++){ // for each clue that is revealed so far
//     var audioName = "";
//     audioName = "a" + i.toString();
//     console.log(audioName);
//     var btnName = "";
//     btnName = "secMsg" + i.toString();
//     console.log(btnName);
//     playAudio(audioName);
//     lightSpecialButton(btnName);
//     clearSpecialButton(btnName);
//     playAudio(nextClueWaitTime);
//   }
// }

function loseGame(){
  stopGame();
  hideAllBtns();
  if(confirm("Game over. You lost. Click 'OK' to play again or 'Cancel' to stop playing.")){
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("easyMode").classList.remove("hidden");
    document.getElementById("medMode").classList.remove("hidden");
    document.getElementById("hardMode").classList.remove("hidden");
    document.getElementById("secretMessage").classList.remove("hidden");
  }
  document.getElementById("startBtn").classList.add("hidden");
}

function winGame(){
  stopGame();
  hideAllBtns();
  if(confirm("Amazing job. You won! Click 'OK' to play again or 'Cancel' to stop playing.")){
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("easyMode").classList.remove("hidden");
    document.getElementById("medMode").classList.remove("hidden");
    document.getElementById("hardMode").classList.remove("hidden");
    document.getElementById("secretMessage").classList.remove("hidden");
  }
  document.getElementById("startBtn").classList.add("hidden");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn != pattern[guessCounter]){ 
    strikes--;
    alert("You made an error! You have " + strikes + " error[s] left. Continue from where you left off.");
    if(strikes==0){
      loseGame();
    }
  }else{
    if (guessCounter == progress){
      if (progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence(); 
      }
    }else{
      guessCounter++;
  }  
    
}
  
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)