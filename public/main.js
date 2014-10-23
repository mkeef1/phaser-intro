var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update:update});

function preload(){
  game.load.image('bear', '/img/8559402848_9fcd90d20b_b.jpg');
  game.load.image('frog', '/img/demo-image1.jpg');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');
}

var s1;

function create(){
  var bot = game.add.sprite(200, 200, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 15, true);

  s1 = game.add.sprite(20, 30, 'bear');
  var s2 = game.add.sprite(60, 60, 'frog');
  s2.scale.setTo(.1);
  s1.scale.setTo(.1);

  game.physics.enable(s1, Phaser.Physics.ARCADE);
  game.physics.enable(s2, Phaser.Physics.ARCADE);

  s1.body.velocity.x = 75;

  var text = "- phaser -\n move the bear! \n watch the flowers go!";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  var t = game.add.text(game.world.centerX-300, 0, text, style);

  var tween = game.add.tween(s2);
  tween.to({x:600}, 1000);
  tween.start();

  tween = game.add.tween(bot);
  tween.to({y:300}, 1500);
  tween.start();
}

function update(){
  if(game.physics.arcade.distanceToPointer(s1, game.input.activePointer) > 8){
    game.physics.arcade.moveToPointer(s1, 300);
  }else{
    s1.body.velocity.set(0);
  }
}
