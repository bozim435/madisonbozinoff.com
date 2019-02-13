function draw_t(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = 5; // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// eights of the canvas
	var e3 = (max / 8) * 3;
	
	// coordinates
	var xA = random(5, q2);
	var yA = random(5, e3);
	var xB = random(q2, max);

	// top line
	for (var k = 0; k <= items; k++) {

	    var x = lerp(xA, xB, k / items);
	    var y = yA;
	 
	    ellipse(x, y, pr, pr);

	}

	// center of top line
	var xC = ((xB - xA) / 2) + xA;
	var yD = random(yA, max);

	// vertical line
	for (var k = 0; k <= items; k++) {

	    var x = xC;
	    var y = lerp(yA, yD, k / items) + items;
	 
	    ellipse(x, y, pr, pr);

	}

	

}