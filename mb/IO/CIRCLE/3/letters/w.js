function draw_w(max) {

	strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xb1 = random(q1, q3);
	var y1 = random(q3, max);
	var xb2 = random(xb1, max);
	var x2 = random(5, xb1);
	var x3 = random(xb1, xb2);
	var y2 = random(5, q3);	
	var x4 = random(xb2, max);

	// leftmost line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(xb1, x2, k / items);
	    var y = lerp(y1, y2, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// inner left line
	for (var l = 0; l <= items; l++) {

	    var x = lerp(xb1, x3, l / items);
	    var y = lerp(y1, y2, l / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// inner right line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xb2, x3, j / items);
	    var y = lerp(y1, y2, j / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// rightmost line
	for (var o = 0; o <= items; o++) {

	    var x = lerp(xb2, x4, o / items);
	    var y = lerp(y1, y2, o / items);
	 
	    ellipse(x, y, pr, pr);

	}

}