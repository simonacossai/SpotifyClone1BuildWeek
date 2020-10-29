let breadcrumbLink = document.querySelectorAll(".breadcrumb-item");
let images= document.querySelectorAll(".image-card");
let firstTitle= document.querySelector(".firstTitle");
let secondTitle= document.querySelector(".secondTitle");
let text = document.querySelectorAll(".album-text");


let firstArray = [ "images/download.jpg",
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
let  fourthArray = [
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
  
let textArray= [
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

let textArray2=[
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

let textArray3=[
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
for(let i=0; i<breadcrumbLink.length; i++){
    switch (i) {
        case 0:
       
        break;
        case 1: 
        breadcrumbLink[i].addEventListener("click", function(){
            for(let j=0; j<images.length; j++){
            images[j].src = firstArray[j];
            firstTitle.innerHTML="PODCAST"
            secondTitle.innerHTML="WHILE YOU STUDY";
            text[j].innerHTML = textArray[j];
        }
        });
            break;
        case 2: 
        breadcrumbLink[i].addEventListener("click", function(){
            for(let j=0; j<images.length; j++){
                images[j].src = secondArray[j];
                firstTitle.innerHTML="MOOD"
            secondTitle.innerHTML="GENRES";
            text[j].innerHTML =textArray2[j];

            }
        });
        break;

        case 3: 
        breadcrumbLink[i].addEventListener("click", function(){
            for(let j=0; j<images.length; j++){
                images[j].src = thirdArray[j];
            firstTitle.innerHTML="NEW RELEASES"
            secondTitle.innerHTML="JUST OUT";
            text[j].innerHTML =" "

            }
        });
        break;
        case 4: 
        breadcrumbLink[i].addEventListener("click", function(){
            for(let j=0; j<images.length; j++){
                images[j].src = fourthArray[j];
            firstTitle.innerHTML="DISCOVER"
            secondTitle.innerHTML="NEW ARTISTS";
            text[j].innerHTML =textArray3[j];

            }
        });
        break;
        default:
            break;
    }
}