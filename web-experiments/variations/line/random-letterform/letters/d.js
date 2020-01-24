function draw_d(max) {

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates
	var xA = random(5, q2);
	var yA = random(5, q1);
	var yB = random(q3, max);
	var yC = ((yB - yA) / 2) + yA;

	line(xA, yA, xA, yB);

	var w = random(5, max - xA);
	var h = yB - yA;

	arc(xA, yC, w, h, -PI / 2, PI / 2);

}