
const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {            //the audio to be played
    console.log(newUrl)
    new Audio(newUrl).play()
}


pianoKeys.forEach((pianoKey, i) => {                            // loop iterates through each piano key element and assigns a click event listener 
    const number = i < 9 ? '0' + (i + 1) : (i + 1)              // calculates the number of the piano key based on its index
    const newUrl = './24-piano-keys/key' + number + '.mp3'      //play Corresponding sound file
    pianoKey.addEventListener('click', () => playSound(newUrl)) //When key is clicked call the playSound function
})