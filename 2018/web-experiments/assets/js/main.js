const projectsContainer = document.getElementsByClassName("projects-container")[0];

/* Content */

const webdingLandscapes = {
    title: "Webding Landscapes",
    date: "2018",
    body: ["Generative webding landscapes. This program uses a Markov Chain to generate landcapes whose components all have the same climate. Climates are beach, suburb, city, country."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/webdings-landscapes/index.html",
            isExternalLink: false
        }
    ],
    images: ["webdings-01.png", "webdings-02.png", "webdings-03.png"]
}

const openHouse = {
    title: "Open House",
    date: "2018",
    body: ["An OpenSCAD program that builds Animal Crossing-inspired plots. It's modules are roof, house, tree, fruit, plot. An early version of the house was 3D printed (fig. 4)."],
    links: [],
    images: ["house-01.png", "house-02.png", "house-03.gif", "house-04.png"]
}

const turtleFeather = {
    title: "Turtle Feather",
    date: "2018",
    body: ["A program I'm particulary proud of draws a feather using turtle graphics. In turtle graphics, there are only a few commands: &quot;left&quot;, &quot;right&quot;, and &quot;forward&quot;. For this reason, turtle graphics rarely allow for realistic-looking images. One expects the code for this sketch to be long and complex where it is actually simple and concise due to it's use of nested loops."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/turtle-feather/index.html",
            isExternalLink: false
        }
    ],
    images: ["feather-directions.png", "feather-01.png", "feather-02.png", "feather-03.png"]
}

const quadrate = {
    title: "Quadrate",
    date: "2018",
    body: ["Herbert Franke's Quadrate (fig. 1) is an early work of computer art. The following images (fig. 2 &ndash; 4) are a re-creation in processing using turtle graphics."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/quadrate/index.html",
            isExternalLink: false
        }
    ],
    images: ["quadrate-franke.jpg", "quadrate-01.png", "quadrate-02.png", "quadrate-03.png"]
}

const checkMap = {
    title: "Check Map",
    date: "2018",
    body: ["Response to a coding challenge to generate a map using Perlin Noise. This program creates a field of checkboxes and assigns each checkbox a numeric value using noise. The checkbox is active on the condition that its value is larger than the median value. Caution, the program takes a long time to load."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/check-map/index.html",
            isExternalLink: false
        }
    ],
    images: ["map-01.png", "map-02.png", "map-03.png", "map-04.png", "map-05.png", "map-08.png"]
}

const noiseFont = {
    title: "Noise Font",
    date: "2018",
    body: ["The letter &quot;M&quot; drawn with noise. The character of the letterform changes based on the randomized frequency of the noise, ranging from handwriting-esque to metal."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/noise-font/index.html",
            isExternalLink: false
        }
    ],
    images: ["noise-01.png", "noise-03.png", "noise-04.png", "noise-05.png", "noise-06.png", "noise-07.png", "noise-09.png", "noise-11.png", "noise-12.png", "noise-14.png", "noise-15.png"]
}

const watercolorGradient = {
    title: "Watercolor Gradient",
    date: "2018",
    body: ["This program chooses two random colors. Colored circles are placed randomly on the canvas with a bias for one side. Each color is biased to one side of the canvas. The translucent circles create a texture that resembles watercolor."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/watercolor-gradient/index.html",
            isExternalLink: false
        },
        {
            displayText: "Documentation",
            reference: "documentation/watercolor-gradient/index.html",
            isExternalLink: false
        }
    ],
    images: ["gradient-01.png", "gradient-02.png", "gradient-03.png", "gradient-04.png", "gradient-05.png", "gradient-06.png", "gradient-07.png", "gradient-08.png", "gradient-23.png", "gradient-10.png", "gradient-12.png", "gradient-13.png", "gradient-15.png", "gradient-22.png", "gradient-24.png", "gradient-25.png"]
}

const testingABot = {
    title: "Testing a bot",
    date: "2017",
    body: ["My first twitter bot! @testing_a_bot."],
    links: [
        {
            displayText: "Twitter page",
            reference: "https://twitter.com/testing_a_bot",
            isExternalLink: true
        }
    ],
    images: ["ink-01.jpg", "ink-02.jpg", "ink-03.jpg", "ink-04.jpg", "ink-05.jpg"]
}

const noiseFlower = {
    title: "Noise Flower",
    date: "2018",
    body: ["A program that grenerates wacky flowers using Perlin Noise. This relatively simple program creates suprisingly diverse outputs."],
    links: [
        {
            displayText: "Sketch & code",
            reference: "sketch/noise-flower/index.html",
            isExternalLink: false
        }
    ],
    images: ["flower-01.png", "flower-02.png", "flower-03.png", "flower-04.png", "flower-05.png", "flower-06.png", "flower-07.png", "flower-08.png", "flower-09.png", "flower-10.png", "flower-11.png"]
}

/* Need to update */

var square = {
	icons: ["webdings-01.png", "webdings-02.png", "webdings-03.png"],
	heading: "Square Circle Clock",
	date: "2018",
	descrip: "... <a href='variations/screen-saver/1/index.html'>Link</a>"
}

var dot = {
	icons: ["webdings-01.png", "webdings-02.png", "webdings-03.png"],
	heading: "Dot Clock",
	date: "2018",
	descrip: "... <a href='variations/screen-saver/2/index.html'>Link</a>"
}

var circle_font = {
	icons: ["webdings-01.png", "webdings-02.png", "webdings-03.png"],
	heading: "Circle Font",
	date: "2018",
	descrip: "An exploration I did while working on my thesis. Circle font is  <a href='variations/circle/1/index.html'>Link</a>"
}

var egg = {
	icons: ["egg-01.png"],
	heading: "Paper.js Egg",
	date: "2018",
	descrip: "Egg made with paper.js. <a href='http://compform.net/js_lab/js_lab.html?http://sketches2018.compform.net/posts/JatkJ4J4gcsN2fHXx/code'>Link</a>"
}


/* Populate content */

const content = [openHouse, turtleFeather, quadrate, checkMap, noiseFont, watercolorGradient, testingABot, noiseFlower];
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
        image.src = "assets/images/" + content[i].images[m];
        projectImages.append(image);
    }
}

function createDiv(tagName, className) {
    let element = document.createElement(tagName);
    element.className = className;

    return element;
}

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