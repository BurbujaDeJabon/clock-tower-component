const clockArray = [
    {
        title: 'Gabriadze Clock Tower' ,
        location: 'Tbilisi, Georgia',
        image: "https://miro.medium.com/v2/resize:fit:1400/1*a6FoVSgUW7LAfCKbERsuMw.jpeg",
        stats: 'Height: 75ft | Date: 2010',
        description: "Twice a day at 12 PM and 7 PM, a short puppet show known as the 'Circle of Life' takes place on the tower's balcony." ,
    },
    {
        title: 'Big Joe',
        location: 'Birmingham University, UK',
        image: "https://birminghammagazine.co.uk/wp-content/uploads/2023/07/Old_Joe_The_Joseph_Chamberlain_Clock_Tower_-_geograph.org_.uk_-_4209814-scaled.jpg",
        stats: 'Height: 361ft | Date: 1908',
        description: "There is a superstition that if students walk through the tower's archway when it chimes, that they will fail their degree.",
    },
    {
        title: 'Zytglogge',
        location: 'Bern, Switzerland' ,
        image: "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2024/03/28/13/12/14/bern-kramgasse.jpg",
        stats: 'Height: 179ft | Date: 1218',
        description: "Right before the clock strikes the hour a crowing rooster announces the start of an entertaining spectacle.",
    },
    {
        title: 'Paramount Building',
        location: 'Broadway, Manhattan, NY',
        image: "https://images.squarespace-cdn.com/content/v1/5d6c01b8387da8000156ac34/1622905500561-V6JTP4V7PGOQHYZ24UBX/14.jpg?format=2500w",
        stats: 'Height: 455ft | Date: 1927',
        description: "The hours are denoted by five-pointed stars (forming a circle of stars as used in the Paramount Pictures logo)",
    },
    {
        title: 'Liver Building',
        location: 'Liverpool, UK',
        image: "https://www.residenthotels.com/wp-content/uploads/2022/06/Royal-Liver-Building.jpeg",
        stats: 'Height: 340ft | Date: 1908',
        description: "Known for its two copper Liver bird sculptures, Bertie and Bella, designed by Carl Bernard Bartel."
    },
    
];

let currentIndex = 0;

function renderClockTower(){
    const clockTower = clockArray[currentIndex];
    document.getElementById("clock-title").innerText = clockTower.title;
    document.getElementById("clock-location").innerText = clockTower.location;
    document.getElementById("clock-image").src = clockTower.image;
    document.getElementById("clock-stats").innerText = clockTower.stats;
    document.getElementById("clock-description").innerText = clockTower.description;
}

function showPrevious() {
 if (currentIndex > 0) {
     currentIndex--
     renderClockTower();
 };
}

function showNext() {
    if (currentIndex < clockArray.length - 1) {
        currentIndex++
        renderClockTower();
    }
}

renderClockTower();