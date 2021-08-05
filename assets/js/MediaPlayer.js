class MediaPlayer {
    constructor(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];

        this._initPlugins();
    }
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            }
        };

        this.plugins.forEach(plugin => {
            plugin.run(player);
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
            this.media.unmuted = true;
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
        this.media.unmuted = false;
    }
}






export default MediaPlayer;