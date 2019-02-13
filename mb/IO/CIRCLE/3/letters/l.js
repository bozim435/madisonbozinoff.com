function draw_l(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	// coordinates
	var xA = random(5, q2);
	var yA = random(5, q2);
	var yB = random(q2, max);
	var xD = random(q2, max);

	// vertical line
	for (var k = 0; k <= items; k++) {

	    var x = xA;
	    var y = lerp(yA, yB, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// horizontal line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xA, xD, j / items);
	    var y = yB;
	 
	    ellipse(x, y, pr, pr);

	}

}