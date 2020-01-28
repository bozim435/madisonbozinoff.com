function draw_q(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var less_items = items / 2;
	var more_items = items * 2;
	var pr = random(5, window.innerWidth / 21); // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// height and width of circle
	var h = random(5, max);
	var w = random(5, max);
	var r = h / 2;

	// coordinates
	var xL = q2;
	var yL = q2 + (h / 2);
	var yL2 = random(yL, max);

	// circle

	// left half
	for (var e = 0; e < more_items; e++) {

		var y = q2 + r * Math.cos(1 * Math.PI * e / more_items);
   		var x = q2 + r * Math.sin(1 * Math.PI * e / more_items);

		ellipse(x, y, pr, pr);

	}

	// right half
	for (var k = 0; k < more_items; k++) {

		var y = q2 + r * - Math.cos(1 * Math.PI * k / more_items);
   		var x = q2 + r * - Math.sin(1 * Math.PI * k / more_items);

		ellipse(x, y, pr, pr);

	}

	// tail
	for (var q = 0; q <= less_items; q++) {

	    var x = xL;
	    var y = lerp(yL, yL2, q / less_items);
	 
	    ellipse(x, y, pr, pr);

	}

}