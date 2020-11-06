const throwbackArtists = ["queen", "linkinpark", "beetles"]

async function loadSongs(query) {
  query.forEach(async (e) => {
    //get the songs for the given artist
    let res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${e}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "useQueryString": true
      }
    })
    let songs = await res.json();
    fetchAlbums(songs.data);
  })
}

async function fetchAlbums(songs) {
  songs.forEach(song => {
    let albumCard = document.querySelector(".cardContainer");
    albumCard.innerHTML += `
          <div class="col-lg-3  col-sm-12 itemsContainer">
          <img src="${song.album.cover_medium}" class="image-card" />
            <a href="detail.html?id=${song.artist.name}|${song.album.cover_xl}|${song.album.title}" style="color: #fff; text-decoration: none"> 
          <p class="album-text">${song.title}</p>
          </a>     
        </div>
              `
              albumCard.addEventListener("click", (event) => {
                let player = document.querySelector("#player")
                let audioPlayer = document.querySelector("#audio-player")
                let songTitle = document.querySelector(".songTitle");
                let duration = document.querySelector(".duration");
                let singer = document.querySelector(".singer")
                let current = document.querySelector(".current");
                let fillbar = document.querySelector(".fill");
                songTitle.innerHTML = song.title
                singer.innerHTML = song.artist.name
                let selectedsong = audioPlayer.src;
                audioPlayer.src = song.preview;
            
                player.src = song.album.cover_small;
                audioPlayer.play()
              });

       
          
  });

}

async function loadArtistSongs() {
  const artistTitle = document.querySelector("h1").innerText;

  //get the songs for the given artist
  let res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistTitle}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "ec5577de62msh9d203d454724b43p1f3c08jsnad1a59a31f6f",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "useQueryString": true
    }
  })
  let songs = await res.json();
  fetchAlbums(songs.data);
}




async function changeVolume() {
  const slider = document.querySelector("#range1");

  if (slider) {
    const player = document.querySelector("#audio-player");
    slider.addEventListener("change", function (value) {
      player.volume = this.value / 100;
    });
  } else {
    return
  }
}

function startHome() {
  loadSongs(throwbackArtists);
  changeVolume();
}






























let breadcrumbLink = document.querySelectorAll(".breadcrumb-item");
let images = document.querySelectorAll(".image-card");
let firstTitle = document.querySelector(".firstTitle");
let secondTitle = document.querySelector(".secondTitle");
let text = document.querySelectorAll(".album-text");



for (let i = 0; i < breadcrumbLink.length; i++) {
  switch (i) {
    case 0:

      break;
    case 1:
      breadcrumbLink[i].addEventListener("click", function () {
        for (let j = 0; j < images.length; j++) {
          images[j].src = firstArray[j];
          firstTitle.innerHTML = "PODCAST"
          secondTitle.innerHTML = "WHILE YOU STUDY";
          text[j].innerHTML = textArray[j];
        }
      });
      break;
    case 2:
      breadcrumbLink[i].addEventListener("click", function () {
        for (let j = 0; j < images.length; j++) {
          images[j].src = secondArray[j];
          firstTitle.innerHTML = "MOOD"
          secondTitle.innerHTML = "GENRES";
          text[j].innerHTML = textArray2[j];

        }
      });
      break;

    case 3:
      breadcrumbLink[i].addEventListener("click", function () {
        for (let j = 0; j < images.length; j++) {
          images[j].src = thirdArray[j];
          firstTitle.innerHTML = "NEW RELEASES"
          secondTitle.innerHTML = "JUST OUT";
          text[j].innerHTML = " "

        }
      });
      break;
    case 4:
      breadcrumbLink[i].addEventListener("click", function () {
        for (let j = 0; j < images.length; j++) {
          images[j].src = fourthArray[j];
          firstTitle.innerHTML = "DISCOVER"
          secondTitle.innerHTML = "NEW ARTISTS";
          text[j].innerHTML = textArray3[j];

        }
      });
      break;
    default:
      break;
  }
}




let hamburger = document.querySelector(".hamburger-button");
let navbar = document.querySelector(".navbar-fixed-left")
let InnerNav = document.querySelector(" .navbar-collapse");
let bottomNav = document.querySelector(".profile-nav");

const toggle = () => {
  if (navbar.style.marginLeft === "-220px") {
    navbar.style.marginLeft = "0px";
    navbar.style.transition = "all ease .40s";
    navbar.style.zIndex = "200";
    InnerNav.style.display = "block";
    InnerNav.style.position = "absolute";
    InnerNav.style.top = "100px";
    bottomNav.style.display = "none";
  } else {
    navbar.style.marginLeft = "-220px";
    navbar.style.transition = "all ease .40s";

  }
};












let firstArray = ["images/download.jpg",
  "images/eminem.jpg",
  "images/lp.jpg",
  "images/beatles.jpg",
  "images/beatles1.jpg",
  "images/download.jpg",
  "images/eminem.jpg",
  "images/lp.jpg",
  "images/beatles.jpg",
  "images/beatles1.jpg",
  "images/download.jpg",
];


let secondArray = [
  "images/eminem.jpg",
  "images/beatles1.jpg",
  "images/download.jpg",
  "images/RevivalEminemCover.jpg",
  "images/eminem2.jpg",
  "images/lp2.jpg",
  "images/lp.jpg",
  "images/oasis.jpg",
  "images/oasis1.jpg",
  "images/beatles.jpg"
];

let thirdArray = [
  "images/beatles1.jpg",
  "images/download.jpg",
  "images/paramore2.jpg",
  "images/lp2.jpg",
  "images/lp.jpg",
  "images/oasis.jpg",
  "images/oasis1.jpg",
  "images/paramore.jpg",
  "images/paramore1.jpg",
  "images/pf.jpg",
];
let fourthArray = [
  "images/starboy.jpg",
  "images/rancore.jpg",
  "images/paramore2.jpg",
  "images/beatles.jpg",
  "images/lp2.jpg",
  "images/oasis1.jpg",
  "images/eminem.jpg",
  "images/random.jpg",
  "images/random1.jpg",
  "images/pf.jpg",
];

let textArray = [
  "News",
  "Italy today",
  "All about coding",
  "Let's discuss",
  "Feminism",
  "Stephen King: the story",
  "The change of music",
  "Coronavirus and its effects",
  "Global news",
  "Random chats"
]

let textArray2 = [
  "Under the shower",
  "Fall",
  "Cozy and relax",
  "while you study",
  "At the gym",
  "Rainy days",
  "Rock",
  "Rap",
  "Pop music",
  "Alternative"
]

let textArray3 = [
  "The weekend",
  "Rancore",
  "Paramore",
  "Beatles",
  "Linkin Park",
  "Oasis",
  "Eminem",
  "Random playlist",
  "Random pop playlist",
  "Pink Floyd"
]