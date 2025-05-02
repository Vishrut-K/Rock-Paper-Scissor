function startGame() {
    const username = document.getElementById('username').value;
    const rounds = document.getElementById('rounds').value;
    const music = document.getElementById('music').checked ? 'On' : 'Off';
    const theme = document.getElementById('theme').value;
  
    if (username) {
      // Consider using a server-side script to handle theme selection
      // This example uses a hypothetical function "setTheme"
      setTheme(theme);
  
      alert(`Starting game for ${username} with ${rounds} rounds. Music is ${music}. Theme is ${theme}`);
    } else {
      alert('Please enter your name.');
    }
  }
  
  // This is a hypothetical function, replace with your actual theme handling logic
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
  }
  // Replace with your actual ad network's script and configuration
function loadAds() {
    // Example using Google AdSense
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  // Call the loadAds function on page load
  window.onload = loadAds;