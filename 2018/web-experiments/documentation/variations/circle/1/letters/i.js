function draw_i(max) {

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
	var xB = random(q2, max);
	
	// top line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xA, xB, j / items);
	    var y = yA;
	 
	    ellipse(x, y, pr, pr);

	}

	// secondary coordinates
	var xC = ((xB - xA) / 2) + xA;
	var yD = random(yA, max);

	// vertical lines
	for (var k = 0; k <= items; k++) {

	    var x = xC;
	    var y = lerp(yA, yD, k / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// bottom line
	for (var i = 0; i <= items; i++) {

	    var x = lerp(xA, xB, i / items);
	    var y = yD;
	 
	    ellipse(x, y, pr, pr);

	}


}