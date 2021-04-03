//getting all the DOM elements

// const { min } = require("lodash");

const video = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
// let shouldUpdateProgress = true;

//Play & pause video
function toggleVideoStatusFunction(){
   
  if(video.paused){
    video.play();
    }else{
     video.pause();  
    }
}

//updating play & pause button
function updatePlayIconFunction(){
    if(video.paused){
        playButton.innerHTML='<i class = "fa fa-play fa-2x"></i>'
    }else{
        playButton.innerHTML='<i class = "fa fa-pause fa-2x"></i>'
    }
}

//updating progressbar &time stamp
function updateProgressFunction(){
    progress.value = (video.currentTime / video.duration) * 100;
     //get minutes
  let mins = Math.floor(video.currentTime / 60);

  if(mins < 10){
  mins = '0'+ String(mins);
  console.log(mins);
  }
//get seconds
let secs = Math.floor(video.currentTime % 60);
if(secs < 10){
secs = '0'+ String(secs);
console.log(secs);

}

timestamp.innerHTML = `${mins}:${secs}`;

}
 
// set video time to progress 
function setVideoProgressFunction(){
  video.currentTime = (+progress.value * video.duration) / 100;
 
}

//stop video 
function stopVideoFunction(){
   video.currentTime = 0;
   video.pause(); 
  }


//Event Listeners

video.addEventListener('click', toggleVideoStatusFunction);
video.addEventListener('pause', updatePlayIconFunction);
video.addEventListener('play', updatePlayIconFunction);
video.addEventListener('timeupdate', updateProgressFunction);


playButton.addEventListener('click',toggleVideoStatusFunction);

stopButton.addEventListener('click',stopVideoFunction);
progress.addEventListener('change',setVideoProgressFunction);