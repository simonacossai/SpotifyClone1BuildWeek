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
    return songs.data;
}

let albums = ["Abbey road", "yellow submarine", "the beatles"];

async function fetchAlbums() {
    let songsContainer = document.querySelector("#songs")
    albums.forEach(async album => {
        let songs = await loadSongs(album)
        let Container = document.createElement("div")
        Container.className = "container-fluid"
       
        let fetchedAlbum = document.createElement("div")
        fetchedAlbum.className = "row song-row text-center mt-3";
        songs.forEach(song => {
            let albumCard = document.createElement("div")
            albumCard.className =" col-lg-2 col-md-12 cards"
            albumCard.innerHTML =  `<img src="${song.album.cover_medium}" alt="David Bowie" class="song-card-image">
            <div class="song-card-info text-center">
            <i class="far fa-play-circle play2"></i>
              <p class="title ">${song.title}</p>
              <p class="artist ">${song.artist.name}</p>
            </div>
          `
               
          albumCard.addEventListener("click", (event) => {   
              let player = document.querySelector("#player")     
              let audioPlayer = document.querySelector("#audio-player")
              let songTitle= document.querySelector(".songTitle");
              let duration = document.querySelector(".duration");
              let singer = document.querySelector(".singer")
              let current = document.querySelector(".current");
              let fillbar = document.querySelector(".fill");
              songTitle.innerHTML = song.title
              singer.innerHTML = song.artist.name
              let selectedsong= audioPlayer.src;
              audioPlayer.src = song.preview;
              
              console.log(song)
              player.src=song.album.cover_small;
              audioPlayer.play()      
              
              
audioPlayer.addEventListener("timeupdate", function() {
    
    let position = audioPlayer.currentTime / song.duration;
    let timeRemaining = song.duration - audioPlayer.currentTime;
    console.log(timeRemaining);
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = Math.floor(timeRemaining % 60);
    duration.innerHTML=  "-"+minutes+":"+seconds;
    fillbar.style.width = position * 100 + "%";
  });

let back = document.querySelector(".back");
let forth = document.querySelector(".forth");

back.addEventListener("click", 
  function() {
   
      audioPlayer.currentTime -= 5;
  });
  
  forth.addEventListener("click", 
  function() {
  
    audioPlayer.currentTime += 5;
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
          fetchedAlbum.appendChild(albumCard)
        })
        Container.appendChild(fetchedAlbum)
        songsContainer.appendChild(Container)
    })
}


