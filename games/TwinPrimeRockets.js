/*

  Press 'a' if you think the numbers are prime or press 'd' if you think they are not."

*/

const player = "p"
const rocks = "r"

var no1 = 0;
var no2 = 0;

var looping = true;
var score = 0;

var background = "b";


setLegend(
  [ player, bitmap`
................
................
................
................
................
................
................
................
.00000000000000.
.066666666603300
.066666666603330
.066666666603330
.066666666603330
.066666666603300
.00000000000000.
................` ],
  [ background, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
)
setBackground(background)

const melody = tune`
101.69491525423729: A5^101.69491525423729 + G5^101.69491525423729 + F5^101.69491525423729 + D5^101.69491525423729 + B5~101.69491525423729,
101.69491525423729: C5~101.69491525423729 + G4~101.69491525423729 + F4~101.69491525423729 + E4~101.69491525423729,
101.69491525423729: E4~101.69491525423729 + D4~101.69491525423729,
101.69491525423729: G4/101.69491525423729 + D4~101.69491525423729 + F4/101.69491525423729 + A5-101.69491525423729 + G5-101.69491525423729,
101.69491525423729: C4~101.69491525423729 + B4/101.69491525423729 + A4/101.69491525423729 + G4/101.69491525423729,
101.69491525423729: C4~101.69491525423729 + D4~101.69491525423729 + E5/101.69491525423729 + D5/101.69491525423729 + C5/101.69491525423729,
101.69491525423729: C5^101.69491525423729 + G5/101.69491525423729 + D4~101.69491525423729 + E4~101.69491525423729 + F5/101.69491525423729,
101.69491525423729: B4^101.69491525423729 + F5^101.69491525423729 + E4~101.69491525423729 + F4~101.69491525423729 + A5/101.69491525423729,
101.69491525423729: G4~101.69491525423729 + F4~101.69491525423729 + C5/101.69491525423729 + D5/101.69491525423729 + F5^101.69491525423729,
101.69491525423729: G4/101.69491525423729 + A4/101.69491525423729 + B4/101.69491525423729 + C5/101.69491525423729 + F5^101.69491525423729,
101.69491525423729: D5^101.69491525423729 + C5^101.69491525423729 + A4~101.69491525423729 + B4~101.69491525423729 + E4/101.69491525423729,
101.69491525423729: G5^101.69491525423729 + B4~101.69491525423729 + C5~101.69491525423729 + D4/101.69491525423729 + E4/101.69491525423729,
101.69491525423729: F4^101.69491525423729 + C5~101.69491525423729 + D5~101.69491525423729 + D4/101.69491525423729 + A5-101.69491525423729,
101.69491525423729: B4^101.69491525423729 + D5~101.69491525423729 + E5~101.69491525423729 + F5~101.69491525423729 + D4/101.69491525423729,
101.69491525423729: F5~101.69491525423729 + G5~101.69491525423729 + D4/101.69491525423729 + D5-101.69491525423729 + C5-101.69491525423729,
101.69491525423729: A4^101.69491525423729 + F5~101.69491525423729 + E5~101.69491525423729 + E4/101.69491525423729 + D4/101.69491525423729,
101.69491525423729: G5^101.69491525423729 + D5~101.69491525423729 + C5~101.69491525423729 + B4~101.69491525423729 + F4/101.69491525423729,
101.69491525423729: B4/101.69491525423729 + A4/101.69491525423729 + C5/101.69491525423729 + G4/101.69491525423729 + F4/101.69491525423729,
101.69491525423729: C5^101.69491525423729 + E5^101.69491525423729 + A4~101.69491525423729 + G4~101.69491525423729 + F5/101.69491525423729,
101.69491525423729: E5^101.69491525423729 + G4~101.69491525423729 + F4~101.69491525423729 + A5/101.69491525423729 + G5/101.69491525423729,
101.69491525423729: F4~101.69491525423729 + E4~101.69491525423729 + D4~101.69491525423729 + G5/101.69491525423729 + A5/101.69491525423729,
101.69491525423729: G5/101.69491525423729 + D4~101.69491525423729 + F5/101.69491525423729 + C5-101.69491525423729 + B4-101.69491525423729,
101.69491525423729: F4^101.69491525423729 + D4~101.69491525423729 + E4~101.69491525423729 + D5/101.69491525423729 + E5/101.69491525423729,
101.69491525423729: A4^101.69491525423729 + E4~101.69491525423729 + C5/101.69491525423729 + D5/101.69491525423729 + F4-101.69491525423729,
101.69491525423729: E5^101.69491525423729 + E4~101.69491525423729 + F4~101.69491525423729 + B4/101.69491525423729 + C5/101.69491525423729,
101.69491525423729: G5^101.69491525423729 + G4~101.69491525423729 + A4/101.69491525423729 + B4/101.69491525423729 + D4-101.69491525423729,
101.69491525423729: F4^101.69491525423729 + B4~101.69491525423729 + C5~101.69491525423729 + D5~101.69491525423729 + E5~101.69491525423729,
101.69491525423729: E5~101.69491525423729 + F5~101.69491525423729 + G5~101.69491525423729 + G4/101.69491525423729 + E4-101.69491525423729,
101.69491525423729: B4^101.69491525423729 + C5^101.69491525423729 + G5~101.69491525423729 + A5~101.69491525423729 + F4/101.69491525423729,
101.69491525423729: G5~101.69491525423729 + F4-101.69491525423729 + G4-101.69491525423729 + E4/101.69491525423729 + D4/101.69491525423729,
101.69491525423729: G5~101.69491525423729 + F5~101.69491525423729 + E5~101.69491525423729 + D5~101.69491525423729 + C5~101.69491525423729,
101.69491525423729: D4/101.69491525423729 + E4/101.69491525423729`
const playback = playTune(melody, Infinity)

function isPrimeNumber(num) {
  for (var i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return num > 1;
}
let level = 0
const levels = [
  map`
............
............
............
............
............
............
............
......p.....
............
............`
]

setMap(levels[level])

addText("Are "+ no1 +" and "+ no2 +" primes?", { 
        x: 1,
        y: 4,
        color: color`4`
      })

function gameOver() {
  clearText()
  addText("Game over!!", { 
        x: 5,
        y: 1,
        color: color`3`
      })
  addText("Score: "+ score, { 
        x: 5,
        y: 3,
        color: color`H`
      })
  playback.end()
  if(getFirst(player)) {
    getFirst(player).remove()
  }
}

function loop(count) {
  if(looping) {
    setTimeout(function() {
      no1 = count
      no2 = count + 2

      if(getFirst(player)) {
        addText("Are "+ no1 +" and "+ no2 +" primes?", { 
            x: 1,
            y: 4,
            color: color`4`
          })
        getFirst(player).x += 1
        if(getFirst(player).x > height()) {
          gameOver()
        } else {
          loop(count + 1);
        }
      }
      
    }, 1000);
  } else {
    clearText()
    gameOver()
  }
}
loop(2);

onInput("a", () => {
  if(isPrimeNumber(no1) && isPrimeNumber(no2)) {
    getFirst(player).x -= 1
    score += 1

    
  } else {
    gameOver();
    looping = false;
  }
})


onInput("d", () => {
  if(!(isPrimeNumber(no1) && isPrimeNumber(no2))) {
    getFirst(player).x -= 1
    score += 1
    
  } else {
    gameOver();
    looping = false;
    
  }
})

afterInput(() => {
  
})