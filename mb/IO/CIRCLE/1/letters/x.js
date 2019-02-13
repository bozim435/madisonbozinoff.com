function draw_x(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xA = random(5, q2);
	var yA = random(5, q1);
	var xC = random(q2, max);
	var xB = max - xA;
	var yB = max - yA;
	var xD = max - xC;

	// left line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(xA, xB, k / items);
	    var y = lerp(yA, yB, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// right line
	for (var l = 0; l <= items; l++) {

	    var x = lerp(xC, xD, l / items);
	    var y = lerp(yA, yB, l / items);
	 
	    ellipse(x, y, pr, pr);

	}

}