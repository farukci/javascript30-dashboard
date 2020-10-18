// import JS30Data from "./js30Data.json";

const JS30Data = [
    {
        id: 0,
        title: "JavaScript Drum Kit",
        imgURL: "./images/js-drum-kit.png",
        repoURL: "https://github.com/farukci/JS30-01-JavaScript-Drum-Kit",
        liveURL: "https://farukci.github.io/JS30-01-JavaScript-Drum-Kit/"
    },
    {
        id: 1,
        title: "JS and CSS Clock",
        imgURL: "./images/js-and-css-clock.png",
        repoURL: "https://github.com/farukci/JS30-02-JS-and-CSS-Clock",
        liveURL: "https://farukci.github.io/JS30-02-JS-and-CSS-Clock/"
    },
]


window.onload = function() {
    display();
}

function display() {
    const parentDiv = document.querySelector(".boxes");
    let projectBox = null;

    projectBox = JS30Data.map(item => `
    <div class="box">
        <img id="boximg" src=${item.imgURL} alt=${item.title} />
        <h2>${item.title}</h2>
        <div class="links">
            <a href=${item.repoURL} target="blank"><img src="./images/github-icon.png" alt="github-icon" height="50"></a>
            <a href=${item.liveURL} target="blank"><img src="./images/web-icon.png" alt="web-icon" height="50"></a>
        </div>
    </div>
    ` );    
    parentDiv.innerHTML = projectBox;
}

