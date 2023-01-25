console.log("Welcome to Spotify");
//Initialie the Varibles

let songIndex=0;
let audioEment = new Audio('songs/1.mp3'); // audioElement.play(); this will play the song
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songs = [
    {songName: "Let me" , filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Let me" , filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Let me" , filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Let me" , filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
]
 
//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioEment.paused || audioEment.currentTime<=0){
        audioEment.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioEment.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events 
audioEment.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    ProgressEvent=parseInt((audioEment.currentTime/audioEment.duration)*100)
    myProgressBar.value=ProgressEvent;
});