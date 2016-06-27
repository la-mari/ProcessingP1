console.log("js page linked");

function setup() {

}



function draw(){
	createCanvas(1024, 768);
	background(100);
	strokeWeight(10);

	fill(255, 255, 0);
	rect(100, 100, 300, 300);

	fill(255, 0, 0, 100); //fourth fill element is transparency
	rect(250, 250, 300, 300);

	fill(200, 100); //two arguments is grayscale with transparency
	rect(150, 150, 300, 300);


}