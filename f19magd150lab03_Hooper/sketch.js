function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(200);
  print(mouseX);
  print(mouseY);
  print(frameCount);
  
  let leftWall = 250;
  let rightWall = 750;
  let xc = constrain(mouseX, leftWall, rightWall);
  
  stroke(0);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
  
  ellipseMode(CENTER);
  fill('#85FFFE');
  ellipse(mouseX, mouseY, 100,);
  ellipse(mouseX+50, mouseY+100, 85,);
  ellipse(mouseX-100, mouseY-50, 65,);
  ellipse(mouseX+100, mouseY-150, 125,);
  ellipse(mouseX/2, mouseY/2, 40,);
  ellipse(mouseX*1.5, mouseY*2, 180);
  ellipse(pmouseX+300, pmouseY-77, 90,);
  ellipse(pmouseX/2, pmouseY+200, 250,);
  ellipse(xc, 500, 76,);

let x1 = map(mouseX, 0, width, 25, 75);
ellipse(x1, 25, 25, 25);
let x2 = map(mouseX, 0, width, 750, 1000, true);
ellipse(x2, 75, 25, 25);
}