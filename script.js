// import JS30Data from "./js30Data.json";

const JS30Data = [
    {
        id: 0,
        title: "JavaScript Drum Kit",
        imgURL: "./images/js-drum-kit.png",
        repoURL: "https://github.com/ferruhcihan/JS30-01-JavaScript-Drum-Kit",
        liveURL: "https://ferruhcihan.github.io/JS30-01-JavaScript-Drum-Kit/"
    },
    {
        id: 1,
        title: "JS and CSS Clock",
        imgURL: "./images/js-and-css-clock.png",
        repoURL: "https://github.com/ferruhcihan/JS30-02-JS-and-CSS-Clock",
        liveURL: "https://ferruhcihan.github.io/JS30-02-JS-and-CSS-Clock/"
    },
    {
        id: 2,
        title: "CSS Variables and JS",
        imgURL: "./images/css-variables.png",
        repoURL: "https://github.com/ferruhcihan/JS30-03-CSS-Variables",
        liveURL: "https://ferruhcihan.github.io/JS30-03-CSS-Variables/"
    },
    {
        id: 3,
        title: "Array Cardio Day 1",
        imgURL: "./images/css-variables.png",
        repoURL: "https://github.com/ferruhcihan/JS30-04-Array-Cardio-Day-1",
        liveURL: "https://ferruhcihan.github.io/JS30-04-Array-Cardio-Day-1/"
    },
    {
        id: 4,
        title: "Flex Panel Gallery",
        imgURL: "./images/flex-panel-gallery.png",
        repoURL: "https://github.com/ferruhcihan/JS30-05-Flex-Panel-Gallery",
        liveURL: "https://ferruhcihan.github.io/JS30-05-Flex-Panel-Gallery/"
    },
]


window.onload = function() {
    display();
}

function display() {
    const parentDiv = document.querySelector(".boxes");

    const projectBox = JS30Data.map(item => `
    <div class="box">
        <img id="boximg" src=${item.imgURL} alt=${item.title} />
        <div class="top-left">Day ${item.id + 1}</div>
        <h2>${item.title}</h2>
        <div class="links">
            <a href=${item.repoURL} target="blank"><img src="./images/github-icon.png" alt="github-icon" height="50"><p id="repolink">Repo</p></a>
            <a href=${item.liveURL} target="blank"><img src="./images/web-icon.png" alt="web-icon" height="50"><p id="livelink">Live</p></a>
        </div>
    </div>
    ` );    
    parentDiv.innerHTML = projectBox;
}

