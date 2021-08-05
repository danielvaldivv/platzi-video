class MediaPlayer {
    media: HTMLMediaElement;
    plugins:any

    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];

        this.initPlugins();
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