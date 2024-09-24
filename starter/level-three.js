

score = 0
let allBalls = document.querySelectorAll(`.js-ball`)
let win = document.querySelector (`.level-winner`)
let scoreDisplay = document.querySelector(`.js-score`)

allBalls.forEach (ball => {
    ball.addEventListener(`click`, () =>{
        scoreDisplay.innerText = score += Number(ball.dataset.increment)
        if (score > 99) {win.style.opacity = 1 }
    })})




    // My old solution with for loop

// I realized that when adding my score i could get rid of the [i] index attached to allBalls[i]
// if i used my var ball with the .dataset.increment attached to it. That allowed me to delete
// the for loop entirely and essentially use the same code from lvl 2 


    // score = 0
// let allBalls = document.querySelectorAll(`.js-ball`)
// let win = document.querySelector (`.level-winner`)
// let scoreDisplay = document.querySelector(`.js-score`)

// for (let i =0; i < allBalls.length; i++) {
//     allBalls[i].addEventListener(`click`, function() {
//             scoreDisplay.innerText =score += Number(allBalls[i].dataset.increment)
//             if (score > 99) {win.style.opacity = 1 }
//     })
// }