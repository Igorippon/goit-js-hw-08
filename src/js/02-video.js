import Player from '@vimeo/player'; 

const iframe = document.querySelector('#vimeo-player')
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const STORAGE_KEY = "videoplayer-current-time"

const onPlay = function ({seconds}) {
    localStorage.setItem(STORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000)); 

const LS_Play = localStorage.getItem(STORAGE_KEY) || 0;

player.setCurrentTime(LS_Play).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});





    
