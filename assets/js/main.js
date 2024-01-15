const projectsContainer = document.getElementsByClassName("projects-container")[0];

/* Content */

const variations1 = {
    title: "Variations I",
    date: "2017",
    body: ["Variations I explores the possibilities of instruction-based methods in both image-making and typography. Extending the concept of rule-based art to the program, Variations I questions whether a set of instructions executed in code can produce unexpected and poetic results.", "Nine twitter bots create and post images that respond to their individualized sets of instructions. These instructions define a range of compositions consisting of circles on a white square canvas. Similarly, a tenth twitter bot generates single-line letterforms on a white square canvas. The outputs from the twitter bots are then sequentially placed into a grid to be drawn with a pen plotter as physical documentation."],
    links: [
        {
            displayText: "Twitter bots",
            reference: "https://twitter.com/i/lists/939959879531483138?s=20",
            isExternalLink: true
        },
        {
            displayText: "Pen plotter lines",
            reference: "projects/pen-plotter-lines/index.html",
            isExternalLink: false
        }
    ],
    images: ["thesis-1-twitter-01.png", "thesis-1-twitter-10-side.png", "thesis-1-twitter-05.png", "thesis-1-pen-plotter-01.png", "thesis-1-pen-plotter-02.png", "thesis-1-pen-plotter-03.png", "thesis-1-pen-plotter-04.png", "thesis-1-pen-plotter-05.png", "thesis-1-pen-plotter-06.png", "thesis-1-pen-plotter-07.png", "thesis-1-pen-plotter-08.png", "thesis-1-pen-plotter-09.png", "thesis-1-pen-plotter-10.png"]
}

const variations2 = {
    title: "Variations II",
    date: "2018",
    body: ["Variations II further explores instruction-based typography with generative letterforms. Tweets are pulled from twitter and typeset with evolving letterforms in three browser-based animations. Each animation in the sequence introduces another random element into the program. See animations:"],
    links: [
        {
            displayText: "1",
            reference: "projects/thesis/1/index.html",
            isExternalLink: false
        },
        {
            displayText: "2",
            reference: "projects/thesis/2/index.html",
            isExternalLink: false
        }, 
        {
            displayText: "3",
            reference: "projects/thesis/3/index.html",
            isExternalLink: false
        }
    ], 
    images: ["thesis-1-twitter-10-full.png", "thesis-2-animations-a.gif", "thesis-2-animations-b.gif", "thesis-2-animations-c.gif", "thesis-2-animations-01.png", "thesis-2-animations-02.png", "thesis-2-animations-03.png", "thesis-2-animations-01.gif", "thesis-2-animations-02.gif", "thesis-2-animations-03.gif", "thesis-2-animations-03-irl.gif"]
}

const littleFreeLibrary = {
    title: "Little Free Library",
    date: "2017",
    body: ["An app for collecting quotes from books found in the Little Free Library of the Green Oasis community garden. The app creates a collectively curated selection of quotes from books that may or may not still be in the library.", "When reading a book in the physical space, shadows are cast on the book from the readers hands and body, over the course of the day. The app incorporates this phenomenon as a visual layer linking the experience of the app to the experience of the Little Free Library. Depending on the time of day, when a user adds a quote, the quote is &ldquo;stamped&rdquo; with a unique shadow image from the Green Oasis Garden."],
    links: [
        {
            displayText: "Prototype",
            reference: "https://www.figma.com/proto/zc4x0rvUiL5MbFaYhKblcV/Little-Free-Library---Fall-2017?page-id=0%3A1&type=design&node-id=1-51&viewport=684%2C1482%2C0.16&t=fvapU3wxWAUAJ4pO-1&scaling=scale-down&starting-point-node-id=1%3A51&mode=design",
            isExternalLink: true
        },
        {
            displayText: "User test",
            reference: "https://www.usertesting.com/v/d0cac6ba-1700-4a52-aaf4-1fe37ea70228#!/notes",
            isExternalLink: true
        },
        {
            displayText: "Presentation",
            reference: "https://s3.amazonaws.com/arena-attachments/1943214/5cce3d210e2f03aada91b956c1aa743e.pdf?1521917137",
            isExternalLink: true
        }
    ],
    images: ["little-location-01.png", "little-location-02.png",  "little-mobile-01.png", "little-mobile-02.png", "little-mobile-03.png", "little-mobile-04.png", "little-mobile-05.png", "little-process-03.png", "little-app-store-01.png", "little-app-store-02.png"]
}

const matter = {
    title: "Matter",
    date: "2018",
    body: ["Matter is an online publication and research project centered on the themes of media and memory. The site acts as a catalogue of ideas that explore these themes; such as archiving, collective memory, and memory in the digital age. Each article on the site has a programmed expiration date and fades away until it is erased, reflecting the non-permanence of human memory."],
    links: [
        {
            displayText: "Matter",
            reference: "https://madboz.github.io/reading-without-pages/matter",
            isExternalLink: true
        }
    ],
    images: ["matter-01.png", "matter-03.png", "matter-11.png", "matter-04.png", "matter-05.png", "matter-06.png", "matter-07.png", "matter-08.png", "matter-10.png"]
}

const rgbArea = {
    title: "RGB Area",
    date: "2016",
    body: ["RGB Area translates a users location into a color by converting the longitude, latitude, and altitude into red, green, and blue values. All locations viewed are archived on the site. Locations represented: New York, Las Vegas, and Moscow."],
    links: [
        {
            displayText: "rgb-area.tk",
            reference: "https://rgb-area.tk",
            isExternalLink: true
        }
    ],
    images: ["rgb-mobile-new-york.png", "rgb-mobile-history-link.png", "rgb-mobile-history.png", "rgb-mobile-las-vegas.png", "rgb-desktop-moscow.png", "rgb-desktop-history.png", "rgb-desktop-history-full.png"]
}

const readingWithoutPages = {
    title: "Reading without Pages",
    date: "2018",
    body: ["Two mircosites made in Reading without Pages, a class about the design of publications online. Students spent a week creating a coding demo and one week redesigning an article.", "Microsite 1 is an instructional site for CSS Grids that is structured within a series of nested grids. Users can toggle the visibility of black gridlines that describe the architecture of the page. Microsite 2 is an alternate reading experience for &ldquo;Something is Wrong on the Internet&rdquo; by James Bridle cuts and remixes the article in a similar way the videos he writes about."],
    links: [
        {
            displayText: "CSS Grids Demo",
            reference: "https://madboz.github.io/reading-without-pages/demo",
            isExternalLink: true
        },
        {
            displayText: "Something is Wrong on the Internet",
            reference: "https://madboz.github.io/reading-without-pages/piece",
            isExternalLink: true
        }
    ],
    images: ["reading-demo-01.png", "reading-demo-02.png", "reading-demo-03.png", "reading-demo-04.png" , "reading-piece-01.png", "reading-piece-02.png", "reading-piece-03.png"]
}

const sidebar = {
    title: "Sidebar",
    date: "2016",
    body: "Sidebar is a publication about internet culture. The journal features theory, anecdotes, poetry, and fine art. Related articles are featured at the end of each article, encouraging the reader to experience the book in a non-linear fashion.",
    links: [],
    images: ["sidebar-01.png", "sidebar-02.png", "sidebar-03.png", "sidebar-04.png", "sidebar-05.png", "sidebar-06.png", "sidebar-07.png", "sidebar-08.png", "sidebar-09.png", "sidebar-10.png", "sidebar-11.png", "sidebar-12.png"]
}

/* Populate content */

const content = [variations1, variations2, littleFreeLibrary, matter, rgbArea, readingWithoutPages];
shuffleArray(content);

for (let i = 0; i < content.length; i++){
    let project = createDiv("div", "project");
    let projectText = createDiv("div", "project__text");
    let projectTitle = createDiv("div", "project__title");
    let projectBody = createDiv("div", "project__body");
    let projectImages = createDiv("div", "project__images")

    projectsContainer.append(project);
    project.append(projectText);
    projectText.append(projectTitle);
    projectText.append(projectBody);

    projectTitle.append(content[i].title + ", " + content[i].date);

    for (let j = 0; j < content[i].body.length; j++) {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = content[i].body[j];
        projectBody.append(paragraph);

        if (j == content[i].body.length - 1) {

            for (var n = 0; n < content[i].links.length; n++) {
                let link = document.createElement("a");

                if (content[i].links[n].isExternalLink !== true) {
                    link.className = "link";
                } else {
                    link.setAttribute("target", "_blank");
                    link.className = "link--alias";
                }

                link.href = content[i].links[n].reference;
                link.append(content[i].links[n].displayText);
                paragraph.append(" ");
                paragraph.append(link);
            }
        }
    }

    project.append(projectImages);

    for (var m = 0; m < content[i].images.length; m++) {
        let image = createDiv("img", "project__image");
        image.src = "../assets/images/" + content[i].images[m];
        projectImages.append(image);
    }
}

function createDiv(tagName, className) {
    let element = document.createElement(tagName);
    element.className = className;

    return element;
}

// function createParagraph() {

// }

// function createLink() {

// }

/* Shuffle array */

function shuffleArray(array) {
    let r, x, i;

    for (i = array.length - 1; i > 0; i--) {
        r = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[r];
        array[r] = x;
    }

    return array;
}