var d = new Date();

setInterval(function() {
	d = clock();
	updateTime(d);
	updateMeeting(d);
}, 1000);

function clock() {
	d = new Date();
	var weekday = d.getDay();
	var hours = d.getHours();
	var displayHours = hours;
	var meridiem = "am";
	var minutes = d.getMinutes();
	var displayMinutes = minutes;
	var seconds = d.getSeconds();

	if (hours > 12) {
		displayHours = hours - 12;
		meridiem = "pm"
	}

	if (minutes < 10) {
		displayMinutes = "0" + minutes;
	}

	return {
		weekday : weekday,
		hours : hours,
		displayHours,
		meridiem : meridiem,
		minutes : minutes,
		displayMinutes : displayMinutes
	}
}

function updateTime(d) {
	document.getElementById("time").innerHTML = d.displayHours + ":" + d.displayMinutes + " " + d.meridiem;
}

function updateMeeting(d) {
	var meeting = document.getElementById("meeting");

	if (d.weekday > 0 && d.weekday < 5) {
		if (d.hours == 10 && d.minutes < 30) {
			meeting.innerHTML = "Yes";
		} else {
			meeting.innerHTML = "No";
		}

	} else {
		meeting.innerHTML = "No";
	}
}