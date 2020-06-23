var t;

function setup() {
  
	createCanvas(500, 400);
	t = new Turtle();
	
}

function draw() {
  
	background(200);
	noFill();
	stroke(0);
	strokeWeight(1);

	t.pushState();

	stroke(255);

	t.penUp();
	t.moveTo(220, 150);
	t.penDown();
	t.turnLeft(20);
	t.moveForward(184);

	t.penUp();
	t.moveTo(233, 140);
	t.penDown();
	t.moveForward(167);

	t.penUp();
	t.moveTo(245, 130);
	t.penDown();
	t.moveForward(150);

	t.penUp();
	t.moveTo(255, 120);
	t.penDown();
	t.moveForward(135);

	t.penUp();
	t.moveTo(269, 109);
	t.penDown();
	t.moveForward(112);

	t.penUp();
	t.moveTo(279, 100);
	t.penDown();
	t.moveForward(97);

	t.penUp();
	t.moveTo(290, 90);
	t.penDown();
	t.moveForward(77);

	t.penUp();
	t.moveTo(302, 80);
	t.penDown();
	t.moveForward(55);

	t.penUp();
	t.moveTo(210, 160);
	t.penDown();
	t.moveForward(198);

	t.penUp();
	t.moveTo(200, 170);
	t.penDown();
	t.moveForward(210);

	t.penUp();
	t.moveTo(190, 180);
	t.penDown();
	t.moveForward(222);

	t.penUp();
	t.moveTo(178, 190);
	t.penDown();
	t.moveForward(237);

	t.penUp();
	t.moveTo(166, 200);
	t.penDown();
	t.moveForward(250);

	t.penUp();
	t.moveTo(150, 212);
	t.penDown();
	t.moveForward(267);

	t.penUp();
	t.moveTo(140, 222);
	t.penDown();
	t.moveForward(280);

	t.penUp();
	t.moveTo(130, 232);
	t.penDown();
	t.moveForward(285);

	t.penUp();
	t.moveTo(118, 242);
	t.penDown();
	t.moveForward(295);

	t.penUp();
	t.moveTo(106, 253);
	t.penDown();
	t.moveForward(300);

	t.penUp();
	t.moveTo(90, 265);
	t.penDown();
	t.moveForward(315);

	t.penUp();
	t.moveTo(80, 275);
	t.penDown();
	t.moveForward(322);

	t.penUp();
	t.moveTo(66, 287);
	t.penDown();
	t.moveForward(329);

	t.penUp();
	t.moveTo(56, 297);
	t.penDown();
	t.moveForward(336);

	t.penUp();
	t.moveTo(74, 297);
	t.penDown();
	t.moveForward(310);

	t.penUp();
	t.moveTo(90, 297);
	t.penDown();
	t.moveForward(288);

	t.penUp();
	t.moveTo(100, 300);
	t.penDown();
	t.moveForward(270);

	t.penUp();
	t.moveTo(117, 300);
	t.penDown();
	t.moveForward(248);

	t.penUp();
	t.moveTo(133, 300);
	t.penDown();
	t.moveForward(227);

	t.penUp();
	t.moveTo(133, 306);
	t.penDown();
	t.moveForward(223);

	t.penUp();
	t.moveTo(142, 309);
	t.penDown();
	t.moveForward(212);

	t.penUp();
	t.moveTo(160, 309);
	t.penDown();
	t.moveForward(190);

	t.penUp();
	t.moveTo(170, 312);
	t.penDown();
	t.moveForward(175);

	t.penUp();
	t.moveTo(165, 320);
	t.penDown();
	t.moveForward(175);

	t.penUp();
	t.moveTo(183, 320);
	t.penDown();
	t.moveForward(157);

	t.penUp();
	t.moveTo(172, 330);
	t.penDown();
	t.moveForward(166);

	t.penUp();
	t.moveTo(172, 337);
	t.penDown();
	t.moveForward(166);

	t.penUp();
	t.moveTo(172, 343);
	t.penDown();
	t.moveForward(160);

	t.penUp();
	t.moveTo(172, 350);
	t.penDown();
	t.moveForward(148);

	t.penUp();
	t.moveTo(175, 355);
	t.penDown();
	t.moveForward(145);

	t.penUp();
	t.moveTo(173, 362);
	t.penDown();
	t.moveForward(144);

	t.penUp();
	t.moveTo(163, 372);
	t.penDown();
	t.moveForward(145);

	t.penUp();
	t.moveTo(183, 370);
	t.penDown();
	t.moveForward(120);

	t.penUp();
	t.moveTo(225, 360);
	t.penDown();
	t.moveForward(65);


  t.popState();

  stroke(0);
	t.penUp();
  t.moveTo(50, 300);
  t.penDown();
  t.moveTo(300, 82);
  t.turnRight(310);

  for (var i = 0; i < 150; i++) {
    
    t.moveForward(1);
    t.turnRight(1);
    
  }
  
  t.turnRight(15);
  t.moveForward(30);
  t.turnRight(5);
  t.moveForward(30);
  t.turnRight(10);
  t.moveForward(20);
  t.turnLeft(10);
  t.moveForward(30);
  t.turnLeft(10);
  t.moveForward(30);
  t.turnLeft(5);
  t.moveForward(30);
  t.turnRight(15);
  t.moveForward(30);
  t.turnRight(5);
  t.moveForward(30);
  t.turnRight(10);
  t.moveForward(30);
  t.penUp();
  t.moveTo(401, 125);
  t.penDown();
  
  t.turnRight(290);

  for (var j = 0; j < 25; j++) {
    
    t.moveForward(1);
    t.turnRight(1);
    
  }
  
  t.turnRight(70);

  for (var k = 0; k < 18; k++) {
    
    t.moveForward(1);
    t.turnRight(1);
    
  }
  
  t.moveTo(395, 140);
  t.turnLeft(135);
  t.moveForward(15);
  
  t.penUp();
  t.moveTo(350, 140);
  t.penDown();
  
  for (var l = 0; l < 360; l++) {
    
    t.moveForward(2);
    t.turnRight(4);
    
  }
  
  t.penUp();
  t.moveTo(370, 110);
  t.penDown();
  
  for (var m = 0; m < 360; m++) {
    
    t.moveForward(1);
    t.turnRight(8);
    
  }
  
  t.penUp();
  t.moveTo(330, 63);
  t.penDown();
  t.turnRight(115);
  
  for (var n = 0; n < 60; n++) {
    
    t.moveForward(1);
    t.turnRight(2);
    
  }
  
  t.penUp();
  t.moveTo(250, 230);
  t.penDown();
  t.turnRight(150);
  
  for (var o = 0; o < 60; o++) {
    
    t.moveForward(2);
    t.turnRight(1);
    
  }
  
  t.penUp();
  t.moveTo(220, 200);
  t.penDown();
  t.turnRight(210);
  
  for (var p = 0; p < 30; p++) {
    
    t.moveBackward(5);
    t.turnLeft(1);
    
  }

  t.pushState();

  t.penUp();
  t.moveTo(210, 200);
  t.turnRight(30);
  t.penDown();

  for (var p = 0; p < 30; p++) {
    
    t.moveBackward(5);
    t.turnLeft(1);
    
  }

  t.popState();
  
  t.penUp();
  t.moveTo(330, 63);
  t.penDown();
  t.turnRight(210);
  
  for (var q = 0; q < 60; q++) {
    
    t.moveForward(2);
    t.turnRight(2);
    
  }

  t.penUp();
  t.moveTo(326, 65);
  t.penDown();
  t.turnRight(253);

  for (var q = 0; q < 46; q++) {
    
    t.moveForward(2);
    t.turnRight(2);
    
  }

  t.penUp();
  t.moveTo(300, 300);

  for (var s = 0; s < 4; s++) {

	  for (var r = 0; r < 5; r ++) {

	  	t.pushState();

		  t.turnLeft(290);
		  t.penDown();
		  drawFeather();

		  t.popState();

		  t.moveTo(random(270, 300) - s * 40, random(250, 300) - r * random(8, 12));

	  }

  }

  for (var s = 0; s < 3; s++) {

	  for (var r = 0; r < 5; r ++) {

	  	t.pushState();

		  t.turnLeft(290);
		  t.penDown();
		  drawFeather();

		  t.popState();

		  t.moveTo(random(310, 340) - s * 30, random(180, 300) - r * random(8, 20));

	  }

  }

  t.penUp();

  t.moveTo(370, 115);

  strokeWeight(7);
  t.penDown();

  for (var u = 0; u < 360; u++) {

  	t.turnLeft(15);
  	t.moveForward(1);
  	
  }

  t.penUp();
  t.moveTo(350, 140);
  strokeWeight(1);
  t.penDown();
  t.turnLeft(180);
  t.moveForward(38);

  t.penUp();
  t.moveTo(345, 137);
  t.penDown();
  t.moveForward(45);

  t.penUp();
  t.moveTo(340, 134);
  t.penDown();
  t.moveForward(52);

  t.penUp();
  t.moveTo(335, 133);
  t.penDown();
  t.moveForward(55);

  t.penUp();
  t.moveTo(330, 133);
  t.penDown();
  t.moveForward(57);

  t.penUp();
  t.moveTo(325, 134);
  t.penDown();
  t.moveForward(57);

  t.penUp();
  t.moveTo(320, 136);
  t.penDown();
  t.moveForward(54);

  t.penUp();
  t.moveTo(315, 138);
  t.penDown();
  t.moveForward(51);

  t.penUp();
  t.moveTo(310, 142);
  t.penDown();
  t.moveForward(44);

  t.penUp();
  t.moveTo(305, 149);
  t.penDown();
  t.moveForward(31);

  t.penUp();
  t.moveTo(355, 145);
  t.penDown();
  t.moveForward(25);

  t.penUp();
  t.moveTo(336, 220);
  t.penDown();
  t.moveForward(20);

  t.penUp();
  t.moveTo(333, 225);
  t.penDown();
  t.moveForward(24);

  t.penUp();
  t.moveTo(330, 230);
  t.penDown();
  t.moveForward(26);

  t.penUp();
  t.moveTo(326, 232);
  t.penDown();
  t.moveForward(33);

  t.penUp();
  t.moveTo(323, 235);
  t.penDown();
  t.moveForward(38);

  t.penUp();
  t.moveTo(320, 240);
  t.penDown();
  t.moveForward(42);

  t.penUp();
  t.moveTo(317, 245);
  t.penDown();
  t.moveForward(42);

  t.penUp();
  t.moveTo(314, 250);
  t.penDown();
  t.moveForward(42);

  t.penUp();
  t.moveTo(313, 266);
  t.penDown();
  t.moveForward(30);

  t.penUp();
  t.moveTo(311, 272);
  t.penDown();
  t.moveForward(30);

  t.penUp();
  t.moveTo(308, 275);
  t.penDown();
  t.moveForward(30);

  t.penUp();
  t.moveTo(306, 284);
  t.penDown();
  t.moveForward(25);

  t.penUp();
  t.moveTo(340, 220);
  t.penDown();
  t.moveForward(13);

	noLoop();
	
}

function keyPressed() {
  
  if (key == 's') {
    
    save('canvas.jpg');
    
  }
  
}

function drawFeather() {

  for (var p = 0; p < 30; p++) {

  	// stroke(0, 0, 0, 80);
    
    t.moveForward(1);
    t.turnLeft(2);
    
  }


}



