const playBtn = document.getElementById("play-btn");
const player = document.getElementById("radio-player");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  const streamURL = "https://relay1.n0where.net/uvb76"; // Reliable buzzer stream

  if (!isPlaying) {
    player.src = streamURL;
    player.play()
      .then(() => {
        playBtn.textContent = "🔇 Stop The Buzzer";
        isPlaying = true;
      })
      .catch((err) => {
        alert("Failed to play the buzzer stream. Try again later.");
        console.error(err);
      });
  } else {
    player.pause();
    playBtn.textContent = "🔊 Play The Buzzer";
    isPlaying = false;
  }
});
