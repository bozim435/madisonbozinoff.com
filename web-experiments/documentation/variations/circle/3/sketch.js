function setup() {

	createCanvas(window.innerWidth, window.innerHeight * 2);
	frameRate(6);

}

function draw() {

	background(255);

	noFill();
	stroke(0);
	strokeWeight(1);

	// dimensions
	var l_w_h = window.innerWidth / 10.5;
	var line_height = 1.16;

	if (window.innerWidth <= 768) {

		l_w_h = window.innerWidth / 5.5;

		// draw letters
		translate(25, 25);
		draw_t(l_w_h); 
		translate(l_w_h, 0);
		draw_h(l_w_h); 
		translate(l_w_h, 0);
		draw_e(l_w_h); 
		translate(0 - l_w_h * 2, l_w_h * line_height); 

		// space
		draw_q(l_w_h); 
		translate(l_w_h, 0);
		draw_u(l_w_h); 
		translate(l_w_h, 0);
		draw_i(l_w_h); 
		translate(l_w_h, 0);
		draw_c(l_w_h); 
		translate(l_w_h, 0);
		draw_k(l_w_h); 
		translate(0 - l_w_h * 4, l_w_h * line_height);

		// line break
		draw_b(l_w_h); 
		translate(l_w_h, 0);
		draw_r(l_w_h); 
		translate(l_w_h, 0);
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_w(l_w_h); 
		translate(l_w_h, 0);
		draw_n(l_w_h); 
		translate(0 - l_w_h * 4, l_w_h * line_height);

		// space
		draw_f(l_w_h); 
		translate(l_w_h, 0);
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_x(l_w_h); 
		translate(0 - l_w_h * 2, l_w_h * line_height);

		// line break
		draw_j(l_w_h); 
		translate(l_w_h, 0);
		draw_u(l_w_h); 
		translate(l_w_h, 0);
		draw_m(l_w_h); 
		translate(l_w_h, 0);
		draw_p(l_w_h); 
		translate(l_w_h, 0);
		draw_s(l_w_h); 
		translate(0 - l_w_h * 4, l_w_h * line_height);

		// space
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_v(l_w_h); 
		translate(l_w_h, 0);
		draw_e(l_w_h); 
		translate(l_w_h, 0);
		draw_r(l_w_h); 
		translate(0 - l_w_h * 3, l_w_h * line_height);

		// line break
		draw_t(l_w_h); 
		translate(l_w_h, 0);
		draw_h(l_w_h);
		translate(l_w_h, 0);
		draw_e(l_w_h);
		translate(0 - l_w_h * 2, l_w_h * line_height); 

		// space 
		draw_l(l_w_h); 
		translate(l_w_h, 0);
		draw_a(l_w_h); 
		translate(l_w_h, 0);
		draw_z(l_w_h); 
		translate(l_w_h, 0);
		draw_y(l_w_h); 
		translate(0 - l_w_h * 3, l_w_h * line_height);

		// line break
		draw_d(l_w_h); 
		translate(l_w_h, 0);
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_g(l_w_h);

	} else {

	 	// draw letters
		translate(25, 25);
		draw_t(l_w_h); 
		translate(l_w_h, 0);
		draw_h(l_w_h); 
		translate(l_w_h, 0);
		draw_e(l_w_h); 
		translate(l_w_h * 2, 0);

	 	// space
		draw_q(l_w_h); 
		translate(l_w_h, 0);
		draw_u(l_w_h); 
		translate(l_w_h, 0);
		draw_i(l_w_h); 
		translate(l_w_h, 0);
		draw_c(l_w_h); 
		translate(l_w_h, 0);
		draw_k(l_w_h); 
		translate(0 - l_w_h * 8, l_w_h * line_height);

		// line break
		draw_b(l_w_h); 
		translate(l_w_h, 0);
		draw_r(l_w_h); 
		translate(l_w_h, 0);
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_w(l_w_h); 
		translate(l_w_h, 0);
		draw_n(l_w_h); 
		translate(l_w_h * 2, 0);

		// space
		draw_f(l_w_h); 
		translate(l_w_h, 0);
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_x(l_w_h); 
		translate(0 - l_w_h * 8, l_w_h * line_height);

		// line break
		draw_j(l_w_h); 
		translate(l_w_h, 0);
		draw_u(l_w_h); 
		translate(l_w_h, 0);
		draw_m(l_w_h); 
		translate(l_w_h, 0);
		draw_p(l_w_h); 
		translate(l_w_h, 0);
		draw_s(l_w_h); 
		translate(l_w_h * 2, 0);

		// space
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_v(l_w_h); 
		translate(l_w_h, 0);
		draw_e(l_w_h); 
		translate(l_w_h, 0);
		draw_r(l_w_h); 
		translate(0 - l_w_h * 9, l_w_h * line_height);

	 	// line break
		draw_t(l_w_h); 
		translate(l_w_h, 0);
		draw_h(l_w_h);
		translate(l_w_h, 0);
		draw_e(l_w_h);
		translate(l_w_h * 2, 0); 

		// space 
		draw_l(l_w_h); 
		translate(l_w_h, 0);
		draw_a(l_w_h); 
		translate(l_w_h, 0);
		draw_z(l_w_h); 
		translate(l_w_h, 0);
		draw_y(l_w_h); 
		translate(0 - l_w_h * 7, l_w_h * line_height);

		// line break
		draw_d(l_w_h); 
		translate(l_w_h, 0);
		draw_o(l_w_h); 
		translate(l_w_h, 0);
		draw_g(l_w_h);

	}

}
