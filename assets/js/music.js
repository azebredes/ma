//audio

var audio = document.getElementById('audio-player');
var source = document.getElementById('audio-src');
if(Math.floor((Math.random() * 10) + 1) < 5) {
  source.src="assets/audio/audio2.mp3";
} else {
  source.src="assets/audio/audio1.mp3";
}
audio.load();
audio.play();