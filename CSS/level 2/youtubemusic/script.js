var arr = [
  { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
  {
    songName: "Pehle Bhi main",
    url: "./songs/Pehle Bhi Main.mp3",
    img: "./images/animal.jpg",
  },
  {
    songName: "Ram siya ram",
    url: "./songs/Ram Siya Ram.mp3",
    img: "./images/ram.jpg",
  },
  {
    songName: "Arjan Valley",
    url: "./songs/Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
];
const audio = new Audio();
var musicsContainer = document.querySelector("#all-songs");
var songToPlay = 0;
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var previous = document.querySelector("#backward");
var next = document.querySelector("#forward");
function music() {
  var clutter = "";
  arr.forEach((music, index) => {
    clutter += `<div class="song-card" id=${index}>
     <div class="part1">
         <img src=${music.img} alt="">
         <h2>${music.songName}</h2>
     </div>
     <h6>3:56</h6>
 </div>`;
    audio.src = arr[songToPlay].url;
    poster.style.backgroundImage = `url(${arr[songToPlay].img})`;

    musicsContainer.innerHTML = clutter;
  });
}

music();

musicsContainer.addEventListener("click", (details) => {
  songToPlay = details.target.id;
  console.log(songToPlay);
  music();
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  playValue = 1;
  audio.play();
});

var playValue = 0;
play.addEventListener("click", () => {
  if (playValue == 0) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    music();
    audio.play();
    playValue = 1;
    console.log(songToPlay);
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    music();
    audio.pause();
    playValue = 0;
  }
});

next.addEventListener("click", () => {
  if (songToPlay < arr.length - 1) {
    songToPlay++;
    music();
    audio.play();
  } else {
    songToPlay = 0;
    music();
    audio.play();
  }
});
previous.addEventListener("click", () => {
  if (songToPlay != 0) {
    songToPlay--;
    music();
    audio.play();
  } else {
    songToPlay = arr.length - 1;
    music();
    audio.play();
  }
});

// var allSongs = document.querySelector("#all-songs")
// var poster = document.querySelector("#left")

// var play = document.querySelector("#play")
// var backward = document.querySelector("#backward")
// var forward = document.querySelector("#forward")

// var audio = new Audio()

// var selectedSong = 0

// function mainFunction() {
//     var clutter = ""

//     arr.forEach(function (elem, index) {
//         clutter += `<div class="song-card" id=${index}>
//     <div class="part1">
//         <img src=${elem.img} alt="">
//         <h2>${elem.songName}</h2>
//     </div>
//     <h6>3:56</h6>
// </div>`
//     })
//     allSongs.innerHTML = clutter

//     audio.src = arr[selectedSong].url
//     poster.style.backgroundImage = `url(${arr[selectedSong].img})`
// }
// mainFunction()

// allSongs.addEventListener("click", function (dets) {
//     selectedSong = dets.target.id
//     mainFunction()
//     play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
//     flag = 1
//     audio.play()
// })

// var flag = 0

// play.addEventListener("click", function () {
//     if (flag == 0) {
//         play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
//         mainFunction()
//         audio.play()
//         flag = 1
//     } else {
//         play.innerHTML = `<i class="ri-play-mini-fill"></i>`
//         mainFunction()
//         audio.pause()
//         flag = 0
//     }
// })

// forward.addEventListener("click", function () {
//     if (selectedSong < arr.length - 1) {
//         selectedSong++
//         mainFunction()
//         audio.play()
//     }else{
//         forward.style.opacity = 0.4
//     }
// })
// backward.addEventListener("click", function () {
//     if (selectedSong > 0) {
//         selectedSong--
//         mainFunction()
//         audio.play()
//     }else{
//         backward.style.opacity = 0.4
//     }
// })
