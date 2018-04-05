function draw_b(max) {

	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	var min_dist = max / 50;

	// coordinates
	var xA = random(5, q1);
	var yA = random(5, q1);
	var yB = random(q3, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(xA + min_dist, q3);

	// lines
	line(xA, yA, xA, yB);
	line(xA, yA, xD, yA);
	line(xA, yB, xD, yB);
	line(xA, yC, xD, yC);

	// lengths
	var w = (yB - yA) / 2;
	var h = yC - yA;
	var yH = (h / 2) + yA;
	var yI = (h / 2) + yA + h;

	// arcs
	arc(xD, yH, w, h, - PI / 2, PI / 2);
	arc(xD, yI, w, h, - PI / 2, PI / 2);

}