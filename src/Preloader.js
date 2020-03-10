Cyber.Preloader = function(game) {};
Cyber.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite((Cyber._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		
	},
	create: function() {
		
	}
};