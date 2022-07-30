
var videoGato = document.getElementById("videoGato");

videoGato.play();
videoGato.pause();
videoGato.currentTime = 0;

var botonPlay = document.getElementById("botonPlay");

botonPlay.addEventListener("click",()=>{
    videoGato.play();
})