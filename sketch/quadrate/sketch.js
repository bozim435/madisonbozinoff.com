var t;

function setup() {
  
	createCanvas(500, 500);
	t = new Turtle();
	
}

function draw() {
  
	background(230);
	noFill();
	stroke(0);
	strokeWeight(3);

  for (var m = 0; m < 100; m++) {

    t.penUp();
    t.moveTo(random(50, 700), floor(random(3, 15)) * 50);
    t.penDown();

    for (var j = 0; j < 4; j++) {

      stroke(255, 165, 0, 100);

      t.penDown();
      t.moveForward(60);

      for (var i = 0; i < 3; i++) {
        
        t.turnLeft(30);
        t.moveForward(1);

      }

    }

  }

  for (var l = 0; l < 150; l++) {

    t.penUp();
    t.moveTo(floor(random(2, 24)) * 30, random(100, 700));
    t.penDown();

    for (var j = 0; j < 4; j++) {

      stroke(255, 20, 147, 120);

      t.penUp();
      t.penDown();
      t.moveForward(30);

      for (var i = 0; i < 3; i++) {
        
        t.turnLeft(30);
        t.moveForward(1);

      }

    }
    
  }

  for (var k = 0; k < 4; k++) {

    t.penUp();
    t.moveTo(floor(random(1, 8)) * 90, random(150, 650));
    t.penDown();

    for (var j = 0; j < 4; j++) {

      stroke(0, 200);

      t.penUp();
      t.penDown();
      t.moveForward(160);

      for (var i = 0; i < 9; i++) {
        
        t.turnLeft(10);
        t.moveForward(1);

      }

    }
    
  }

	noLoop();
	
}



