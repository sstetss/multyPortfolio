// volume
let minus  = document.getElementById('down-btn')
let plus  = document.getElementById('up-btn')
let volumeInput = document.getElementById('volume-range')
let volumeBox = document.getElementById('volume-box')


// btn

let perSong = document.getElementById('per-song')
let volumeBtn = document.getElementById('music-volume')
let nextSong = document.getElementById('next-song')


// range-music

let currentTime = document.getElementById('current')
let musicRange = document.getElementById('music-range')
let durationTime = document.getElementById('duration')


// play - time
let playBtn = document.getElementById('play')


// audio

let music = document.getElementById('audio')


// music 
let songMusic = document.getElementById('title')
let artistMusic = document.getElementById('singer')
let musicLogo = document.getElementById('logo')

let songAlbum = [
  {
     name: "Додому",
     artist: "Wellboy",
     src: "./images/images-player/audio/wellboy_-_dodomu_muzati.net.mp3" ,
     img: "https://muzati.net/_ld/203/12776029.jpg",
  },
  {
   name: "Nazva",
   artist: "Сіґеле-міґеле",
   src: "./images/images-player/audio/artem_pivovarov_-_manifest_muzati.net.mp3" ,
   img: "https://muzati.net/_ld/206/78447016.jpg",
  },
  {
   name: "Маніфест",
   artist: "Артем Пивоваров",
   src: "audio/nazva_-_sigele-migele_muzati.net.mp3" ,
   img: "https://muzati.net/_ld/205/91894542.jpg",
  }

]




// play()
// pause()
// paused
// currentTime (sek)
// duration (sek)
// currentSrc

minus.addEventListener('click', handleVolumeDown);
plus.addEventListener('click', handleVolumeUp);



// minus-btn
function handleVolumeDown() {
   volumeInput.value = Number(volumeInput.value) - 10
   music.volume = volumeInput.value / 100
}

// plus-btn
function handleVolumeUp() {
   volumeInput.value = Number(volumeInput.value) + 10
   music.volume = volumeInput.value / 100
}

// volumeInput
volumeInput.addEventListener('change', volumeInputRange)
function volumeInputRange(){
   alert('Range')
}



// perSong
perSong.addEventListener('click', perSongBtn)
function perSongBtn(){
   songMusic.innerHTML = songAlbum[1].name
   artistMusic.innerHTML = songAlbum[1].artist
   musicLogo.innerHTML = `<img src="${songAlbum[1].img}" alt="">`
   music.innerHTML = `<source src="${songAlbum[1].src}">`
}

// nextSong
nextSong.addEventListener('click', nextSongBtn)
function nextSongBtn(){
   songMusic.innerHTML = songAlbum[2].name
   artistMusic.innerHTML = songAlbum[2].artist
   musicLogo.innerHTML = `<img src="${songAlbum[2].img}" alt="">`
   music.innerHTML = `<source src="${songAlbum[0].src}">`
}

// volumeBtn

volumeBtn.addEventListener('click', changeVolume)
function changeVolume(){
   volumeBox.classList.toggle('.active-player')
}


// currentTime
music.addEventListener('timeupdate', ()=>{
   let vs = parseInt(music.currentTime % 60)
   let vm = parseInt((music.currentTime / 60) % 60)
   currentTime.innerHTML = vm + ':' + vs
},false)

// musicRange
musicRange.addEventListener('input',handleMusicRange)
function handleMusicRange(){
   music.currentTime = musicRange.value
}

// durationTime


// play
playBtn.addEventListener('click', playMusic)

function playMusic(){
   if (audio.paused) {
      music.play()
      playBtn.innerHTML = `<img src="./images/images-player/images/Pause Squared.png" alt="">`
   }else{
      audio.pause()
      playBtn.innerHTML = `<img src="./images/images-player/images/Next-player.png" alt="">`
   }
   music.addEventListener('ended',()=>{
      playBtn.value = 'Play'
      music.currentTime = 0
   })
}

music.onloadedmetadata = () =>{
   musicRange.max = music.duration
   let s = parseInt(music.duration % 60)
   let m = parseInt((music.duration / 60) % 60)
   durationTime.innerHTML = m + ":" + s
}


music.ontimeupdate = () =>{
   musicRange.value = music.currentTime
}

