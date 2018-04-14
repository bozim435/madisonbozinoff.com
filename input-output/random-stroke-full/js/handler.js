var w = window.innerWidth;
var h = window.innerHeight;

function handleTweets(tweets) {

    var x = tweets.length;
    var n = 0;    
    var t = tweets[0]; 

    console.log(t);

    function splitString(stringToSplit, separator) {

        var arrayOfStrings = stringToSplit.split(separator);

        console.log('The original string is: "' + stringToSplit + '"');
        console.log('The separator is: "' + separator + '"');
        console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));

        
        for (var i = 0; i < arrayOfStrings.length; i++) {

            console.log(arrayOfStrings[i]);

            if (arrayOfStrings[i] === 'a' || arrayOfStrings[i] === 'A') {

                var r;

                setInterval(function() {

                   r = Math.random() * 50;

                }, 500);

                console.log(r);

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        var x1 = sketch.random(5, max);

                        var q1 = max / 4;
                        var q3 = (max / 4) * 3;

                        var y1 = sketch.random(5, q1);
                        var x2 = sketch.random(5, x1);
                        var x3 = sketch.random(x1, max);
                        var y = sketch.random(q3, max);

                        var midx1 = ((x1 - x2) / 2) + x2;
                        var midx2 = ((x3 - x1) / 2) + x1;
                        var midy = ((y - y1) / 2) + y1;

                        sketch.line(x1, y1, x2, y);
                        sketch.line(x1, y1, x3, y);
                        sketch.line(midx1, midy, midx2, midy);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'b' || arrayOfStrings[i] === 'B') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        var min_dist = max / 50;

                        // coordinates
                        var xA = sketch.random(5, q1);
                        var yA = sketch.random(5, q1);
                        var yB = sketch.random(q3, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(xA + min_dist, q3);

                        // lines
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yA, xD, yA);
                        sketch.line(xA, yB, xD, yB);
                        sketch.line(xA, yC, xD, yC);

                        // lengths
                        var w = (yB - yA) / 2;
                        var h = yC - yA;
                        var yH = (h / 2) + yA;
                        var yI = (h / 2) + yA + h;

                        // arcs
                        sketch.arc(xD, yH, w, h, - sketch.PI / 2, sketch.PI / 2);
                        sketch.arc(xD, yI, w, h, - sketch.PI / 2, sketch.PI / 2);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'c' || arrayOfStrings[i] === 'C') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);
                        
                        var h = sketch.random(5, max);
                        var w = sketch.random(5, max);

                        sketch.arc(max / 2, max / 2, w, h, sketch.PI / 2, 3 * sketch.PI / 2);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'd' || arrayOfStrings[i] === 'D') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);
                        
                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q1);
                        var yB = sketch.random(q3, max);
                        var yC = ((yB - yA) / 2) + yA;

                        sketch.line(xA, yA, xA, yB);

                        var w = sketch.random(5, max - xA);
                        var h = yB - yA;

                        sketch.arc(xA, yC, w, h, -sketch.PI / 2, sketch.PI / 2);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'e' || arrayOfStrings[i] === 'E') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        var min_dist = max / 50;

                        // coordinatess
                        var xA = sketch.random(5, q1);
                        var yA = sketch.random(5, q1);
                        var yB = sketch.random(yA + min_dist, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(xA + min_dist, max);

                        // line
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yA, xD, yA);
                        sketch.line(xA, yB, xD, yB);
                        sketch.line(xA, yC, xD, yC);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'f' || arrayOfStrings[i] === 'F') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates  
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q2);
                        var yB = sketch.random(q2, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(xA, max);

                        // connecting points
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yA, xD, yA);
                        sketch.line(xA, yC, xD, yC);

                        // midpoints
                        var w = xD - xA;
                        var h = yC - yA;
                        var yH = (h / 2) + yA;

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'g' || arrayOfStrings[i] === 'G') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        //coordinates
                        var h = sketch.random(5, max);
                        var w = sketch.random(5, max);
                        var yC = (h / 2) + q2;
                        var xC = q2 - (w / 4);

                        // curve
                        sketch.arc(q2, q2, w, h, sketch.PI / 2, 3 * sketch.PI / 2);

                        // lines
                        sketch.line(q2, yC, q2, q2);
                        sketch.line(xC, q2, q2, q2);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'h' || arrayOfStrings[i] === 'H') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q2);
                        var yB = sketch.random(q2, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(q2, max);

                        // lines
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yC, xD, yC);
                        sketch.line(xD, yA, xD, yB);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'i' || arrayOfStrings[i] === 'I') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates  
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q1);
                        var xB = sketch.random(q2, max);
                        
                        // vertical line
                        sketch.line(xA, yA, xB, yA);

                        // secondary coordinates
                        var xC = ((xB - xA) / 2) + xA;
                        var yD = sketch.random(yA, max);

                        // horizontal lines
                        sketch.line(xC, yA, xC, yD);
                        sketch.line(xA, yD, xB, yD);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'j' || arrayOfStrings[i] === 'J') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q2);
                        var xB = sketch.random(xA, max);
                        var yA = sketch.random(5, q1);
                        var mid = ((xB - xA) / 2) + xA;
                        var w = xB - xA;
                        var yC = sketch.random(yA, max - w / 2);

                        // curve
                        sketch.arc(mid, yC, w, w, 0, sketch.PI);

                        // sketch.line
                        sketch.line(xB, yA, xB, yC);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'k' || arrayOfStrings[i] === 'K') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q2);
                        var yB = sketch.random(q2, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(xA, max);

                        // sketch.lines
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yC, xD, yB);
                        sketch.line(xA, yC, xD, yA);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'l' || arrayOfStrings[i] === 'L') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q2);
                        var yB = sketch.random(q2, max);
                        var xD = sketch.random(q2, max);

                        // sketch.lines
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yB, xD, yB);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'm' || arrayOfStrings[i] === 'M') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xb1 = sketch.random(5, max);
                        var y1 = sketch.random(5, q1);
                        var xb2 = sketch.random(xb1, max);
                        var x2 = sketch.random(5, xb1);
                        var x3 = sketch.random(xb1, xb2);
                        var y = sketch.random(q3, max);
                        var x4 = sketch.random(xb2, max);

                        // sketch.lines
                        sketch.line(xb1, y1, x2, y);
                        sketch.line(xb1, y1, x3, y);
                        sketch.line(xb2, y1, x3, y);
                        sketch.line(xb2, y1, x4, y);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'n' || arrayOfStrings[i] === 'N') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xb1 = sketch.random(5, max);
                        var y1 = sketch.random(5, q1);
                        var xb2 = sketch.random(xb1, max);
                        var x2 = sketch.random(5, xb1);
                        var x3 = sketch.random(xb1, xb2);
                        var y = sketch.random(q3, max);

                        sketch.line(xb1, y1, x2, y);
                        sketch.line(xb1, y1, x3, y);
                        sketch.line(xb2, y1, x3, y);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'o' || arrayOfStrings[i] === 'O') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var h = sketch.random(5, max);
                        var w = sketch.random(5, max);

                        // circle
                        sketch.ellipse(q2, q2, w, h);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'p' || arrayOfStrings[i] === 'P') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q2);
                        var yB = sketch.random(q2, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(xA, max);

                        // lines
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yA, xD, yA);
                        sketch.line(xA, yC, xD, yC);

                        // height and width of arc
                        var w = max - xD;
                        var h = yC - yA;
                        var yH = (h / 2) + yA;

                        // arc
                        sketch.arc(xD, yH, w, h, -sketch.PI / 2, sketch.PI / 2);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'q' || arrayOfStrings[i] === 'Q') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // height and width of circle
                        var h = sketch.random(5, max);
                        var w = sketch.random(5, max);

                        // coordinates
                        var xL = q2;
                        var yL = q2 + (h / 2);
                        var yL2 = sketch.random(yL, max);

                        // circle
                        sketch.ellipse(q2, q2, w, h);

                        // tail
                        sketch.line(xL, yL, xL, yL2);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'r' || arrayOfStrings[i] === 'R') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        var min_dist = max / 50;

                        // coordinates
                        var xA = sketch.random(5, q1);
                        var yA = sketch.random(5, q1);
                        var yB = sketch.random(yA + min_dist, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(xA + min_dist, q3);

                        // sketch.lines
                        sketch.line(xA, yA, xA, yB);
                        sketch.line(xA, yA, xD, yA);
                        sketch.line(xA, yC, xD, yC);

                        // lengths
                        var w = (yB - yA) / 2;
                        var h = yC - yA;
                        var yH = (h / 2) + yA;

                        // arc
                        sketch.arc(xD, yH, w, h, - sketch.PI / 2, sketch.PI / 2);

                        // diagonal sketch.line
                        sketch.line(xA, yC, xD + (w / 2), yB);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 's' || arrayOfStrings[i] === 'S') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(q1, q2);
                        var yA = sketch.random(5, q1);
                        var yB = sketch.random(q3, max);
                        var yC = ((yB - yA) / 2) + yA;
                        var xD = sketch.random(q2, max);
                        var w = max - xD;
                        var h = yC - yA;
                        var yH = (h / 2) + yA;
                        var yI = (h / 2) + yA + h;

                        // arcs
                        sketch.arc(xA, yH, w, h, sketch.PI / 2, 3 * sketch.PI / 2);
                        sketch.arc(xD, yI, w, h, - sketch.PI / 2, sketch.PI / 2);

                        // connecting sketch.lines
                        sketch.line(xA, yA, xD + (w / 4), yA);
                        sketch.line(xA - (w / 4), yB, xD, yB);
                        sketch.line(xA, yC, xD, yC);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 't' || arrayOfStrings[i] === 'T') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // eights of the canvas
                        var e3 = (max / 8) * 3;
                        
                        // coordinates
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, 75);
                        var xB = sketch.random(q2, max);

                        // top sketch.line
                        sketch.line(xA,yA,xB,yA);

                        // center of top sketch.line
                        var xC = ((xB - xA) / 2) + xA;
                        var yD = sketch.random(yA, max);

                        // vertical sketch.line
                        sketch.line(xC, yA, xC, yD);
    
                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'u' || arrayOfStrings[i] === 'U') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates  
                        var xA = sketch.random(5, q2);
                        var xB = sketch.random(xA, max);
                        var yA = sketch.random(5, q1);
                        var yC = sketch.random(yA, q3);
                        var mid = ((xB - xA) / 2) + xA;
                        var w = xB - xA;

                        // arc
                        sketch.arc(mid, yC, w, w, 0, sketch.PI);

                        // two sketch.lines
                        sketch.line(xA, yA, xA, yC);
                        sketch.line(xB, yA, xB, yC);
    
                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'v' || arrayOfStrings[i] === 'V') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var x1 = sketch.random(5, max);
                        var y1 = sketch.random(q3, max);
                        var x2 = sketch.random(5, x1);
                        var x3 = sketch.random(x1, max);
                        var y = sketch.random(5, q3);

                        // lines
                        sketch.line(x1, y1, x2, y);
                        sketch.line(x1, y1, x3, y);
    
                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'w' || arrayOfStrings[i] === 'W') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates  
                        var xb1 = sketch.random(q1, q3);
                        var y1 = sketch.random(q3, max);
                        var xb2 = sketch.random(xb1, max);
                        var x2 = sketch.random(5, xb1);
                        var x3 = sketch.random(xb1, xb2);
                        var y = sketch.random(5, q3);  
                        var x4 = sketch.random(xb2, max);

                        // lines
                        sketch.line(xb1, y1, x2, y);
                        sketch.line(xb1, y1, x3, y);
                        sketch.line(xb2, y1, x3, y);
                        sketch.line(xb2, y1, x4, y);    

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'x' || arrayOfStrings[i] === 'X') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates  
                        var xA = sketch.random(5, q2);
                        var yA = sketch.random(5, q1);
                        var xC = sketch.random(q2, max);
                        var xB = max - xA;
                        var yB = max - yA;
                        var xD = max - xC;

                        // sketch.lines
                        sketch.line(xA, yA, xB, yB);
                        sketch.line(xC, yA, xD, yB);  

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'y' || arrayOfStrings[i] === 'Y') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var x1 = sketch.random(5, max);
                        var y1 = sketch.random(q1, max);
                        var x2 = sketch.random(5, x1);
                        var x3 = sketch.random(x1, max);
                        var y = sketch.random(5, q1);
                        var yb = sketch.random(y1, max);

                        // sketch.lines
                        sketch.line(x1, y1, x2, y);
                        sketch.line(x1, y1, x3, y);
                        sketch.line(x1, y1, x1, yb); 

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === 'z' || arrayOfStrings[i] === 'Z') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                        var max = (window.innerWidth / 12) - r ;
                        sketch.translate(r / 2, r / 2);

                        // quarters of the canvas
                        var q1 = max / 4;
                        var q2 = max / 2;
                        var q3 = (max / 4) * 3;

                        // coordinates
                        var xA = sketch.random(5, q3);
                        var yA = sketch.random(5, q1);
                        var xB = sketch.random(xA, max);
                        var yC = sketch.random(yA, max);

                        // sketch.lines
                        sketch.line(xA, yA, xB, yA);
                        sketch.line(xA, yC, xB, yC);
                        sketch.line(xB, yA, xA, yC);

                    }

                }

                var myp5 = new p5(s);

            }

            if (arrayOfStrings[i] === ' ') {

                var s = function( sketch ) {

                    sketch.setup = function() {

                        sketch.createCanvas(window.innerWidth / 10, window.innerWidth / 10);
                        sketch.frameRate(2);

                    }

                    sketch.draw = function() {

                        sketch.background(255);
                        sketch.strokeWeight(r);

                    }

                }

                var myp5 = new p5(s);

            }



        }

        console.log('Element number 1 is ' + arrayOfStrings[0] + '.');

    }

    var space = '';

    splitString(t, space);

}

