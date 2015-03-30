
Game.Play = function (game) {};

Game.Play.prototype = {

	create: function () {

		this.cursor = game.input.keyboard.createCursorKeys();

		this.playSky = this.game.add.sprite(0,0,'sprite2');
		this.playSky.frameName = 'sky.png';

		this.playSand = this.game.add.sprite(0,0,'sprite2');
		this.playSand.frameName = 'sand.png';

		this.playSea = this.game.add.sprite(0,0,'sprite2');
		this.playSea.frameName = 'sea.png';

		this.playWater = this.game.add.sprite(0,0,'sprite2');
		this.playWater.frameName = 'water.png';

		this.leaf1 = this.game.add.sprite(0,0,'sprite2');
		this.leaf1.frameName = 'leaf1.png';
		this.leaf1.anchor.setTo(.5);
		this.leaf1.reset(0, height/5);

		this.leaf2 = this.game.add.sprite(0,0,'sprite2');
		this.leaf2.frameName = 'leaf2.png';
		this.leaf2.anchor.setTo(.5);
		this.leaf2.reset(width-10, height/5);

		this.shoe = this.game.add.sprite(10, height*5/6,'sprite2');
		this.shoe.frameName = 'shoe.png';

		this.star = this.game.add.sprite(width*3/4, height*5/6,'sprite2');
		this.star.frameName = 'star.png';
		
		//this.game.load.spritesheet('sprite2','player1.png','player2.png');
		//this.player.animation.add('happy', Phaser.Animation.generateFrameNames('player',1,2,'.png'), 5, ture);
		this.player = this.game.add.sprite(width/2, height/2, 'sprite2');
		this.player.frameName = 'player1.png';
		this.player.anchor.setTo(.5);
		this.player.reset(width/2, height/3);
		this.player.animations.add('happy', ['player2.png'], 5, this);
		this.player.animations.add('sad', ['player3.png'], 5, this);

		this.bird = this.game.add.sprite(width*3/5, height/30, 'sprite2');
		this.bird.frameName = 'bird1.png';
		this.bird.animations.add('happy', ['bird2.png'], 5, this);
		this.bird.animations.add('sad', ['bird3.png'], 5, this);

		this.coins = game.add.group();
		this.nets = game.add.group();
		this.sharks = game.add.group();

		this.coins.createMultiple(100, 'sprite2', 'coin.png');
		this.nets.createMultiple(30, 'sprite2', 'net.png');
		this.sharks.createMultiple(100, 'sprite2', 'shark.png');

		this.timer = this.game.time.events.loop(2*Phaser.Timer.SECOND, this.add_row, this);

	},

	update: function() {

		if(this.player.x>this.game.input.x+10) this.player.x= this.player.x-10;
		else if(this.player.x<this.game.input.x-10) this.player.x=this.player.x+10;
		
		this.coins.forEach(function(item){
			item.y = item.y - 2;
			if(item.y<height*3/10){item.kill();} 
		});
		this.sharks.forEach(function(item){
			item.y = item.y - 2;
			if(item.y<height*3/10){item.kill();} 
		});
		this.nets.forEach(function(item){
			item.y = item.y - 2;
			if(item.y<height*3/10){item.kill();} 
		});

	},

	render: function() {
		 this.game.debug.text(this.game.input.x || '--', 2, 24, "#ffffff");
	},


	add_row: function() {
		
		for(var i=1; i<6;){
			var ran = Math.random();
			if(ran<.1) {this.add_one(1,i);i++;}//shark
			else if(ran<.2) {this.add_one(2,i);i++}//coin
			else if(ran<.3){this.add_one(3,i);i=i+2}//net
			else { i++;}
		}

	},

	add_one: function(n,i) {
		var one;
		switch(n){
			case 1:
				one = this.sharks.getFirstDead();
				break;
			case 2:
				one = this.coins.getFirstDead();
				break;
			case 3:
				one = this.nets.getFirstDead();
				break;
		}
		one.anchor.setTo(.5);
		one.reset(width*i/5-width/10, height*7/10);
	}
	

};

