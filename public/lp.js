async function loadSongs(artist) {
    //get the songs for the given artist
    let res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "useQueryString": true
        }
    })
    let songs = await res.json();
    console.log(songs);

    return songs.data;

}

let albums = ["Linkin Park"];

async function fetchAlbums() {

    let songsContainer = document.querySelector("#songs");
    albums.forEach(async album => {
        let songs = await loadSongs(album)
       let row= document.createElement("div");
       row.className = "row songRow";
        let fetchedAlbum = document.createElement("div")
        fetchedAlbum.className = "songContainer";
        songs.forEach(song => {
         
    let row= document.createElement("div");
    row.innerHTML=   ` <div class="row songRow" style="padding-top: 10px">
    <div class="play-div">
      <i class="far fa-play-circle play mt-3"></i>
    </div>
    <svg
      width="1.3em"
      height="1.3em"
      viewBox="0 0 16 16"
      class="bi bi-music-note musicIcon mt-3 mr-2"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"
      />
      <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
      <path
        d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"
      />
    </svg>
    <div class="songContainer mt-2">
      <a class="albumSong">${song.title}</a>
      <small><a class="text-muted d-block">${song.artist.name}</a></small>
    </div>
    <a class="duration1 mt-3">${song.duration}</a>
  </div>` 


  row.addEventListener("click", (event) => {   
    let player = document.querySelector("#player")     
    let audioPlayer = document.querySelector("#audio-player")
    let songTitle= document.querySelector(".songTitle");
    let duration = document.querySelector(".duration");
    let singer = document.querySelector(".singer")
    let current = document.querySelector(".current");
    let fillbar = document.querySelector(".fill");
    songTitle.innerHTML = song.title
    singer.innerHTML = song.artist.name;
    let selectedsong= audioPlayer.src;
    audioPlayer.src = song.preview;
    
    player.src=song.album.cover_small;
    audioPlayer.play()      
    
    
audioPlayer.addEventListener("timeupdate", function() {

let position = audioPlayer.currentTime / song.duration;
let timeRemaining = song.duration - audioPlayer.currentTime;
var minutes = Math.floor(timeRemaining / 60);
var seconds = Math.floor(timeRemaining % 60);
duration.innerHTML=  "-"+minutes+":"+seconds;
fillbar.style.width = position * 100 + "%";
});

let back = document.querySelector(".back");
let forth = document.querySelector(".forth");

back.addEventListener("click", 
function() {

audioPlayer.currentTime -= 3;
});

forth.addEventListener("click", 
function() {

audioPlayer.currentTime += 3;
});
    let stop = document.querySelector(".stop");
    stop.addEventListener("click", (event)=>{
      if(audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
    })
})





        fetchedAlbum.appendChild(row);

        })
       
        songsContainer.appendChild(fetchedAlbum);
    })
}





