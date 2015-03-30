//var game = new Phaser.Game(width, height, Phaser.AUTO, 'game');
var game = new Phaser.Game(641, 1009, Phaser.AUTO, 'game');

var winW = document.body.clientWidth;
var winH = document.body.clientHeight;
var winScale = winW / winH;
var gameScale = 641/1009;
var gameW = winW;
var gameH = winH;
var width, height; //width height of bg img
var score = 0;
var player;
/*var last = null;
var scoreText;*/

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
/*game.state.add('Bt1', Game.Bt1);*/
game.state.add('Bt2', Game.Bt2);
game.state.add('Play', Game.Play);
game.state.add('Over', Game.Over);

game.state.start('Boot');


/*function add_score(i){
	if(i==1) {score++; }
	else if(i==-1) score--;
	else if(i==0) score-=10;
	scoreText.setText("Score: " + score);
}*/