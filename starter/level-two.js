
    // I started with a different solution to lvl 2.  I decided to copy the code from lvl 1 
    // and try to add as little as possible to build some continuity.

    let score = 0
    const balls = document.querySelectorAll(`.js-ball`)
    let scoreDisplay = document.querySelector(`.js-score`)
    const win = document.querySelector(`.level-winner`)
  
  
  
    balls.forEach (ball => {
      ball.addEventListener(`click`, () =>{
          scoreDisplay.innerText = score += 10
          if (score > 99) {win.style.opacity = 1 }
      })})
  