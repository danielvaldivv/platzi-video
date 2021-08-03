function MediaPlayer(config) {
    this.media = config.element;
}

MediaPlayer.prototype.toggleRunStop = function() {
    if (this.media.paused) {
        this.media.play()
    } else {
        this.media.pause()
    }
}

MediaPlayer.prototype.run = function() {
    this.media.play();
};

MediaPlayer.prototype.stop = function() {
    this.media.pause();
}

export default MediaPlayer;