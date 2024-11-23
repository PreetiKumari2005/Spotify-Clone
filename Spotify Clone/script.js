onsole.log("welcome to spotify");
//Initialize the variables
let songIndex=0;
let audioElement= new audio('song1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    
{songName:"Let me Love You", filepath:"D:\song1.mp3", coverpath:"C:\Users\preet\Downloads\images 1.jpg"},
    
]   
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener( 'click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}

else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
}
})

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update Seekbar
    progress=parseInt((audio.Element.currentTime/audioElement.duration)* 100);
   // console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.current=myProgressBar.value*audioElement.duration/100;
})
