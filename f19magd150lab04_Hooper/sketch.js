var pressed = 0;


function setup() 
{
  createCanvas(800, 800);
}

function draw() 
{
let x = 1;
let moveRight = true;
print(mouseX);
print(mouseY);
  background(200);
	while (moveRight === true && x < 800)
	{
		x=x+1;
	}
	while (moveRight === false && x > 0)
	{
		x=x-1;
	}
	if (x >= 800)
	{
		moveRight = false;
	}
	if (x <= 0)
	{
		moveRight = true
	}  
	if (pressed > 0)
	{
		ellipseMode(CENTER);
		fill('#FEF0C9');
		ellipse(400, 400, 600);
		ellipse(x, 80, 80);
	}
	else
	{
		background(200);
	}
	if (pressed > 1)
	{
		fill('#FFF78F');
		ellipse(400, 400, 550);
		ellipse(x, 80, 80);
	}
	else{}
	if (pressed > 2)
	{
		fill('#E85743');
		ellipse(350, 350, 100);
		ellipse(200, 445, 100);
		ellipse(272, 238, 100);
		ellipse(290, 541, 100);
		ellipse(459, 212, 100);
		ellipse(518, 378, 100);
		ellipse(468, 605, 100);
		ellipse(600, 470, 100);
		ellipse(x, 80, 80);
	}
	else{}
}




function mousePressed()
{
	pressed = pressed+1;
}

function keyPressed()
{
	pressed = pressed-1;
}
