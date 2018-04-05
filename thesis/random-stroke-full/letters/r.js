function draw_r(max) { 

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

	// lines
	line(xA, yA, xA, yB);
	line(xA, yA, xD, yA);
	line(xA, yC, xD, yC);

	// lengths
	var w = (yB - yA) / 2;
	var h = yC - yA;
	var yH = (h / 2) + yA;

	// arc
	arc(xD, yH, w, h, - PI / 2, PI / 2);

	// diagonal line
	line(xA, yC, xD + (w / 2), yB);

}