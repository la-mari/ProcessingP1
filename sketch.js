console.log("js page linked");

function setup() {
	createCanvas(1024, 768);
	noStroke();

}



function draw(){
	// createCanvas(1024, 768);
	background(209, 255, 45);

	//leftdino
	beginShape();
	fill(255, 191, 0);
	vertex(100, 240);
	vertex(200, 180);
	vertex(220, 120);
	vertex(160, 40);
	vertex(420, 120);
	vertex(320, 160);
	vertex(400, 180);
	vertex(280, 200);
	vertex(260, 240);
	endShape();
	fill(255, 255, 255);
	ellipse (305, 118, 40, 20);
	fill(0);
	ellipse(310, 120, 16, 16);

	// rightdino
	fill(0, 182, 255);
	beginShape();
	vertex(740, 240);
	vertex(720, 180);
	vertex(580, 160);
	vertex(680, 140);
	vertex(500, 100);
	vertex(840, 20);
	vertex(780, 100);
	vertex(820, 180);
	vertex(920, 240);
	endShape();
	fill(255, 255, 255);
	ellipse(695, 93, 20, 30)
	fill(0)
	ellipse(693, 101, 16, 16)

}