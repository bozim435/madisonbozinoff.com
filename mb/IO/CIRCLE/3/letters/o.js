function draw_o(max) {

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
	var h = random(5, max);
	var w = random(5, max);
	var r = h / 2;

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

}