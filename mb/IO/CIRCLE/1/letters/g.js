function draw_g(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var less_items = items / 2;
	var more_items = items * 2;
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	//coordinates
	var h = random(5, max);
	var w = random(5, max);
	var yC = (h / 2) + q2;
	var xC = q2 - (h / 4);
	var r = h / 2;

	// arc
	for (var f = 0; f < more_items; f++) {

		var y = q2 + r * - Math.cos(1 * Math.PI * f / more_items);
   		var x = q2 + r * - Math.sin(1 * Math.PI * f / more_items);

		ellipse(x, y, pr, pr);

	}

	// vertical line
	for (var q = 0; q <= items; q++) {

	    var x = q2;
	    var y = lerp(q2, yC, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// horizontal line
	for (var j = 0; j <= less_items; j++) {

	    var x = lerp(q2, xC, j / less_items);
	    var y = q2;
	 
	    ellipse(x, y, pr, pr);

	}

}