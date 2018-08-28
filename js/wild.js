/*** Randomize Layout ***/

let IO1 = {
	
	icons: ["IO-PP-01.png", "IO-PP-02.png", "IO-PP-03.png", "IO-PP-04.png", "IO-PP-05.png", "IO-PP-06.png", "IO-PP-07.png", "IO-PP-08.png", "IO-PP-09.png", "IO-PP-10.png"],
	heading: "Thesis 1",
	descrip: "Explores the possibilities of instruction-based methods in both image-making and typography. By extending the idea of rule-based art to the program, Input Output questions whether a set of instructions executed in code can produce unexpected and poetic results. </p><p>The initial investigation took the form of ten Twitter bots. The bots both create and post images that respond to a specific set of instructions. These instructions define a range of compositions consisting solely of circles on a white square canvas. Posting every forty seconds, the bots are intended to be exhaustive. The twitter outputs are then taken from their original context and systematically placed into a 3 x 3 grid to be drawn with a pen plotter at large-scale.",
	path: "IO/IO.html"

}

let IO2 = {
	
	icons: ["IO-WB-01.gif", "IO-WB-02.gif", "IO-WB-03.gif"],
	heading: "Thesis 2",
	descrip: "Programmatically generated letterforms. The typeface is exhibited in three browser-based animations where each letterform updates every half-second. Each animation builds off of the previous one by adding more randomized elements as one progresses through them.",
	path: "#"

}

let LFL = {

	icons: ["LFL-Location-01.png", "LFL-Location-02.png","LFL-01.png", "LFL-02.png", "LFL-03.png", "LFL-04.png", "LFL-05.png", "LFL-Process-01.png", "LFL-Process-02.png", "LFL-Process-03.png", "LFL-AppStore-01.png", "LFL-AppStore-02.png"],
	heading: "Little Free Library",
	descrip: "An app for collecting quotes found in the Little Free Library of the Green Oasis community garden. The app creates a collectively currated selection of quotes from books that may or may not still be in the library. </p><p> When reading a book in the physical space, shadows are cast onto the book from the readers hands and body, over the course of the day. The app incorporates this phenomenon as a visual layer linking the experience of the app to the experience of the Little Free Library. When a user adds a quote, the quote is \"stamped\" with a unique shadow image from the Green Oasis Garden that represents the time of day.",
	path: "LFL/LFL.html"

}

let Mat = {

	icons: ["Mat-01.png", "Mat-02.png", "Mat-03.png", "Mat-04.png", "Mat-05.png", "Mat-06.png", "Mat-07.png"],
	heading: "Matter",
	descrip: "Matter is an online publication and collaborative research project centered on the themes of media and memory. </p><p>The site acts as a catalogue of ideas that explore media and memory; such as archiving, collective memory, and memory in the digital age. Through a diverse range of article formats: long-form texts, image essays, video playlists, Matter presents ideas from multiple fields of study. </p><p>All posted articles have programmed expiration dates that cause them to fade away for thirty days. Once they have expired they are no longer accessible and are added to the archive. The content of the site is ever-evolving to ensure that no browsing experience is the same. Users have the ablility to save the content they viewed to their desktop.",
	path: "matter/matter.html"

}

let RGB = {

	icons: ["RGB-01-01.png", "RGB-01-02.png", "RGB-01-03.png", "RGB-02.png", "RGB-03.png", "RGB-04.png", "RGB-05.png", "RGB-06-01.png", "RGB-06-02.png", "RGB-06-03.png"],
	heading: "RGB Location",
	descrip: "Translates a users location into an RGB value by converting the longitude, latitude, and altitude into red, green, and blue values.",
	path: "RGB/RGB.html"

}

let RWP = {

	icons: ["RWP-01-01.png", "RWP-01-02.png", "RWP-01-03.png", "RWP-02-01.png", "RWP-02-02.png"],
	heading: "Reading without Pages Microsites",
	descrip: "1. CSS Grids Demo </br> 2. Something is Wrong on the Internet Collage Piece",
	path: "RWP/RWP.html"

}

let SB = {

	icons: ["SB-01.png", "SB-02.png", "SB-03.png", "SB-04.png", "SB-05.png", "SB-06.png", "SB-07.png", "SB-08.png", "SB-09.png", "SB-10.png", "SB-11.png", "SB-12.png"],
	heading: "Sidebar Journal",
	descrip: "Sidebar is a publishing platform about internet culture. The journal typically features philosophical writings, personal stories, poetry, fine art, and theories, focussed on the internet. </p><p> Issue 01 includes academic writings about internet culture intersected with anecdotal writings from artists about their first memories online. The  journal walks the line between serious and playful which is echoed in its design. </p><p> Every article in the journal is given its own \"favicon\". At the end of each article the reader is presented with a list of related articles, encouraging the reader jump around in a non-linear fashion.",
	path: "sidebar/sidebar.html"

}

let OTH = {

	icons: ["OTH-01.gif", "OTH-02.png", "OTH-04.gif"],
	heading: "Computational Form",
	descrip: "1. Feather generated with Turtle Graphics </br> 2. Markov Chain Webding Landscapes </br> 3. Perlin Noise typeface",
	path: "OTH/OTH.html"

}

let arr = [IO1, LFL, Mat, RGB, RWP, SB, OTH, IO2];

const content = document.getElementById("content");

shuffle(arr);

for (let i = 0; i < arr.length; i++) {

	let j = i + 1;

	for (let n = 0; n < arr[i].icons.length; n++) {

		content.innerHTML += '<img src="assets/' + arr[i].icons[n] + '">';

	}

	content.innerHTML += '</br></br><p>' + arr[i].heading + '</br>' + arr[i].descrip + '</p></br></br>';

}

/*** Generic Shuffle Function ***/
 
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

/*** Toggle Size ***/

content.onclick = function(event) {

	let target = event.target;

	if (target.style.height !== "410px") {

        target.style.height = "410px";

    } else {

        target.style.height = "88px";

    }

}