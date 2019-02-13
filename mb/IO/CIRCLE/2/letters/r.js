function draw_r(max) {

	// strokeWeight(random(0, window.innerWidth / 21));

	// variable elements
	var items = 10; // number of points
	var pr = random(5, window.innerWidth / 21); // radius of the points

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	var min_dist = max / 50;
	
	// coordinates
	var xA = random(5, q1);
	var yA = random(5, q1);
	var yB = random(yA + min_dist, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(xA + min_dist, q3);

	// vertical line
	for (var q = 0; q <= items; q++) {

	    var x = xA;
	    var y = lerp(yA, yB, q / items);
	 
	    ellipse(x, y, pr, pr);

	}

	// top line
	for (var j = 0; j <= items; j++) {

	    var x = lerp(xA, xD, j / items);
	    var y = yA;
	 
	    ellipse(x, y, pr, pr);

	}

	// bottom line
	for (var e = 0; e <= items; e++) {

	    var x = lerp(xA, xD, e / items);
	    var y = yC;
	 
	    ellipse(x, y, pr, pr);

	}

	// lengths
	var w = (yB - yA) / 2;
	var h = yC - yA;
	var yH = (h / 2) + yA;
	var r = h / 2;

	// arc
	for (var k = 0; k < items; k++) {

		var y = yH + r * Math.cos(1.1 * Math.PI * k / items);
   		var x = xD + r * Math.sin(1.1 * Math.PI * k / items);

		ellipse(x, y, pr, pr);

	}

	// diagonal line
	for (var i = 0; i <= items; i++) {

	    var x = lerp(xA, xD + (w / 2), i / items);
	    var y = lerp(yC, yB, i / items);
	 
	    ellipse(x, y, pr, pr);

	}

}