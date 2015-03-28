Game = {};

var width = document.body.clientWidth;
var height = document.body.clientHeight;
var scale = width / height;
var bgWidth, bgHeight;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'game');

Game.Boot = function (game) {};
Game.Boot.prototype = {

	preload:function(){
		this.game.load.image('background', 'img/titl.jpg');
		this.game.load.image('startBt', 'img/button.png');
		this.game.load.spritesheet('playBg', 'img/bg.jpg',1600/5,416);
		//game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
	},

	create:function(){
		//this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.background = this.game.add.sprite(0, 0, 'background');
		//bgWidth = this.background.width;
		//bgHeight = this.background.height;
		this.bgScale = this.background.width / this.background.height;
		if(this.bgScale >= scale){
			this.background.width = width;
			this.background.height = width / this.bgScale;
		}else{
			this.background.height = height;
			this.background.width = height * this.bgScale;
		}
		bgWidth = this.background.width;
		bgHeight = this.background.height;
		this.background.anchor.set(.5);
		this.background.reset(width/2,height/2);
		this.button = this.game.add.button(this.background.width/2, this.background.height*2/3, 'startBt', function(){game.state.start('Play');}, this);
		this.button.width = this.button.width * 3/2;
		this.button.height = this.button.height * 3/2;
		this.button.anchor.set(.5);
		this.button.reset(width/2, height*2/3);
	},

	update:function(){
		
	},

	restart_game: function(){
		
	},
};

//game.state.add('main', main_state);
//game.state.start('main');
