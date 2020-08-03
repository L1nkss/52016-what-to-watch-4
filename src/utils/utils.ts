const runVideoFullScreen = (player) => {
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.mozRequestFullScreen) {
    player.mozRequestFullScreen();
  } else if (player.webkitRequestFullscreen) {
    player.webkitRequestFullscreen();
  } else if (player.msRequestFullscreen) {
    player.msRequestFullscreen();
  }
};


export {runVideoFullScreen};
