// wait until the page loads, 
// then initiate all of our code
window.onload = runClock;

// all the clock JS goes inside here
function runClock() {

    var now = new Date();
    // get the <title> from the document <head>
    var pageTitle = document.head.getElementsByTagName('title')[0];
    // get `<div id="container"></div>` from the <body>
    var container = document.getElementById('container');

    // log everything to the console so we can see what's happening
    console.log( now ); // before we get hours, minutes, seconds
    console.log( pageTitle );
    console.log( container );
    console.log( checkTime() ); 

    // 4. update our page in real time using `setInterval`
    setInterval( function(){

        // update `now` with the information returned from checkTime()
        now = checkTime();

        // call all the functions
        updateTitle( now );
        addContent( now );

    }, 1000 );


    // 3. create a tool that adds content to the container
    // 3a. update the content based on the current time
    function addContent( now ) {

        // <div class="shape" style="width:[width]px; height:[height]px;"></div>
        container.innerHTML += '<div class="shape" style="width:'+now.seconds+'px; height:'+now.seconds+'px;"></div>';

    }


    // 2. create a tool that runs a timer in the page title using `getElementsByTagName()`
    function updateTitle( now ) {

        pageTitle.innerText = now.hours+":"+now.minutes+":"+now.seconds;

    }


    // 1. create a tool that gets the current time using `Date()`
    // 1a. return the current hours, minutes, and seconds 
    function checkTime() {

        now = new Date();

        // see the Date() methods page for more options
        // http://www.w3schools.com/js/js_date_methods.asp
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        if ( seconds < 10) {
        	seconds = "0"+ seconds;
        };

        if ( minutes < 10) {
        	minutes = "0"+ minutes;
        };

        if ( hours < 10) {
        	hours = "0"+ hours;
        };

        return {
            hours : hours,
            minutes : minutes,
            seconds : seconds,
        }

    }

} // end runClock();