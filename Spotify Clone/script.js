let songIndex = 0;
let audioElement = new Audio('assets/songs/song1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let masterPause = document.getElementById('masterPause');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

const songs = [
    { songName: "Let me Love You", filepath: "assets/songs/song1.mp3", coverpath: "assets/images/image1.jpg" },
    // Add more songs here...
];

function updatePlayPauseUI(isPlaying, isPause) {
    if (isPlaying) {
        masterPlay.style.display="none";
        masterPause.style.display="inline";
        gif.style.opacity = 1; 
    } 
    if(isPause) {
        masterPause.style.display="none"; 
        masterPlay.style.display="inline";
        gif.style.opacity = 0; 
    }
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play(); 
        updatePlayPauseUI(true); 
    } else {
        audioElement.pause(); 
        updatePlayPauseUI(false); 
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});