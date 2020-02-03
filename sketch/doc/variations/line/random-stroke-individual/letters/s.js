function draw_s(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;
	
	// coordinates
	var xA = random(q1, q2);
	var yA = random(5, q1);
	var yB = random(q3, max);
	var yC = ((yB - yA) / 2) + yA;
	var xD = random(q2, max);
	var w = xD - xA;
	var h = yC - yA;
	var yH = (h / 2) + yA;
	var yI = (h / 2) + yA + h;

	// arcs
	arc(xA, yH, w, h, PI / 2, 3 * PI / 2);
	arc(xD, yI, w, h, - PI / 2, PI / 2);

	// connecting lines
	line(xA, yA, xD + (w / 4), yA);
	line(xA - (w / 4), yB, xD, yB);
	line(xA, yC, xD, yC);

}