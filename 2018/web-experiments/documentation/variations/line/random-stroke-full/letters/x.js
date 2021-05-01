function draw_x(max) {

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xA = random(5, q2);
	var yA = random(5, q1);
	var xC = random(q2, max);
	var xB = max - xA;
	var yB = max - yA;
	var xD = max - xC;

	// lines
	line(xA, yA, xB, yB);
	line(xC, yA, xD, yB);

}