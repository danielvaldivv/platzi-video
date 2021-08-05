import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';
import AutoPause from '../plugins/AutoPause.js';


const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play-stop');
const buttonSound = document.querySelector('#mute-unmuted')
const player = new MediaPlayer({
    element: video,
    plugins: [ new AutoPlay(), new AutoPause()
]});

buttonPlay.onclick = () =>  player.toggleRunStop();
video.onclick = () =>  player.toggleRunStop();
buttonSound.onclick = () => player.toggleMuteUnmuted();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker. register('/sw.js').catch(error =>{
        console.log(error.message);
    })
}