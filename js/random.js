let IO = {
	
	icons: ["IO-01", "IO-02", "IO-03", "IO-04"],
	heading: "Input Output",
	descrip: "Explores the possibilities of instruction-based methods in both image-making and typography. By extending the idea of rule-based art to the program, Input Output questions whether a set of instructions executed in code can produce unexpected and poetic results."

};

let LFL = {

	icons: ["LFL-01", "LFL-02", "LFL-03"],
	heading: "Little Free Library",
	descrip: "An app for collecting quotes found in the Little Free Library of the Green Oasis community garden. The app creates a collectively currated selection of quotes from books that may or may not still be in the library."

};

let Mat = {

	icons: ["Mat-01", "Mat-02"],
	heading: "Matter",
	descrip: "Online publication and collaborative research project centered on the themes of media and memory."

};

let RGB = {

	icons: ["RGB-01", "RGB-02", "RGB-03"],
	heading: "RGB Location",
	descrip: "Tanslates a users location into an RGB value by converting the longitude, latitude, and altitude into red, green, and blue values."

};

let RWP = {

	icons: ["RWP-01", "RWP-02"],
	heading: "Reading without Pages",
	descrip: "Microsites created in \"Reading without Pages class\" </br> a. Demo </br>b. Piece"

};

let SB = {

	icons: ["SB-01", "SB-02", "SB-03"],
	heading: "Sidebar Journal",
	descrip: "Publishing platform about internet culture. The journal typically features philosophical writings, personal stories, poetry, fine art, and theories, focussed on the internet."

};

let arr = [IO, LFL, Mat, RGB, RWP, SB];

const content = document.getElementById("content");
console.log(document.body.style.fontSize);

let r = Math.floor(Math.random() * 50);

document.body.style.fontSize = r + "px";


shuffle(arr);

for (let i = 0; i < arr.length; i++) {

		let n = Math.floor(Math.random() * arr[i].icons.length);
		let j = i + 1;

		content.innerHTML += '<div class="blocks"><div class="size"><img src="assets/' + arr[i].icons[n] + '.png"></div><p>' + j + ' ' + arr[i].heading + '</p><p>' + arr[i].descrip + '</p></div>';

}

// Shuffle Function

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