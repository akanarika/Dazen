Game = {};

var i=0; // used in Boot update

Game.Boot = function (game) {};
Game.Boot.prototype = {

	preload:function(){
		
		/******scale********/
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.windowConstraints.bottom = "visual";
		this.game.scale.refresh();
		
		/*******load img******/
		this.game.load.atlas('sprite1', 'img/sprite1.png', 'img/sprite1.json');

	},

	create:function(){

		this.background = this.game.add.sprite(0, 0, 'sprite1');
		this.background.frameName = 'PLAYbg.png';
		width = this.background.width;
		height = this.background.height;

		this.logo = this.game.add.sprite(0, 0, 'sprite1');
		this.logo.frameName = 'Logo.png';
		this.logo.anchor.setTo(.5);
		this.logo.reset(width*3/4, height/11);

		this.title = this.game.add.sprite(0, 0, 'sprite1');
		this.title.frameName = 'Title.png';
		this.title.anchor.setTo(.5);
		this.title.reset(width/2, height/3);

		this.button = this.game.add.button(0, 0, 'sprite1', function(){game.state.start('Load');});
		this.button.frameName = 'PLAYbt.png';
		this.button.anchor.setTo(.5);
		this.button.reset(width/2, height*2/3);

		this.bt1 = this.game.add.button(0, 0, 'sprite1', function(){window.open("http://www.coolpad.com", "_blank");}, this);
		this.bt1.frameName = 'bt1.png';
		this.bt1.anchor.setTo(.5);
		this.bt1.reset(width/2 - this.button.width/2 - this.bt1.width*2/3, height*2/3);

		this.bt2 = this.game.add.button(0, 0, 'sprite1', function(){game.state.start('Bt2');}, this);
		this.bt2.frameName = 'bt2.png';
		this.bt2.anchor.setTo(.5);
		this.bt2.reset(width/2 + this.button.width/2 + this.bt1.width*2/3, height*2/3);
	
		this.wing = this.game.add.sprite(0, 0, 'sprite1');
		this.wing.frameName = 'wing.png';
		this.wing.anchor.setTo(.5);
		this.wing.reset(width/2+15, height/4-10);
	
		
	},

	update:function(){
		i++;
		this.wing.angle = 10*Math.sin(i/10);
	}


};


Game.Load = function (game) { };

Game.Load.prototype = {
	preload: function () {
		this.LOADINGbg = this.game.add.sprite(0, 0, 'sprite1');
		this.LOADINGbg.frameName = 'LOADINGbg.png';

		this.LOADINGbar = this.game.add.sprite(0, 0, 'sprite1');
		this.LOADINGbar.frameName = 'LOADINGbar.png';
		this.LOADINGbar.anchor.setTo(.5);
		this.LOADINGbar.reset(width/2, height*2/5);

		this.loading = this.game.add.sprite(0, 0, 'sprite1');
		this.loading.frameName = 'loading.png';
		this.loading.anchor.setTo(.5);
		this.loading.reset(width/2, height/2);

		/**/
		/*******loading page*********/
		this.LOADINGani = this.game.add.sprite(width*3/5, height/5,'sprite1');
		this.LOADINGani.animations.add('loading', ['LOADINGani1.png', 'LOADINGani2.png'], 5, this);
		this.LOADINGani.animations.play('loading');
		//this.LOADINGani1.reset(width*3/4, height/4+30);
		

		this.game.load.atlas('sprite2', 'img/sprite2.png', 'img/sprite2.json');
		//this.game.load.atlasJSONHash('sprite22', 'img/sprite2.png', 'img/sprite2.json');
		
	},
	create: function () {
		this.game.state.start('Play');
	},

	render: function() {
        //this.game.time.advancedTiming = true;
        /*this.game.debug.text(this.game.time.fps || '--', 2, 14, "#ffffff");
        this.game.debug.text(gameW || '--', 2, 24, "#ffffff");
        this.game.debug.text(gameH || '--', 2, 34, "#ffffff");
        this.game.debug.text(this.background.width || '--', 2, 54, "#ffffff");
        this.game.debug.text(this.background.height || '--', 2, 74, "#ffffff");
        this.game.debug.text(this.button.x || '--', 2, 94, "#ffffff");
        this.game.debug.text(this.button.y || '--', 2, 104, "#ffffff");*/

        //this.game.debug.sprite(this.button);

    },
};



