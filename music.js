const musicBtn = document.getElementById('music-btn');
const musicPanel = document.getElementById('music-panel');
const audio = document.getElementById('bg-music');
const trackBtns = document.querySelectorAll('.track-btn');
const playPauseBtn = document.getElementById('play-pause');
const nextTrackBtn = document.getElementById('next-track');
const prevTrackBtn = document.getElementById('prev-track');

const tracks = [
  'sounds/sound1.mp3',
  'sounds/sound2.mp3',
  'sounds/sound3.mp3',
  'sounds/sound4.mp3',
  'sounds/sound5.mp3'
];

let currentTrack = 0;

// Load first track
audio.src = tracks[currentTrack];
audio.autoplay = true;
audio.loop = false;
audio.volume = 0.6;

// Toggle panel
musicBtn.addEventListener('click', () => {
  musicPanel.classList.toggle('show');
});

// Track buttons
trackBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentTrack = parseInt(btn.dataset.index);
    audio.src = tracks[currentTrack];
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  });
});

// Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

// Next/Prev
nextTrackBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

prevTrackBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
});

// Auto next track
audio.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
});

// Autoplay on load
window.addEventListener('DOMContentLoaded', () => {
  audio.play().catch(() => {
    console.log("Autoplay blocked, click music button to start music");
  });
});