const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');

playPauseButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

volumeControl.addEventListener('input', function () {
    audio.volume = volumeControl.value;
});
