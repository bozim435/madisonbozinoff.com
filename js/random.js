let IO = {
	
	icons: ["IO-PP-01", "IO-PP-02", "IO-PP-03", "IO-PP-04", "IO-PP-05", "IO-PP-06", "IO-PP-07", "IO-PP-08", "IO-PP-09", "IO-PP-10"],
	heading: "Input Output",
	descrip: "Explores the possibilities of instruction-based methods in both image-making and typography. By extending the idea of rule-based art to the program, Input Output questions whether a set of instructions executed in code can produce unexpected and poetic results.",
	path: "IO/IO.html"

}

let LFL = {

	icons: ["LFL-01", "LFL-02", "LFL-03", "LFL-04", "LFL-05", "LFL-AppStore-01", "LFL-AppStore-02", "LFL-Location-01", "LFL-Location-02", "LFL-Process-01", "LFL-Process-02", "LFL-Process-03"],
	heading: "Little Free Library",
	descrip: "An app for collecting quotes found in the Little Free Library of the Green Oasis community garden. The app creates a collectively currated selection of quotes from books that may or may not still be in the library.",
	path: "LFL/LFL.html"

}

let Mat = {

	icons: ["Mat-01", "Mat-02", "Mat-03", "Mat-04", "Mat-05", "Mat-06", "Mat-07"],
	heading: "Matter",
	descrip: "Online publication and collaborative research project centered on the themes of media and memory.",
	path: "matter/matter.html"

}

let RGB = {

	icons: ["RGB-01-01", "RGB-01-02", "RGB-01-03", "RGB-02", "RGB-03", "RGB-04", "RGB-05", "RGB-06-01", "RGB-06-02", "RGB-06-03"],
	heading: "RGB Location",
	descrip: "Translates a users location into an RGB value by converting the longitude, latitude, and altitude into red, green, and blue values.",
	path: "RGB/RGB.html"

}

let RWP = {

	icons: ["RWP-01-01", "RWP-01-02", "RWP-01-03", "RWP-02-01", "RWP-02-02"],
	heading: "Reading without Pages",
	descrip: "Microsites created in \"Reading without Pages class\" part A Demo and part B Piece",
	path: "RWP/RWP.html"

}

let SB = {

	icons: ["SB-01", "SB-02", "SB-03", "SB-04", "SB-05", "SB-06", "SB-07", "SB-08", "SB-09", "SB-10", "SB-11", "SB-12"],
	heading: "Sidebar Journal",
	descrip: "Publishing platform about internet culture. The journal typically features philosophical writings, personal stories, poetry, fine art, and theories, focussed on the internet.",
	path: "sidebar/sidebar.html"

}

let OTH = {

	icons: ["OTH-01", "OTH-02", "OTH-03", "OTH-04", "OTH-05"],
	heading: "Other Small Works",
	descrip: "uhhhhhh",
	path: "OTH/OTH.html"

}

let arr = [IO, LFL, Mat, RGB, RWP, SB, OTH];

const content = document.getElementById("content");
//console.log(document.body.style.fontSize);

// let r = Math.floor(Math.random() * 40 + 10);

// document.body.style.fontSize = r + "px";


shuffle(arr);

for (let i = 0; i < arr.length; i++) {

	// let n = Math.floor(Math.random() * arr[i].icons.length);
	let j = i + 1;

	// content.innerHTML += '<div class="blocks"><div class="size"><img src="assets/' + arr[i].icons[n] + '.png"></div><p>' + j + ' ' + arr[i].heading + '</p><p>' + arr[i].descrip + '</p></div>';

	// content.innerHTML += '<div class="blocks"><a href="' + arr[i].path + '"><div class="size"><img src="assets/' + arr[i].icons[n] + '.png"></div></a></div>';

	for (let n = 0; n < arr[i].icons.length; n++) {

		content.innerHTML += '<div class="blocks"><a href="' + arr[i].path + '"><div class="size"><img src="assets/' + arr[i].icons[n] + '.png"></div></a></div>';

	}

	content.innerHTML += "</br>"


}

// Generic Shuffle Function
 
function shuffle(a) {

    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;

    }

    return a;

}