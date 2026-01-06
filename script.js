let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

function playPause(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
}

function stopAudio(){
  audio.pause();
  audio.currentTime = 0;
}

if(audio){
  audio.addEventListener("timeupdate",()=>{
    progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input",()=>{
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
}
