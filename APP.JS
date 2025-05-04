let isMusicPlaying = false;
let selectedMusic;

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
        saveUserPreferences(username, rounds, music, theme);
        window.location.href = "game.html"; // Redirect to the game page
    } else {
        alert("Please enter your name before starting the game.");
    }
}

function saveUserPreferences(username, rounds, music, theme) {
    // Check if localStorage is available
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("gameUsername", username);
        localStorage.setItem("gameRounds", rounds);
        localStorage.setItem("gameMusic", music);
        localStorage.setItem("gameTheme", theme);
        
        console.log("User preferences saved");
    }
}

function setTheme(theme) {
    let backgroundImage;
    switch (theme) {
        case 'forest':
            backgroundImage = 'url(/forest.jpg)';
            break;
        case 'sea':
            backgroundImage = 'url(/sea.jpg)';
            break;
        default:
            backgroundImage = 'none';
    }
    document.body.style.backgroundImage = backgroundImage;
    document.body.className = `theme-${theme}`;
}

// Add initialization function and event listener
function initializePage() {
    document.getElementById('theme').addEventListener('change', function() {
        setTheme(this.value);
    });
    
    console.log("Page initialized");
}

// Call initialization when document is loaded
document.addEventListener('DOMContentLoaded', initializePage);
