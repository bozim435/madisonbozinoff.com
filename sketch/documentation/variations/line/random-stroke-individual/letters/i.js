function draw_i(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// coordinates	
	var xA = random(5, q2);
	var yA = random(5, q1);
	var xB = random(q2, max);
	
	// vertical line
	line(xA, yA, xB, yA);

	// secondary coordinates
	var xC = ((xB - xA) / 2) + xA;
	var yD = random(yA, max);

	// horizontal lines
	line(xC, yA, xC, yD);
	line(xA, yD, xB, yD);

}