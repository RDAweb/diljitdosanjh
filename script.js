console.log("Welcome To LOP SONGS");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songItemPlay = document.getElementById('songItemPlay');
let  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Jugni(Diljit Dosanjh)", filePath:"1.mp3", coverPath: "jfirst.jpg"},
    {songName: "koKa(Diljit Dosanjh)", filePath:"2.mp3", coverPath: "2.jpg"},
    {songName: "Do You Know(Diljit Dosanjh)", filePath:"3.mp3", coverPath: "3.jpg"},
    {songName: "Bachelor(Diljit Dosanjh)", filePath:"4.mp3", coverPath: "4.jpg"},
    {songName: "5 Taara(Diljit Dosanjh)", filePath:"5.mp3", coverPath: "5.jpg"},
    {songName: "Chauffeur(Diljit Dosanjh)", filePath:"6.mp3", coverPath: "6.jpg"},
    {songName: "Desi bop(Diljit Dosanjh)", filePath:"7.mp3", coverPath: "7.jpg"},
    {songName: "Tere Liye(Diljit Dosanjh)", filePath:"8.mp3", coverPath: "8.jpg"},
    {songName: "Munda Sona Hoon(Diljit Dosanjh)", filePath:"9.mp3", coverPath: "8.jpg"},
    {songName: "High End(Diljit Dosanjh)", filePath:"10.mp3", coverPath: "10.jpg"},
    {songName: "Ranjhna(Diljit Dosanjh)", filePath:"11.mp3", coverPath: "11.jpg"},
    {songName: "Sadda Move(Diljit Dosanjh)", filePath:"12.mp3", coverPath: "12.jpg"},
    {songName: "Jind Mahi(Diljit Dosanjh)", filePath:"13.mp3", coverPath: "13.jpg"},
    {songName: "Born To Shine(Diljit Dosanjh)", filePath:"14.mp3", coverPath: "14.jpg"},
    {songName: "Move Your Lakk(Diljit Dosanjh)", filePath:"15.mp3", coverPath: "15.jpg"},
    {songName: "Dil Todeya(Diljit Dosanjh)", filePath:"16.mp3", coverPath: "16.jpg"},
    {songName: "Meri Kalam Na Bole(Diljit Dosanjh)", filePath:"17.mp3", coverPath: "17.jpg"},
    {songName: "Jodi Teri Meri(Diljit Dosanjh)", filePath:"18.mp3", coverPath: "18.jpg"},
    {songName: "Hass Hass(Diljit Dosanjh)", filePath:"19.mp3", coverPath: "19.jpg"},
    {songName: "Ri Ri Rihanna(Diljit Dosanjh)", filePath:"20.mp3", coverPath: "20.jpg"},
    {songName: "Naina(Diljit Dosanjh)", filePath:"21.mp3", coverPath: "21.jpg"},
    {songName: "Love Ya(Diljit Dosanjh)", filePath:"22.mp3", coverPath: "22.jpg"},
    {songName: "Parohna Banke(Diljit Dosanjh)", filePath:"23.mp3", coverPath: "23.jpg"},
    {songName: "Laembadgini(Diljit Dosanjh)", filePath:"24.mp3", coverPath: "24.jpg"},
    {songName: "Case(Diljit Dosanjh)", filePath:"25.mp3", coverPath: "25.jpg"},
    {songName: "Nanak Ji(Diljit Dosanjh)", filePath:"26.mp3", coverPath: "26.jpg"},
    {songName: "Nazarey(Diljit Dosanjh)", filePath:"27.mp3", coverPath: "27.jpg"},
    {songName: "Palpita(Diljit Dosanjh)", filePath:"28.mp3", coverPath: "28.jpg"},
    {songName: "Jigra Te Laija Gabrua(Diljit Dosanjh)", filePath:"29.mp3", coverPath: "29.jpg"},
    {songName: "Naina Da Kehna(Diljit Dosanjh)", filePath:"30.mp3", coverPath: "30.jpg"},
    {songName: "Ranjana(Diljit Dosanjh)", filePath:"31.mp3", coverPath: "3133.jpg"},
    {songName: "Naughty Billo(Diljit Dosanjh)", filePath:"32.mp3", coverPath: "3133.jpg"},
    {songName: "Dum Dum(Diljit Dosanjh)", filePath:"33.mp3", coverPath: "3133.jpg"},
    {songName: "Peaches(Diljit Dosanjh)", filePath:"34.mp3", coverPath: "3438.jpg"},
    {songName: "Lemonade(Diljit Dosanjh)", filePath:"35.mp3", coverPath: "3438.jpg"},
    {songName: "Caviar(Diljit Dosanjh)", filePath:"36.mp3", coverPath: "3438.jpg"},
    {songName: "Red Chilli(Diljit Dosanjh)", filePath:"37.mp3", coverPath: "3438.jpg"},
    {songName: "Vanilla(Diljit Dosanjh)", filePath:"38.mp3", coverPath: "3438.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }


    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause'); 
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',() =>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(makeAllPlays()|| audioElement.currentTime<=0){
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        (audioElement.currentTime = 0);
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
        }

        else{
        makeAllPlays()
            songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            audioElement.src = `${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            (audioElement.currentTime = 0);
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.add('fa-circle-play'); 
            masterPlay.classList.remove('fa-circle-pause')};
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=46){
        songIndex=0
    }
    else{
        songIndex += 1;

    }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -= 1;

    }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play'); 
        masterPlay.classList.add('fa-circle-pause');
})

// Handle song end to play the next song and update the icons
audioElement.addEventListener('ended', () => {
    // Reset the icon of the current song
    document.getElementById(songIndex).classList.remove('fa-circle-pause');
    document.getElementById(songIndex).classList.add('fa-circle-play');

    // Move to the next song
    songIndex += 1;
    if (songIndex >= songs.length) {
        songIndex = 0; // Loop back to the first song if the list ends
    }

    // Update the audio source and song information
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update play/pause icons
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    // Set the icon of the next song to 'fa-circle-pause'
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
});

// Handle keyboard events for spacebar, 'L', 'J', 'B', 'N', 'K', left arrow, and right arrow keys
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Prevent space from scrolling the page
        togglePlayPause();
    }

    if (e.code === 'KeyL') {
        skipForward(5); // Skip forward 5 seconds when 'L' key is pressed
    }

    if (e.code === 'KeyJ') {
        skipBackward(5); // Skip backward 5 seconds when 'J' key is pressed
    }

    if (e.code === 'KeyB') {
        playPreviousSong(); // Play the previous song when 'B' key is pressed
    }

    if (e.code === 'KeyN') {
        playNextSong(); // Play the next song when 'N' key is pressed
    }

    if (e.code === 'KeyK') {
        togglePlayPause(); // Toggle play/pause when 'K' key is pressed
    }

    if (e.code === 'ArrowLeft') {
        skipBackward(10); // Skip backward 10 seconds when the left arrow key is pressed
    }

    if (e.code === 'ArrowRight') {
        skipForward(10); // Skip forward 10 seconds when the right arrow key is pressed
    }
});

// Function to toggle play/pause logic
const togglePlayPause = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

        // Set current playing song's icon
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

        // Reset icon to play for the current song
        document.getElementById(songIndex).classList.remove('fa-circle-pause');
        document.getElementById(songIndex).classList.add('fa-circle-play');
    }
};

// Function to skip forward a certain number of seconds
const skipForward = (seconds) => {
    if (audioElement.currentTime + seconds <= audioElement.duration) {
        audioElement.currentTime += seconds; // Skip forward by the specified number of seconds
    } else {
        audioElement.currentTime = audioElement.duration; // Jump to the end if skipping would exceed song duration
    }
};

// Function to skip backward a certain number of seconds
const skipBackward = (seconds) => {
    if (audioElement.currentTime - seconds >= 0) {
        audioElement.currentTime -= seconds; // Rewind by the specified number of seconds
    } else {
        audioElement.currentTime = 0; // Jump to the start if rewinding would go below 0
    }
};

// Function to play the next song
const playNextSong = () => {
    // Reset the icon of the current song
    document.getElementById(songIndex).classList.remove('fa-circle-pause');
    document.getElementById(songIndex).classList.add('fa-circle-play');

    // Move to the next song
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    // Update the audio source and song information
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update play/pause icons
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    // Set the icon of the next song to 'fa-circle-pause'
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
};

// Function to play the previous song
const playPreviousSong = () => {
    // Reset the icon of the current song
    document.getElementById(songIndex).classList.remove('fa-circle-pause');
    document.getElementById(songIndex).classList.add('fa-circle-play');

    // Move to the previous song
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }

    // Update the audio source and song information
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update play/pause icons
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

    // Set the icon of the previous song to 'fa-circle-pause'
    document.getElementById(songIndex).classList.remove('fa-circle-play');
    document.getElementById(songIndex).classList.add('fa-circle-pause');
};
audioElement.addEventListener('ended', () => {
    songIndex += 1;
    if (songIndex >= songs.length) {
        songIndex = 0; // Loop back to the first song if it's the last one
    }
    audioElement.src = songs[songIndex].filePath; // Update the audio source
    masterSongName.innerText = songs[songIndex].songName; // Update the song name display
    audioElement.currentTime = 0; // Reset the time
    audioElement.play(); // Play the next song
    masterPlay.classList.remove('fa-circle-play'); 
    masterPlay.classList.add('fa-circle-pause'); // Update play/pause icon
});

