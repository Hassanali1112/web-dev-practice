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

var container = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var songPlay = 0;
var play = document.querySelector("#play");
var next = document.querySelector("#forward");
var previos = document.querySelector("#backward");
const audio = new Audio();
function music() {
  var clutter = "";
  arr.forEach((music, index) => {
    clutter += `<div class="song-card" id=${index}>
     <div class="part1">
         <img src=${music.img} alt="">
         <h2>${music.songName} </h2>
     </div>
     <h6>3:56</h6>
 </div>`;
  });
  audio.src = arr[songPlay].url;
  poster.style.backgroundImage = `url(${arr[songPlay].img})`;
  container.innerHTML = clutter;
}

music();

container.addEventListener("click", (details) => {
  songPlay = details.target.id;
  poster.style.backgroundImage = `url(${arr[details.target.id].img})`;
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  music();
  playVlaue = 1;
  audio.play();
});

var playVlaue = 0;
play.addEventListener("click", () => {
  if (playVlaue === 0) {
    music();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    audio.play();
    playVlaue = 1;
  } else {
    music();
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    audio.pause();
    playVlaue = 0;
  }
});

next.addEventListener("click", () => {
  if (songPlay < arr.length - 1) {
    
    songPlay++;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    playVlaue = 1;

    music();
    audio.play();
  } else {
    
    songPlay = 0;
    playVlaue = 1;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    music();
    audio.play();
  }
});
previos.addEventListener("click", () => {
  if (songPlay !== 0) {
    songPlay--;
    playVlaue = 1;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    music();
    audio.play();
  } else {
    songPlay = 3;
    playVlaue = 1;
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    music();
    audio.play();
  }
});
