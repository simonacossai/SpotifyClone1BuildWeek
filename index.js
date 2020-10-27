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
              <p class="title ">${song.title}</p>
              <p class="artist ">${song.artist.name}</p>
            </div>
          `
               
          albumCard.addEventListener("click", (event) => {   
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
              stop.addEventListener("click", (event)=>{
                  audioPlayer.pause();
              })
          })
          fetchedAlbum.appendChild(albumCard)
        })
        Container.appendChild(fetchedAlbum)
        songsContainer.appendChild(Container)
    })
}


