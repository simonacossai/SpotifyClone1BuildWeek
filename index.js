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

let artists = ["the beatles"]

async function fetchAlbums() {
    let songsContainer = document.querySelector("#songs")
    artists.forEach(async artist => {
        let songs = await loadSongs(artist)
        let artistContainer = document.createElement("div")
        artistContainer.className = "container-fluid"
       
        let songList = document.createElement("div")
        songList.className = "row song-row text-center mt-3";
        songs.forEach(song => {
            let songCard = document.createElement("div")
            songCard.className =" col-lg-2 cards"
            songCard.innerHTML =  `<img src="${song.album.cover_medium}" alt="David Bowie" class="song-card-image">
            <div class="song-card-info text-center">
              <p class="title ">${song.title}</p>
              <p class="artist ">${song.artist.name}</p>

            </div>
          `
         
         
          songCard.addEventListener("click", (e) => {   
              let player = document.querySelector("#player")     
              let audioPlayer = document.querySelector("#audio-player")
              let songTitle= document.querySelector(".songTitle");
              let singer = document.querySelector(".singer")
              songTitle.innerHTML = song.title
              singer.innerHTML = song.artist.name
              audioPlayer.src = song.preview
              player.src=song.album.cover_small;
              audioPlayer.play()          
              let stop = document.querySelector(".stop");
              stop.addEventListener("click", (e)=>{
                  audioPlayer.pause();
              })
          })
          songList.appendChild(songCard)
        })
        artistContainer.appendChild(songList)
        songsContainer.appendChild(artistContainer)
    })
}
