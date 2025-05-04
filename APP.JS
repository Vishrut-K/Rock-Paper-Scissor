let isMusicPlaying = false;

function toggleMusic() {
    const musicSelect = document.getElementById("music-option").value;
    const audioElement = document.getElementById("background-audio");
    const audioSource = document.getElementById("audio-source");
    const musicButton = document.querySelector(".music-button");


    if (musicSelect) {
        audioSource.src = musicSelect;
        audioElement.load();

        if (!isMusicPlaying) {
            audioElement.play();
            isMusicPlaying = true;
            musicButton.innerText = "⏸ Pause Music";
        } else {
            audioElement.pause();
            isMusicPlaying = false;
            musicButton.innerText = "▶ Play Music";
        }
    } else {
        alert("Please select a music track before playing.");
    }
}

function startGame() {
    const username = document.getElementById('username').value;
    const rounds = document.getElementById('rounds').value;
    const music = document.getElementById('music').checked ? 'On' : 'Off';
    const theme = document.getElementById('theme').value;

    console.log(`Starting game with username: ${username}, rounds: ${rounds}, music: ${music}, theme: ${theme}`);

    if (username.trim()) {
        localStorage.setItem("username", username);
        localStorage.setItem("rounds", rounds);
        localStorage.setItem("music-option", selectedMusic);
        window.location.href = "game.html"; // Redirect to the game page
    } else {
        alert("Please enter your name before starting the game.");
    }
}
