
Game.Play = function (game) {};

Game.Play.prototype = {

	create: function () {
		this.playBg = this.game.add.sprite(0,0,'playBg',4);
		this.playBg.width = bgWidth;
		this.playBg.height = bgHeight;
		this.playBg.anchor.set(.5);
		this.playBg.reset(width/2,height/2);
		this.anim = this.playBg.animations.add('act',[0,1,2,3,4],30,true);

	},

	update: function() {
		this.playBg.animations.play('act');

	},

};

