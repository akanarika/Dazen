Game.Bt2 = function (game) {};

Game.Bt2.prototype = {

	create: function () {
		this.game.stage.backgroundColor = "FFF";
		this.act = this.game.add.sprite(0, 0, 'sprite1');
		this.act.frameName = 'Act.png';
		this.act.anchor.setTo(.5);
		this.act.reset(width/2, height/2);
		this.actCon = this.game.add.sprite(0, 0, 'sprite1');
		this.actCon.frameName = 'ActCon.png';
		this.actCon.anchor.setTo(.5);
		this.actCon.reset(width/2, height/2);

		this.act.inputEnabled = true;
		this.act.events.onInputDown.add(function(){game.state.start('Boot');}, this);
	},

};

