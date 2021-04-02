//getting all the DOM elements

const video = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

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
    return true
}
 
// set video progress 
function setVideoProgressFunction(){
  return true  
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
video.addEventListener('timeUpdate', updateProgressFunction);


playButton.addEventListener('click',toggleVideoStatusFunction);

stopButton.addEventListener('click',stopVideoFunction);
progressBar.addEventListener('change',setVideoProgressFunction);