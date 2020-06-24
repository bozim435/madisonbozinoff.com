// Content

var projectsContainer = document.getElementsByClassName("projects-container")[0];

var variations1 = {
	icons: ["thesis-1-twitter-01.png", "thesis-1-twitter-10-side.png", "thesis-1-twitter-05.png", "thesis-1-pen-plotter-01.png", "thesis-1-pen-plotter-02.png", "thesis-1-pen-plotter-03.png", "thesis-1-pen-plotter-04.png", "thesis-1-pen-plotter-05.png", "thesis-1-pen-plotter-06.png", "thesis-1-pen-plotter-07.png", "thesis-1-pen-plotter-08.png", "thesis-1-pen-plotter-09.png", "thesis-1-pen-plotter-10.png"],
	heading: "Variations 1",
	date: "2017",
	descrip: "Variations 1 explores the possibilities of instruction-based methods in both image-making and typography. Extending the concept of rule-based art to the program, Variations 1 questions whether a set of instructions executed in code can produce unexpected and poetic results. </p><p>Nine twitter bots create and post images that respond to their individualized sets of instructions. These instructions define a range of compositions consisting of circles on a white square canvas. Similarly, a tenth twitter bot generates single-line letterforms on a white square canvas. The outputs from the twitter bots are then sequentially placed into a grid to be drawn with a pen plotter as physical documentation. <a href='https://twitter.com/i/lists/939959879531483138?s=20' target='blank'>See twitter bots</a> <a href='projects/pen-plotter-lines/index.html' target='blank'>See pen plotter lines</a>"
}

var variations2 = {
	icons: ["thesis-1-twitter-10-full.png", "thesis-2-animations-a.gif", "thesis-2-animations-b.gif", "thesis-2-animations-c.gif", "thesis-2-animations-01.png", "thesis-2-animations-02.png", "thesis-2-animations-03.png", "thesis-2-animations-01.gif", "thesis-2-animations-02.gif", "thesis-2-animations-03.gif", "thesis-2-animations-03-irl.gif"],
	heading: "Variations 2",
	date: "2018",
	descrip: "Variations 2 further explores instruction-based typography with generative letterforms. Tweets are pulled from twitter and typeset with evolving letterforms in three browser-based animations. Each animation in the sequence introduces another random element into the program. See animations: <a href='projects/thesis/1/index.html' target='blank'>1</a> <a href='projects/thesis/2/index.html' target='blank'>2</a> <a href='projects/thesis/3/index.html' target='blank'>3</a>"
}

var littleFreeLibrary = {
	icons: ["little-location-01.png", "little-location-02.png",  "little-mobile-01.png", "little-mobile-02.png", "little-mobile-03.png", "little-mobile-04.png", "little-mobile-05.png", "little-process-03.png", "little-app-store-01.png", "little-app-store-02.png"],
	heading: "Little Free Library",
	date: "2017",
	descrip: "An app for collecting quotes from books found in the Little Free Library of the Green Oasis community garden. The app creates a collectively curated selection of quotes from books that may or may not still be in the library.</p><p>When reading a book in the physical space, shadows are cast on the book from the readers hands and body, over the course of the day. The app incorporates this phenomenon as a visual layer linking the experience of the app to the experience of the Little Free Library. Depending on the time of day, when a user adds a quote, the quote is &ldquo;stamped&rdquo; with a unique shadow image from the Green Oasis Garden. <a href='https://invis.io/7YNROO06FJB' target='blank'>Prototype</a> <a href='https://www.usertesting.com/v/d0cac6ba-1700-4a52-aaf4-1fe37ea70228#!/notes' target='blank'>User Test</a> <a href='https://s3.amazonaws.com/arena-attachments/1943214/5cce3d210e2f03aada91b956c1aa743e.pdf?1521917137' target='blank'>Presentation</a>"
}

var matter = {
	icons: ["matter-01.png", "matter-03.png", "matter-11.png", "matter-04.png", "matter-05.png", "matter-06.png", "matter-07.png", "matter-08.png", "matter-10.png"],
	heading: "Matter",
	date: "2018",
	descrip: "Matter is an online publication and research project centered on the themes of media and memory. The site acts as a catalogue of ideas that explore these themes; such as archiving, collective memory, and memory in the digital age. Each article on the site has a programmed expiration date and fades away until it is erased, reflecting the non-permanence of human memory. <a href='https://madboz.github.io/reading-without-pages/matter' target='blank'>Matter</a>"
}

var rgbArea = {
	icons: ["rgb-mobile-new-york.png", "rgb-mobile-history-link.png", "rgb-mobile-history.png", "rgb-mobile-las-vegas.png", "rgb-desktop-moscow.png", "rgb-desktop-history.png", "rgb-desktop-history-full.png"],
	heading: "RGB Area",
	date: "2016",
	descrip: "RGB Area translates a users location into a color by converting the longitude, latitude, and altitude into red, green, and blue values. All locations viewed are archived on the site. Locations represented: New York, Las Vegas, and Moscow. <a href='https://area-hue.tk' target='blank'>rgb-area.tk</a>"
}

var readingWithoutPages = {
	icons: ["reading-demo-01.png", "reading-demo-02.png", "reading-demo-03.png", "reading-demo-04.png" , "reading-piece-01.png", "reading-piece-02.png", "reading-piece-03.png"],
	heading: "Reading without Pages",
	date: "2018",
	descrip: "Two mircosites made in Reading without Pages, a class about the design of publications online. Students spent one week preparing a coding demo and one week redesigning an article.</p><p>1. An instructional site for CSS Grids that is structured within a series of nested grids. Users can toggle the visibility of black gridlines that describe the architecture of the page. <a href='https://madboz.github.io/reading-without-pages/demo' target='blank'>CSS Grids Demo</a></p><p>2. Alternate reading experience for \"Something is Wrong on the Internet\" by James Bridle cuts and remixes the article in a similar way the videos he writes about remix TV show footage. <a href='https://madboz.github.io/reading-without-pages/piece' target='blank'>Something is Wrong on the Internet</a>"
}

var sidebar = {
	icons: ["sidebar-01.png", "sidebar-02.png", "sidebar-03.png", "sidebar-04.png", "sidebar-05.png", "sidebar-06.png", "sidebar-07.png", "sidebar-08.png", "sidebar-09.png", "sidebar-10.png", "sidebar-11.png", "sidebar-12.png"],
	heading: "Sidebar",
	date: "2016",
	descrip: "Sidebar is a publication about internet culture. The journal features theory, personal stories, poetry, and fine art centered on the theme of the internet. Related articles are featured at the end of each article, encouraging the reader to experience the book in a non-linear fashion."
}

// Populate content

var array = [variations1, variations2, littleFreeLibrary, matter, rgbArea, readingWithoutPages];
shuffleArray(array);

for (var i = 0; i < array.length; i++) {
	projectsContainer.innerHTML += "<div class='project-copy'><div class='project-copy__title'" + array[i].heading + ", " + array[i].date + "</div></br>" + array[i].descrip + "</div>";

	for (var j = 0; j < array[i].icons.length; j++) {
		projectsContainer.innerHTML += '<img src="assets/images/' + array[i].icons[j] + '">';
	}
}

// Shuffle array

function shuffleArray(array) {
    var r, x, i;

    for (i = array.length - 1; i > 0; i--) {
        r = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[r];
        array[r] = x;
    }

    return array;
}