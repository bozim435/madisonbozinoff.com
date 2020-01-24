function draw_y(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var x1 = random(5, max);
	var y1 = random(q1, max);
	var x2 = random(5, x1);
	var x3 = random(x1, max);
	var y2 = random(5, q1);
	var yb = random(y1, max);

	// left line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(x1, x2, k / items);
	    var y = lerp(y1, y2, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// right line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(x1, x3, j / items);
	    var y = lerp(y1, y2, j / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// vertical line
	for (var e = 0; e <= items; e++) {

	    var x = x1;
	    var y = lerp(y1, yb, e / items);
	 
	    ellipse(x, y, pr, pr);

	}

}