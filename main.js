var el = document.getElementById("elevator");
var el_con = document.getElementById("container");
var el_icon = document.getElementById("elevator-landing-icon");
var start_text = document.getElementById("elevator-landing-text");
var myError = document.getElementById("error");
var interior = document.getElementById("interior");
var info = document.getElementById("info");
var body = document.querySelector("body");
var audio = new Audio("music.mp3"); 
var ding = new Audio("elevatording.mp3"); 
var done = false;
var fadeIn = true;
var is_open = false;

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
interior.hidden = true;
info.hidden = true;


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
    interior.hidden = false;
    info.hidden = false;
    interior.style.backgroundImage = "url('interior.png')";
}

document.addEventListener('keydown', switchInterior);

function switchInterior() {
    if (is_open) {
        interiorClose();
        is_open = false;
    } else {
        interiorOpen();
        is_open = true;
    }

}

function interiorOpen() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;
    let x = 100;

    if (timePassed >= x ) {
        ding.play();
        interior.style.backgroundImage = "url('interior-open.png')";
    } 

    if (timePassed >= 2*x) {
        interior.style.backgroundImage = "url('interior-open1.png')";
    } 

    if (timePassed >= 3*x) {
        interior.style.backgroundImage = "url('interior-open2.png')";
    } 

    if (timePassed >= 4*x) {
        interior.style.backgroundImage = "url('interior-open3.png')";
    } 

    if (timePassed >= 5*x) {
        interior.style.backgroundImage = "url('interior-open4.png')";
    } 

    if (timePassed >= 6*x) {
        interior.style.backgroundImage = "url('interior-open5.png')";
    } 

    if (timePassed >= 7*x) {
        interior.style.backgroundImage = "url('interior-open6.png')";
    } 

    if (timePassed >= 8*x) {
        interior.style.backgroundImage = "url('interior-open7.png')";
    } 

    if (timePassed >= 9*x) {
        interior.style.backgroundImage = "url('interior-open8.png')";
    } 

    if (timePassed >= 10*x) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    } 

    }, 20);
}

function interiorClose() {
    let start = Date.now(); // remember start time

    let timer = setInterval(function() {
    // how much time passed from the start?
    let timePassed = Date.now() - start;
    let x = 100;

    if (timePassed >= x ) {
        ding.play();
        interior.style.backgroundImage = "url('interior-open7.png')";
    } 

    if (timePassed >= 2*x) {
        interior.style.backgroundImage = "url('interior-open6.png')";
    } 

    if (timePassed >= 3*x) {
        interior.style.backgroundImage = "url('interior-open5.png')";
    } 

    if (timePassed >= 4*x) {
        interior.style.backgroundImage = "url('interior-open4.png')";
    } 

    if (timePassed >= 5*x) {
        interior.style.backgroundImage = "url('interior-open3.png')";
    } 

    if (timePassed >= 6*x) {
        interior.style.backgroundImage = "url('interior-open2.png')";
    } 

    if (timePassed >= 7*x) {
        interior.style.backgroundImage = "url('interior-open1.png')";
    } 

    if (timePassed >= 8*x) {
        interior.style.backgroundImage = "url('interior-open.png')";
    } 

    if (timePassed >= 9*x) {
        interior.style.backgroundImage = "url('interior.png')";
    } 

    if (timePassed >= 10*x) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    } 

    }, 20);
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        interior.style.backgroundImage = "url('interiorsmall.png')";
    } else {
        interior.style.backgroundImage = "url('interior.png')";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1200px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });
  
//buttons
  var button1 = document.getElementById("button1");
  button1.addEventListener('click', switchInterior);
  button1.addEventListener('click', (evt) => addInfo("button1content", "button1title", "github.com"));

  var button2 = document.getElementById("button2");
  button2.addEventListener('click', switchInterior);
  button2.addEventListener('click', (evt) => addInfo("button2content", "button2title", "github.com"));
  
  var button3 = document.getElementById("button3");
  button3.addEventListener('click', switchInterior);
  button3.addEventListener('click', (evt) => addInfo("button3content", "button3title", "github.com"));

  var button4 = document.getElementById("button4");
  button4.addEventListener('click', switchInterior);
  button4.addEventListener('click', (evt) => addInfo("button4content", "button4title", "github.com"));

  var button5 = document.getElementById("button5");
  button5.addEventListener('click', switchInterior);
  button5.addEventListener('click', (evt) => addInfo("button5content", "button5title", "github.com"));

  var button6 = document.getElementById("button6");
  button6.addEventListener('click', switchInterior);
  button6.addEventListener('click', (evt) => addInfo("button6content", "button6title", "github.com"));

  var button7 = document.getElementById("button7");
  button7.addEventListener('click', switchInterior);
  button7.addEventListener('click', (evt) => addInfo("button7content", "button7title", "github.com"));

  var button8 = document.getElementById("button8");
  button8.addEventListener('click', switchInterior);
  button8.addEventListener('click', (evt) => addInfo("button8content", "button8title", "github.com"));

function addInfo(m_content, m_title, m_git) {
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    var git = document.getElementById("git");

    title.innerHTML = m_title;
    content.innerHTML = m_content;
    git.href = m_git;
}

addInfo("<p>Hello!</p>", "Test title", "github.com");