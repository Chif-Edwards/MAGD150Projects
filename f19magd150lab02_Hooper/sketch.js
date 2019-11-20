function setup() {
  createCanvas(500, 500);
  
}

function draw() 
{
	{
		colorMode(RGB, 255, 255, 255, 100);
		background(14, 0, 71);
		strokeWeight(2.5);
		stroke(0);
		fill(0, 140, 89, 100);
		arc(250.5, 500, 500, 100, PI, TWO_PI);
		{
		strokeWeight(1.5);
		stroke(0);
		fill(175);
		triangle(190, 485, 195, 385, 200, 485);
		triangle(197, 405, 190, 395, 235, 355);
		quad(197, 405, 190, 395, 155, 315, 255, 455);  
		}
	}
	{
		colorMode(HSB, 360, 100, 100, 100);
		strokeWeight();
		fill(47, 100, 100, 45);
			ellipse(255, 10, 150, 300);
		fill(30, 95, 91, 50);
			ellipse(255, 115, 75);
		fill(4, 100, 53, 100);
			ellipse(255, 125, 50);
	}
	{
		colorMode(RGB);
		strokeWeight(2.5);
		fill('#E8B79B');
			ellipse(500, 250.5, 200);
		fill('#5979FF');
			ellipse(0, 350, 150);
		strokeWeight(0);
		fill('#E8786B');
			ellipse(490, 245.5, 175);
		fill('#9B67FF');
			ellipse(7, 343, 130);
	}
	{
		strokeWeight(5);
		stroke(255);
		point(25, 100);
		point(45, 76);
		point(100, 250);
		point(100, 173);
		point(250, 72);
		point(155, 200);
		point(30, 231);
		point(135, 45);
		point(210, 150);
		point(172, 104);
		point(425, 100);
		point(445, 76);
		point(350, 250);
		point(345, 173);
		point(350, 72);
		point(255, 200);
		point(300, 231);
		point(335, 345);
		point(410, 450);
		point(272, 304);
		point(235, 400);
		point(400, 400);
		point(125, 425);
		point(130, 375);
		point(200, 300);
		point(475, 425);
		point(320, 425);
	}
}