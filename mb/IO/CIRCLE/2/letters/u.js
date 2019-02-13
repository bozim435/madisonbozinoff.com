function draw_u(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = random(5, window.innerWidth / 21); // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xA = random(5, q2);
	var xB = random(q2, max);
	var yA = random(5, q1);
	var yC = random(yA, q3);
	var mid = ((xB - xA) / 2) + xA;
	var w = xB - xA;
	var r = w / 2;

	// arc
	for (var e = 0; e < items; e++) {

		var y = yC + r * Math.sin(1.1 * Math.PI * e / items);
   		var x = mid + r * Math.cos(1.1 * Math.PI * e / items);

		ellipse(x, y, pr, pr);

	}

	// left line
	for (var q = 0; q <= items; q++) {

	    var x = xA;
	    var y = lerp(yA, yC, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// right line
	for (var q = 0; q <= items; q++) {

	    var x = xB;
	    var y = lerp(yA, yC, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

}