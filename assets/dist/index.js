import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js'

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play-stop');
const buttonSound = document.querySelector('#mute-unmuted')
const player = new MediaPlayer({ element: video, plugins: [
    new AutoPlay()
]});
buttonPlay.onclick = () =>  player.toggleRunStop();
video.onclick = () =>  player.toggleRunStop();
buttonSound.onclick = () => player.toggleMuteUnmuted();
