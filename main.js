var elem = document.getElementById("elevator");
var myError = document.getElementById("error");
var audio = new Audio("music.mp3"); 

function downAnimation() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    } 

    // draw the animation at the moment timePassed
    comeDown(timePassed);

    }, 20);
}

function upAnimation() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    } 

    // draw the animation at the moment timePassed
    comeUp(timePassed);

    }, 20);
}

function comeDown(timePassed) {
  elem.style.top = timePassed / 5 + 'px';
}
function comeUp(timePassed) {
    elem.style.top = 400 - (timePassed / 5) + 'px';
  }

document.getElementById("button").addEventListener("click", run);
function run() {
    document.getElementById("button").style.opacity = 0 + "%";
    downAnimation();
    audio.play();
}