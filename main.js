var el = document.getElementById("elevator");
var button = document.getElementById("button");
var el_con = document.getElementById("container");
var el_icon = document.getElementById("elevator-landing-icon");
var start_text = document.getElementById("elevator-landing-text");
var myError = document.getElementById("error");
var interior = document.getElementById("interior");
var info = document.getElementById("info");
var center = document.getElementById("center");
var buttons = document.getElementById("buttons");
var marquee = document.getElementById("marquee");
var body = document.querySelector("body");
var btnimgs = document.querySelectorAll(".button_imgs");
var audio = new Audio("music.mp3"); 
var ding = new Audio("elevatording.mp3"); 
var done = false;
var fadeIn = true;
var is_open = false;
var small = false;

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
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;

    width = 700 + (timePassed / 0.8);
    el_icon.style.width = width + "px";
    el.style.width = width + "px";
    el.style.right = (viewportWidth - width)/2 + "px";
    el.style.transform = "transform: translate(0%);";
    el.style.top = (150 - (timePassed/2)) + "px";

    }, 20);
}3


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
center.hidden = true;
buttons.hidden = true;
el.style.opacity = "0%";
button.addEventListener("click", run);
start_text.style.opacity = "0%";
interior.hidden = true;
info.hidden = true;


function run() {
    el_con.hidden = false;
    button.hidden = true;
    button.style.display = "none";
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

    if (timePassed >= 4800) {
        start_text.style.opacity = "0%";
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
    center.hidden = false;
    buttons.hidden = false;
    myFunction(x);
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
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open.png')";
        }
    } 

    if (timePassed >= 2*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open1.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open1.png')";
        }
    } 

    if (timePassed >= 3*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open2.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open2.png')";
        }
    } 

    if (timePassed >= 4*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open3.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open3.png')";
        }
    } 

    if (timePassed >= 5*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open4.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open4.png')";
        }
    } 

    if (timePassed >= 6*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open5.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open5.png')";
        }
    } 

    if (timePassed >= 7*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open6.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open6.png')";
        }
    } 

    if (timePassed >= 8*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open7.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open7.png')";
        }
    } 

    if (timePassed >= 9*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open8.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open8.png')";
        }
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
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open7.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open7.png')";
        }
    } 

    if (timePassed >= 2*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open6.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open6.png')";
        }
    } 

    if (timePassed >= 3*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open5.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open5.png')";
        }
    } 

    if (timePassed >= 4*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open4.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open4.png')";
        }
    } 

    if (timePassed >= 5*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open3.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open3.png')";
        }
    } 

    if (timePassed >= 6*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open2.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open2.png')";
        }
    } 

    if (timePassed >= 7*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open1.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open1.png')";
        }
    } 

    if (timePassed >= 8*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall-open.png')";
        } else {
            interior.style.backgroundImage = "url('interior-open.png')";
        }
    } 

    if (timePassed >= 9*x) {
        if (small) {
            interior.style.backgroundImage = "url('interiorsmall.png')";
        } else {
            interior.style.backgroundImage = "url('interior.png')";
        }
    } 

    if (timePassed >= 10*x) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
    } 

    }, 20);
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        small = true;
        if(is_open) {
            interior.style.backgroundImage = "url('interiorsmall-open8.png')";
        } else {
            interior.style.backgroundImage = "url('interiorsmall.png')";
        }
        buttonChange = setInterval(changeButtons, 100);

    } else {
        for (const img of btnimgs) {
            img.style.width = "70px";
        }
        buttons.style.width = "150px";

        marquee.style.marginLeft = "10px";
        marquee.style.marginTop = "-355px";
        marquee.style.width = "180px";
        marquee.style.fontSize = "3em";

        small = false;
        if(is_open) {
            interior.style.backgroundImage = "url('interior-open8.png')";
        } else {
            interior.style.backgroundImage = "url('interior.png')";
        }
        if (buttonChange != null) {
            clearInterval(buttonChange);
        }
    }
  }

  function changeButtons() {
    viewportWidth = window.innerWidth;
    size = 700 - ((1200 - window.innerWidth)/2);
    center.style.width = size + "px";
    info.style.width = (size*0.39) + "px";
    info.style.height = (1.82 * (size*0.39)) + "px";
    change = (425/579)*((1200 - window.innerWidth)/2)*(0.5);
    info.style.marginTop = change + "px";
    buttons.style.paddingLeft =  45 - (change/1.8) + "px";
    buttons.style.marginTop = -150 + (change/1.3) + "px";
    buttons.style.width = (150 -(change/1.8)) + "px";

    marquee.style.marginLeft = 10 - (change/3) + "px";
    marquee.style.marginTop = -355 + (change/0.59) + "px";
    marquee.style.width = (180 - (change/1.3)) + "px";
    marquee.style.height = ((180 - (change/1.3))/4)+ "px";
    marquee.style.fontSize = 3-(change/50) + "em";

    for (const img of btnimgs) {
        img.style.width = (70 - (change/3)) + "px";
    }
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 1200px)")

  x.addEventListener("change", function() {
    myFunction(x);
  });
  
//buttons
  var button1 = document.getElementById("button1");
  button1.addEventListener('click', switchInterior);
  button1.addEventListener('click', (evt) => addInfo('<iframe width="100%" height="auto" src="https://www.youtube.com/embed/QXcFMjKy4sk?si=FBT0rwFLe2b5LI93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',"Card Trick"));

  var button2 = document.getElementById("button2");
  button2.addEventListener('click', switchInterior);
  button2.addEventListener('click', (evt) => addInfo("<p>I got into an argument with the elevator.<br><strong>It was wrong on so many levels.</strong></p>", "Joke #1"));
  
  var button3 = document.getElementById("button3");
  button3.addEventListener('click', switchInterior);
  button3.addEventListener('click', (evt) => addInfo("<p>You know, I told my friend a joke while we were in the elevator once…<br><strong>It had its ups and downs, but it really lifted his spirits.</strong></p>", "Joke #2"));

  var hughes = "<p>I got a job now<br>Runnin’ an elevator<br>In the Dennison Hotel in Jersey,<br>Job aint no good though.<br>No money around.<br>Jobs are just chances<br>Like everything else.<br>Maybe a little luck now,<br>Maybe not.<br>Maybe a good job sometimes:<br>Step out o’ the barrel, boy.<br>Two new suits an’<br>A woman to sleep with.<br>Maybe no luck for a long time.<br>Only the elevators<br>Goin’ up an’ down,<br>Up an’ down,<br>Or somebody else’s shoes<br>To shine,<br>Or greasy pots in a dirty kitchen.<br>I been running’ this<br>Elevator too long.<br>Guess I’ll quit now.</p>"

  var button4 = document.getElementById("button4");
  button4.addEventListener('click', switchInterior);
  button4.addEventListener('click', 
    (evt) => addInfo(hughes, "Poem #1"));

var rainwater = "<p>When I go to paradise<br>let there be only one<br>bell, scented with rainwater<br>and with tiled roofs at dawn.<br><br>When I decide to go<br>to paradise, I will go<br>there in the elevator,<br>at night, of Castelletto,<br>stealing a little piece<br>of my eternal peace.<br><br>I’ll go there stealing (perhaps<br>in my mouth) a few crumbs<br>of bread for my two little ones.<br>But the black light of the sea<br>will pulsate rhythmically<br>between my brows, and . . . perhaps<br>(perhaps) on the terrace where<br>they’re wearing dressing gowns,<br>among the stirred-up crowds<br>of boys (among maids bright<br>with life and with face powder<br>enjoying a free hour),<br>who knows, I might recognize<br>my mother in the lamplight.<br><br>With her I will turn to see<br>the white lights on the sea.<br>We’ll stand at the iron railing,<br>alone and hand in hand,<br>betrothed, as we had never<br>been in all those years.<br>In the shudder of the railing.</p>"

  var button5 = document.getElementById("button5");
  button5.addEventListener('click', switchInterior);
  button5.addEventListener('click', (evt) => addInfo(rainwater, "Poem #2"));

var sexton = "<p>As the fireman said:<br>Don't book a room over the fifth floor<br>in any hotel in New York.<br>They have ladders that will reach further<br>but no one will climb them.<br>As the New York Times said:<br>The elevator always seeks out<br>the floor of the fire<br>and automatically opens<br>and won't shut.<br>These are the warnings<br>that you must forget<br>if you're climbing out of yourself.<br>If you're going to smash into the sky.<br><br>Many times I've gone past<br>the fifth floor,<br>cranking upward,<br>but only once<br>have I gone all the way up.<br>Sixtieth floor:<br>small plants and swans bending<br>into their grave.<br>Floor two hundred:<br>mountains with the patience of a cat,<br>silence wearing its sneakers.<br>Floor five hundred:<br>messages and letters centuries old,<br>birds to drink,<br>a kitchen of clouds.<br>Floor six thousand:<br>the stars,<br>skeletons on fire,<br>their arms singing.<br>And a key,<br>a very large key,<br>that opens something —<br>some useful door —<br>somewhere —<br>up there.</p>"

  var button6 = document.getElementById("button6");
  button6.addEventListener('click', switchInterior);
  button6.addEventListener('click', (evt) => addInfo(sexton, "Poem #3"));

function addInfo(m_content, m_title) {
    var title = document.getElementById("title");
    var content = document.getElementById("content");

    title.innerHTML = m_title;
    content.innerHTML = m_content;
}

addInfo("<p>Hello!</p>", "Test title", "github.com");