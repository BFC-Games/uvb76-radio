const playBtn = document.getElementById("play-btn");
const player = document.getElementById("radio-player");

playBtn.addEventListener("click", () => {
  // Only source we use
  const streamURL = "https://relay1.n0where.net/uvb76";

  // Set and play
  if (!player.src) {
    player.src = streamURL;
  }

  player.play()
    .then(() => {
      playBtn.textContent = "🔇 Stop The Buzzer";
    })
    .catch(err => {
      alert("Failed to play. Try again or check stream.");
      console.error(err);
    });
  
  // Toggle pause/play
  playBtn.addEventListener("click", () => {
    if (!player.paused) {
      player.pause();
      playBtn.textContent = "🔊 Play The Buzzer";
    } else {
      player.play();
      playBtn.textContent = "🔇 Stop The Buzzer";
    }
  });
});
