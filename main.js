var el = document.getElementById("elevator");
var el_con = document.getElementById("container");
var el_icon = document.getElementById("elevator-landing-icon");
var start_text = document.getElementById("elevator-landing-text");
var myError = document.getElementById("error");
var interior = document.getElementById("interior");
var body = document.querySelector("body");
var audio = new Audio("music.mp3"); 
var ding = new Audio("elevatording.mp3"); 
var done = false;
var fadeIn = true;

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
        el_con.hidden = true;
        el_icon.style.opacity = "0%";
        transition();
        return;
    } 

    el.style.top = 150 - (timePassed / 2) + "px";
    el.style.left = 50 - (timePassed / 27) + "%";
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
el_con.hidden = true;
el.style.opacity = "0%";
document.getElementById("button").addEventListener("click", run);
start_text.style.opacity = "0%";

function run() {
    el_con.hidden = false;
    document.getElementById("button").style.opacity = "0%";
    el.style.opacity = "100%";
    downAnimation();
    audio.play();
}

function backgroundUpAnimation() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 1000) {
        clearInterval(timer);
        elevatorOpen()

        return;
    } 

    // draw the animation at the moment timePassed
    comeUp(timePassed);

    }, 20);
}

function transition() {
    body.style.backgroundColor = "#1d1d2a";
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 1000) {
        start_text.style.opacity = "100%";
    } 

    if (timePassed >= 4000) {
        fadeIn = false;
    } 

    if (timePassed >= 5000) {
        clearInterval(timer);
        start_text.style.opacity = "0%";
        newScreen();

        return;
    }

    // draw the animation at the moment timePassed
    if (fadeIn) {
    start_text.style.opacity = timePassed / 10 + "%";
    } else if (!fadeIn && timePassed <= 4800)  {
        start_text.style.opacity = 100 - ((timePassed-4000) / 10) + "%";
    }

    }, 20);
    
    

}

function newScreen() {
    interior.style.backgroundImage = "url('interior.png')";
}