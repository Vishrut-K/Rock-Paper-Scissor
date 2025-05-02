function startGame() {
    const username = document.getElementById('username').value;
    const rounds = document.getElementById('rounds').value;
    const music = document.getElementById('music').checked ? 'On' : 'Off';

    if (username) {
        alert(Starting game for ${username} with ${rounds} rounds. Music is ${music}.);
        // You can redirect or start the game logic here
    } else {
        alert('Please enter your name.');
    }
}