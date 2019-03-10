function draw_j(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	// coordinates
	var xA = random(5, q2);
	var xB = random(xA, max);
	var yA = random(5, q1);
	var mid = ((xB - xA) / 2) + xA;
	var w = xB - xA;
	var yC = random(yA, max - w / 2);

	// curve
	arc(mid, yC, w, w, 0, PI);

	// line
	line(xB, yA, xB, yC);

}