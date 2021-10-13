function preload() {
	world_start = loadSound("world_start.wav");
	getcoin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	die_mario = loadSound("mariodie.wav");
	game_over  = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas")
	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent("webcam")
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
  
}
 function modelLoaded(){
console.log("model loaded successfully!")
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
	game()
}






