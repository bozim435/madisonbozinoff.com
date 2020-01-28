function draw_j(max) {

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
	var xB = random(q2, max);
	var yA = random(5, q1);
	var mid = ((xB - xA) / 2) + xA;
	var w = xB - xA;
	var yC = random(yA, max - w / 2);
	var r = w / 2;

	// arc
	for (var e = 0; e < items; e++) {

		var y = yC + r * Math.sin(1.1 * Math.PI * e / items);
   		var x = mid + r * Math.cos(1.1 * Math.PI * e / items);

		ellipse(x, y, pr, pr);

	}

	// line
	for (var q = 0; q <= items; q++) {

	    var x = xB;
	    var y = lerp(yA, yC, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

}