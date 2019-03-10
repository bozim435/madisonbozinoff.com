function draw_e(max) {

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	var min_dist = max / 50;

	// coordinatess
	var xA = random(5, q1);
	var yA = random(5, q1);
	var yB = random(yA + min_dist, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(xA + min_dist, max);

	// line
	line(xA, yA, xA, yB);
	line(xA, yA, xD, yA);
	line(xA, yB, xD, yB);
	line(xA, yC, xD, yC);

}