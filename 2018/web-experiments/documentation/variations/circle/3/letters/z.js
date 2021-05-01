function draw_z(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xA = random(5, q3);
	var yA = random(5, q1);
	var xB = random(xA, max);
	var yC = random(yA, max);

	// top line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xA, xB, j / items);
	    var y = yA;
	 
	    ellipse(x, y, pr, pr);

	}

	// bottom line
	for (var i = 0; i <= items; i++) {

	    var x = lerp(xA, xB, i / items);
	    var y = yC;
	 
	    ellipse(x, y, pr, pr);

	}

	// diagonal line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(xB, xA, k / items);
	    var y = lerp(yA, yC, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

}