
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
		this.player.animations.add('norm', ['player1.png']);
		this.player.animations.add('happy', ['player2.png']);
		this.player.animations.add('sad', ['player3.png']);
		
		//this.player.animations.loopCount = 5;
		//player = this.player;


		this.bird = this.game.add.sprite(width*3/5, height/30, 'sprite2');
		this.bird.frameName = 'bird1.png';
		this.bird.animations.add('norm', ['bird1.png']);
		this.bird.animations.add('happy', ['bird2.png']);
		this.bird.animations.add('sad', ['bird3.png']);
		bird = this.bird;

		this.coins = game.add.group();
		this.nets = game.add.group();
		this.sharks = game.add.group();

		this.coins.createMultiple(100, 'sprite2', 'coin.png');
		this.coins.scale.set(.8);
		this.nets.createMultiple(30, 'sprite2', 'net.png');
		this.sharks.createMultiple(100, 'sprite2', 'shark.png');
		

		this.timer = this.game.time.events.loop(2*Phaser.Timer.SECOND, this.add_row, this);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.physics.enable( [this.player, this.coins, this.sharks, this.nets], Phaser.Physics.ARCADE);
		this.player.enableBody = true;
		this.coins.enableBody = true;
		this.sharks.enableBody = true;
		this.nets.enableBody = true;
		this.player.body.setSize(this.player.width/3, this.player.height*2/3, 0,30);
		this.originY = this.player.body.y;


		this.coins.checkWorldBounds = true;
		this.coins.outOfBoundsKill = true;
    	this.sharks.checkWorldBounds = true;
    	this.sharks.outOfBoundsKill = true;
    	this.nets.checkWorldBounds = true;
    	this.nets.outOfBoundsKill = true;

		//scoreText = this.game.add.text(width-200, 10, "Score: " + score, { font: '34px Arial', fill: '#fff' });
		
   	 	//this.player.input.onHold.add(function(){this.jump;});
	},

	update: function() {

		if(this.player.x>this.game.input.x+10) this.player.x= this.player.x-10;
		else if(this.player.x<this.game.input.x-10) this.player.x=this.player.x+10;
		
		this.coins.forEach(function(item){item.y-=2;});
		this.sharks.forEach(function(item){item.y-=2;});
		this.nets.forEach(function(item){item.y-=2;});

		game.physics.arcade.overlap(this.player, this.coins, this.add_score, null, this);
		game.physics.arcade.overlap(this.player, this.sharks, this.add_score, null, this);
		/*this.coins.forEach(function(item){
			item.y = item.y - 2;
			if(item.y<height*3/10){item.kill();} 
			//if(item.overlap(player)){score++; item.kill();}
			if((item.x<(player.x+30))&&(item.x>(player.x-30))&&(item.y<(player.y+player.height/2-40))) {
				last = item;
				item.kill();
				player.animations.play('happy');
				bird.animations.play('happy');
			}
		});

		this.sharks.forEach(function(item){
			item.y = item.y - 3;
			if(item.y<height*3/10){item.kill();}
			if((item.x<(player.x+30))&&(item.x>(player.x-30))&&(item.y<(player.y+player.height/2-40))) {
				last = item;
				item.kill();
				player.animations.play('sad');
				bird.animations.play('sad');
			}
		});

		this.nets.forEach(function(item){
			item.y = item.y - 2;
			if(item.y<height*3/10){item.kill();} 
			if((item.x<(player.x+30))&&(item.x>(player.x-30))&&(item.y<(player.y+player.height/2-100))) { 
				last = item;
				item.kill();
				player.animations.play('sad');
				bird.animations.play('sad');
			}
		});*/
		//this.game.input.touch.onTouchStart = this.jump;


	},

	add_score: function(_player,_item) {
		score++;
		_item.kill();
		player.animations.play('happy');
		bird.animations.play('happy');
	},

	render: function() {
		this.game.debug.text(this.game.time.fps || '--', 2, 24, "#ffffff");
		this.game.debug.text(score || '--', 2, 44, "#ffffff");
		/*this.game.debug.text(this.player.x || '--', 2, 64, "#ffffff");
		//this.game.debug.text(player.y+player.height/2 || '--', 2, 84, "#ffffff");
		this.game.debug.body(this.player);*/
		//this.game.debug.body(this.coins);
	},

	jump: function() {
		this.jumped = false;
		if(!this.jumped){
			this.player.body.velocity.y = -300;
			this.player.body.gravity.y = 700;
			this.jumped = true;
		}
		
	},

	add_row: function() {
		for(var i=1; i<6;){
			var ran = Math.random();
			if(ran<.05) {this.add_one(1,i);i++;}//shark
			else if(ran<.18) {this.add_one(2,i);i++;}//coin
			else if(ran<.22){this.add_one(3,i);i=i+3;}//net
			else { i++;}
		}
		this.player.animations.play('norm');
		this.bird.animations.play('norm');

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
		one.reset(width*i/5-width/10, height*8/10);
	}
	

};

