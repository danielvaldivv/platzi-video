import MediaPlayer from './MediaPlayer';
import AutoPlay from '../plugins/AutoPlay';
import AutoPause from '../plugins/AutoPause';


const video = document.querySelector('video');
const buttonPlay:HTMLMediaElement = document.querySelector('#play-stop');
const buttonSound:HTMLMediaElement = document.querySelector('#mute-unmuted')
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