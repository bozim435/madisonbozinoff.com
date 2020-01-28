function draw_u(max) {

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xA = random(5, q2);
	var xB = random(xA, max);
	var yA = random(5, q1);
	var yC = random(yA, q3);
	var mid = ((xB - xA) / 2) + xA;
	var w = xB - xA;

	// arc
	arc(mid, yC, w, w, 0, PI);

	// two lines
	line(xA, yA, xA, yC);
	line(xB, yA, xB, yC);

}