const grid = document.getElementsByClassName("grid")[0];
const entries = [
    {
        year: 2023,
        month: 0,
        date: 9,
        title: "Coquette",
        body: ["• Orange and yellow tiles","• Wearing a seatbelt to watch a perfomance","• Wet and mildly uncomfortable"]
    },
    {
        year: 2023,
        month: 0,
        date: 11,
        title: "Humid",
        body: ["• Yellow flower cutouts on white lace" ,"• Milk forming the silhouette of two fish"]
    },
    {
        year: 2020,
        month: 8,
        date: 4,
        title: "Russ & Daughters",
        body: ["Putting on a play at R&D. It's stressful—theres not much space in there but somehow I've installed a narrow stage and seating area for the audience. I'm being over-controlling and micro-managing. The actors all have real guns as props in the play—they snap at each other and me by pointing their gun and yelling at their target. I'm the only person without a gun so I pick up other (kitchen themed) props and point them at people (like you would with a gun). I'm trying to prove that im not afraid of them with their guns"]
    }
]

buildPage(0, 2023);

// to do
// menu where u change the month and year = (should call buildPage() again)
// call buildPage() on page load using the actual current date

function buildPage(month, year) {
    for (let j = 0; j < getDaysInMonth(month, year); j++) {
        let cell = createDiv("div", "cell");
        let cellNumber = createDiv("div", "cell__number");
        let cellEntry = createDiv("div", "cell__entry");

        for (let n = 0; n < getEntries(month, year).length; n++) {
            const entry = getEntries(month, year)[n];
            
            if (entry.date == j + 1) {
                cellNumber.className = "cell__number--filled";

                for (let m = 0; m < entry.body.length; m++) {
                    const paragraph = createDiv("p", "entry__paragraph")
                    paragraph.innerText = entry.body[m];
                    cellEntry.append(paragraph);
                }
            }
        }
        
        cellNumber.innerText = j + 1;
        cell.append(cellNumber);
        cell.append(cellEntry);
        grid.append(cell);
    }
}

function getEntries(month, year) {
    let selectEntries = [];

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
    
        if (entry.month == month && entry.year == year) {
            selectEntries.push(entry);
        }
    }

    return selectEntries;
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function createDiv(tagName, className) {
    let element = document.createElement(tagName);
    element.className = className;

    return element;
}

function getPrettyDate() {
	d = new Date();
    
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
        year: year,
        month: months[month],
        date: date,
        day: days[day]
    }
}