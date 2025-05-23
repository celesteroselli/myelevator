var el = document.getElementById("elevator");
var el_con = document.getElementById("container");
var el_icon = document.getElementById("elevator-landing-icon");
var el_text = document.getElementById("elevator-landing-text");
var myError = document.getElementById("error");
var audio = new Audio("music.mp3"); 
var ding = new Audio("elevatording.mp3"); 
var done = false;

function elevatorOpen() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;
    let x = 150;

    if (timePassed >= x ) {
        el_icon.src = "pixil-frame-1.png";
    } 

    if (timePassed >= 2*x) {
        el_icon.src = "pixil-frame-2.png";
    } 

    if (timePassed >= 3*x) {
        el_icon.src = "pixil-frame-3.png";
    } 

    if (timePassed >= 4*x) {
        el_icon.src = "pixil-frame-4.png";
    } 

    if (timePassed >= 5*x) {
        el_icon.src = "pixil-frame-5.png";
    } 

    if (timePassed >= 6*x) {
        el_icon.src = "pixil-frame-6.png";
    } 

    if (timePassed >= 7*x) {
        el_icon.src = "pixil-frame-7.png";
    } 

    if (timePassed >= 8*x) {
        clearInterval(timer); // finish the animation after 2 seconds
        ding.play();
        zoom();
        return;
    } 

    }, 20);
}

function zoom() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 6000) {
        clearInterval(timer); // finish the animation after 2 seconds
        el_text.style.opacity = "100%";
        el_icon.style.opacity = "0%";
        return;
    } 

    el.style.top = 150 - (timePassed / 2) + "px";
    el.style.left = 50 - (timePassed / 29) + "%";
    el_icon.style.width = 700 + (timePassed / 0.8) + "px";

    }, 20);
}


function downAnimation() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 3000) {
        clearInterval(timer); // finish the animation after 2 seconds
        backgroundUpAnimation();
        //el_text.style.opacity = "100%";
        return;
    } 

    // draw the animation at the moment timePassed
    comeDown(timePassed);

    }, 20);
}

function backgroundUpAnimation() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 4000) {
        clearInterval(timer);
        elevatorOpen()

        return;
    } 

    // draw the animation at the moment timePassed
    comeUp(timePassed);

    }, 20);
}

function comeDown(timePassed) {
  el.style.top = (timePassed / 20) + 'px';
}

function comeUp(timePassed) {
    el_con.style.backgroundPositionY = (timePassed / 5) + 'px';
  }

//setups
document.getElementById("button").addEventListener("click", run);
el_text.style.opacity = "0%";

function run() {
    document.getElementById("button").style.opacity = "0%";
    downAnimation();
    audio.play();
}