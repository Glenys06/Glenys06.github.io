// Get the elements and store it in variable, needle will rotate to show the beat
var needle = document.getElementById("needle");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

// Initialize the variables
var angle = -45; // The angle of the needle
var speed = 120; // The speed of the metronome in bpm
var timer = null; // The timer for the animation starts as null because the metronome is not running initially
var audio = new Audio("./Metronome-click/metronome-120bpm-85063.mp3"); // The audio file for the click sound

// Start the metronome
function startMetronome() {
    //checks if the timer variable is currently null. When the metronome is not running, the timer variable is set to null.
    //if is true  is true proceed to the code block inside the if statement.
    if (timer === null) {
        timer = setInterval(animate, 1000 * (60 / speed) / 2);//calculates the number of milliseconds for one beat at the given bpm,divide 2 is used to animate the needle back and forth within one beat
        animate();                                            // needle move immediately without any delay.                  
    }
}

function stopMetronome() {
    // Stop the metronome
    if (timer !== null) {         // If is running stop it.
        clearInterval(timer);     //stops animation
        timer = null;
        angle = -45;              //reset angle of needle to original
        needle.style.transform = "rotate(" + angle + "deg)";   // update css style of needle element ,resets the needle to the left position
        audio.pause();             // stops audio
        audio.currentTime = 0;    //make sure next time the sound is played it will start from the beginning
    }
}

// rotate needle back and forth
function animate() {
    //if angle of the needle is -45 degrees needle is on the left side 
    if (angle === -45) {     
        angle = 45;          // set the angle to 45 degrees-moves needle to the right
        audio.play();        //play audio if needle is on the right side
    } else {                 // needle is not -45 degrees on the right so need to set it back to the left
        angle = -45;         //set needle back to left side
    }
    needle.style.transform = "rotate(" + angle + "deg)";  //update the CSS style of the needle element to apply the new angle
}

// Add event listeners to the buttons, call the start and stop functions
//listen for a click event on the buttons and call respective functions
start.addEventListener("click", startMetronome);
stop.addEventListener("click", stopMetronome);
