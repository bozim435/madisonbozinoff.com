function draw_t(max) {

	strokeWeight(random(0, window.innerWidth / 20));

	// quarters of the canvas
	var q1 = max / 4;
	var q2 = max / 2;
	var q3 = (max / 4) * 3;

	// eights of the canvas
	var e3 = (max / 8) * 3;
	
	// coordinates
	var xA = random(5, q2);
	var yA = random(5, e3);
	var xB = random(q2, max);

	// top line
	line(xA,yA,xB,yA);

	// center of top line
	var xC = ((xB - xA) / 2) + xA;
	var yD = random(yA, max);

	// vertical line
	line(xC, yA, xC, yD);

}