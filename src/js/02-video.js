import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(e.seconds));
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .catch(function (error) {
    console.error(error);
  });
