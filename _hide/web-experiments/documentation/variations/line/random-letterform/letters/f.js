function draw_f(max) {

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xA = random(5, q2);
	var yA = random(5, q2);
	var yB = random(q2, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(xA, max);

	// connecting points
	line(xA, yA, xA, yB);
	line(xA, yA, xD, yA);
	line(xA, yC, xD, yC);

	// midpoints
	var w = xD - xA;
	var h = yC - yA;
	var yH = (h / 2) + yA;

}