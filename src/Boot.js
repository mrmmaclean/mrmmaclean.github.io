var Cyber = {
	_WIDTH: 320,
	_HEIGHT: 480
};
Cyber.Boot = function(game) {};
Cyber.Boot.prototype = {
	preload: function() {
		this.load.image('preloaderBG', 'img/loading-bg.png');
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
		this.game.state.start('Preloader');
	}
};