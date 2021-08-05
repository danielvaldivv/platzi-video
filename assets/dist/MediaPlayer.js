function MediaPlayer(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
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
};

MediaPlayer.prototype.toggleRunStop = function() {
    if (this.media.paused) {
        this.media.play()
    } else {
        this.media.pause()

    }
}

MediaPlayer.prototype.toggleMuteUnmuted = function() {
    if (this.media.muted ) {
        this.media.muted = false;
        this.media.unmuted = true;
    } else  {
        this.media.muted = true;
    }
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.stop = function() {
    this.media.pause();
}
MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function() {
    this.media.unmuted = false;
}

export default MediaPlayer;