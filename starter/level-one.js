// LVL 1

let score = 0
const ball = document.querySelector(`.js-ball`)
const win= document.querySelector(`.level-winner`)
let scoreDisplay = document.querySelector(`.js-score`)

ball.addEventListener(`click`, () =>{
    scoreDisplay.innerText = score += 10
    if (score > 99) {win.style.opacity = 1 }
})




//Disclaimer

// i went through so many versions of codes for all 3 levels. in hindsight i wish i 
// would have kept track of all of them. i pretty much started the 1st lvl 
// with help from my labmates. When everyone shared their code in the main zoom room i took bits and pieces 
// from them. Mike's use of the forEach loop made me go watch videos to get a better 
// understanding of them. i incorporated that into my 2nd and 3rd level. My original 
// 3rd level was pretty much verbatim Molly's. But i didnt feel satisfied with just copying so i 
// tried to decipher it. Upon doing so i took what i learned from my 2nd level and redid 
// it. After that i jumped in office hours with tom and used chat gpt to help me figure 
// out how to shorten it as much as possible. 

// Ex1  instead of this:
// score =score + 10
// scoreDisplay.innerText = score

// i learned to use += to get
// scoreDisplay.innerText = score += 10


//EX2 
// if the game ends at 100 points at every stage it made sense to keep
// if (score > 99) {win.style.opacity = 1 }
// and redo every version that had an else condtion 

//EX3
// i spent time commenting out certain parts to see how it reacted which helped me identify
// a lot of fluff