var t;

function setup() {

	createCanvas(500, 500);
	noFill();
	stroke(255, 80);
	strokeWeight(1);
	background(0, 50, 50);

	frameRate(3);
	noLoop();

	t = new Turtle();

}

function draw() {

	drawFeather();

}



function drawFeather() {

	t.penUp();
	t.moveTo(250, 250);
	t.moveTo(100, 400);
	t.turnLeft(15);
	t.moveForward(15);
	t.penDown();

	for (var i = 0; i < random(30, 50); i++) {

		t.moveForward(random(2,10));
		t.turnLeft(1.5);
		drawSingle();
		t.moveForward(1);
		t.turnLeft(random(2));
		drawSingle();


	}

	for (var j = 0; j < 10; j++) {

		drawTop();
		
	}

}

function drawSingle() {

	t.pushState();

	for (i = 0; i < 10; i++) {

		t.moveForward(random(3, 15));
		t.turnLeft(random(4, 15));

	}

	t.turnRight(30);

	t.popState();

	t.pushState();

	t.turnRight(32);

	for (i = 0; i < 4; i++) {

		t.moveForward(random(3, 10));
		t.turnLeft(random(3,4));

	}

	for (i = 0; i < 6; i++) {

		t.moveForward(random(9, 10));
		t.turnRight(random(3,4));

	}

	t.popState();

}

function drawTop() {

	t.pushState();

	for (i = 0; i < 10; i++) {

		t.moveForward(9, 12);
		t.turnLeft(random(1, 15));

	}

	t.popState();

	t.pushState();

	for (i = 0; i < 3; i++) {

		t.moveForward(9, 12);
		t.turnRight(random(1, 7));

	}

	for (i = 0; i < 7; i++) {

		t.moveForward(9, 12);
		t.turnLeft(random(1, 7));

	}

	t.popState();

		t.pushState();

	for (i = 0; i < 10; i++) {

		t.moveForward(9, 12);
		t.turnLeft(random(1, 3));

	}

	t.popState();

}
