var img;
var img2;
var img3;
var img4;

function preload(){
	img = loadImage("that-aint-no-goddamn-tea-thats-bottom-text-998306.png");
	img2= loadImage("latcat.jpg");
	img3= loadImage("that-aint-no-goddamn-tea-thats-bottom-text-998306.png");
	img4= loadImage("latcat.jpg");//All the images are loaded in.
	mfRoost= loadSound("roostersound.wav");//The sound is loaded in.
}
function setup() {
  createCanvas(1000, 1084);
  noise = new p5.Noise('pink');
  reverb = new p5.Reverb();//Slap on a reverb because why not.
  mfRoost.setVolume(0.3);
  reverb.process(mfRoost, 3, 2);
  mfRoost.loop();//make sure the sound loops so the rate change is able to be noticed.
}

function draw() {
  background(0);
  let speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  mfRoost.rate(speed);//Lines 24-26 are pretty much ripped straight from the reference page for rate.
  
  img3.filter(GRAY);
 
  image(img, 0, 0, width/2, height/2);
 
  image(img3, 500, 542, width/2, height/2);
  
  image(img2, 0, 542, width/2, height/2);
  
  push();
  tint('#FF1301');
  image(img4, 500, 0, width/2, height/2);
  pop();//Upon actually running this I've come to the conclusion  that I've created an abomination.
}

