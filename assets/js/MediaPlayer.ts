import { relative } from "path/posix";

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }

    private initPlugins() {

        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    toggleRunStop() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();

        }
    }

    toggleMuteUnmuted() {
        if (this.media.muted) {
            this.media.muted = false;
        } else {
            this.media.muted = true;
        }
    }

    play() {
        this.media.play();
    }

    stop() {
        this.media.pause();
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }
}






export default MediaPlayer;