//var game = new Phaser.Game(width, height, Phaser.AUTO, 'game');
var game = new Phaser.Game(641, 1009, Phaser.AUTO, 'game');

var winW = document.body.clientWidth;
var winH = document.body.clientHeight;
var winScale = winW / winH;
var gameScale = 641/1009;
var gameW = winW;
var gameH = winH;
var width, height; //width height of bg img

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
/*game.state.add('Bt1', Game.Bt1);*/
game.state.add('Bt2', Game.Bt2);
game.state.add('Play', Game.Play);
game.state.add('Over', Game.Over);

game.state.start('Boot');