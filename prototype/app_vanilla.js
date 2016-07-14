/** 
 *  Learn morse code the fun way!
 * 
 */

var morse_data = {
    "A": ".-", 
    "B": "-...", 
    "C": "-.-.", 
    "D": "-..", 
    "E": ".", 
    "F": "..-.", 
    "G": "--.", 
    "H": "....", 
    "I": "..", 
    "J": ".---", 
    "K": "-.-", 
    "L": ".-..", 
    "M": "--", 
    "N": "-.", 
    "O": "---", 
    "P": ".--.", 
    "Q": "--.-", 
    "R": ".-.", 
    "S": "...", 
    "T": "-", 
    "U": "..-", 
    "V": "...-", 
    "W": ".--", 
    "X": "-..-", 
    "Y": "-.--", 
    "Z": "--..", 
    "&Auml;": ".-.-",       // Ä
    "&Aacute;": ".--.-",    // Á
    "&Aring;": ".--.-",     // Å
    "&Agrave;": ".--.-",    // À
    "CH": "----", 
    "&Ccedil;": "-.-..",    // ç
    "&ETH;": "..--.",       // Ð
    "&Eacute;": "..-..",    // É
    "&Egrave;": ".-..-",    // È
    "&Gcirc;": "--.-.", 
    "&Hcirc;": "-.--.", 
    "&Jcirc;": ".---.", 
    "&Ntilde;": "--.--",    // Ñ
    "&Ouml;": "---.",       // Ö
    "&Scirc;": "...-.", 
    "&Uuml;": "..--",       // Ü
    "&thorn;": ".--..",     // þ
    "0": "-----", 
    "1": ".----", 
    "2": "..---", 
    "3": "...--", 
    "4": "....-", 
    "5": ".....", 
    "6": "-....", 
    "7": "--...", 
    "8": "---..", 
    "9": "----.", 
    ".": ".-.-.-",
    ",": "--..--",
    ":": "---...",
    ";": "-.-.-.", 
    "?": "..--..",
    "!": "-.-.--", 
    "'": ".----.",
    "&quot;": ".-..-.",     // "
    "-": "-....-",
    "+": ".-.-.",
    "_": "..--.-",
    "/": "-..-.",
    "@": ".--.-.",
    "=": "-...-"
};
// Brackets (parentheses)  -.--.-


// Constants 
var spaceBarKeyCode = 32;

// To hold input / output
var $output = document.querySelector('#js-morseOutput h3'), 
    morseString = '', 
    outputString = '';

// Track short / long presses
var pressed = false, 
    timer, 
    keyPressedTime = 0;


function wrapHTMLElement(el, wrap) {
    return '<' + wrap + '>' + el + '</' + wrap + '>';
}

function runTimer() {
    timer = setInterval(function() {
        ++keyPressedTime;
    }, 100);
}

function startKeyCounter() {
    clearInterval(timer);
    runTimer();
}

function stopKeyCounter() {
    clearInterval(timer);
    keyPressedTime = 0;
}

function charLookup(morse) {
    for (key in morse_data) {
        if (morse === morse_data[key]) {
            return key;
            // console.log(morse);
        } else {
            console.log('morse');
        }
    }
}

function addMorseChar(callback) {
    console.log(keyPressedTime);
    // No morse has more than 6 chars
    if (morseString.split('').length < 6) {
        if (keyPressedTime < 2) {
            morseString += '.';
        } else {
            morseString += '-';
        }

        if (typeof callback === 'function') {
            callback();
        }

    } else {
        console.log('more than 6')
    }
    stopKeyCounter();
}

function resetMorseString() {
    morseString = '';
}

function writeOutput(output) {
    console.log(output);
    if (typeof output === 'string') {
        output 
        $output.innerHTML +=  wrapHTMLElement(output, 'i');
    }
}

// Event handlers
function main() {
    
    document.addEventListener('keydown', function(e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode !== spaceBarKeyCode) {
            return;
        } else {
            e.preventDefault();
            if (pressed === true) {
                return;  // Dont count if already pressed
            } else {
                pressed = true;
                startKeyCounter();
            }
        }
    });

    document.addEventListener('keyup', function(e) {
        var keyCode = e.keyCode || e.which;

        if (keyCode !== spaceBarKeyCode) {
            return;
        } else {
            e.preventDefault();
            if (pressed === false) {
                return;  // Dont count if already pressed
            } else {
                pressed = false;
                // If we have finished waiting add a character to our 
                addMorseChar(function() {
                    var outputString = charLookup(morseString);
                    writeOutput(outputString);
                });
            }
        }    
    });
}

// Call main function when page has loaded
!(function() {
  if (document.readyState != 'loading'){
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
})();
