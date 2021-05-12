function draw_d(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var more_items = items * 2;
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xA = random(5, q2);
	var yA = random(5, q1);
	var yB = random(q2, max);
	var yC = ((yB - yA) / 2) + yA;

	// vertical line
	for (var q = 0; q <= items; q++) {

	    var x = xA;
	    var y = lerp(yA, yB, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

	var w = random(5, max - xA);
	var h = yB - yA;
	var r = h / 2;

	for (var k = 0; k < more_items; k++) {

		var y = yC + r * Math.cos(1 * Math.PI * k / more_items);
   		var x = xA + r * Math.sin(1 * Math.PI * k / more_items);

		ellipse(x, y, pr, pr);

	}

}