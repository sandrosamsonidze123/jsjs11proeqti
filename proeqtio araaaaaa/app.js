let dawkeba = document.querySelector(".sawkisi")
let mtavarii = document.querySelector(".container")



function gaqri() {
    dawkeba.style.display = "none"
    mtavarii.style.visibility = "visible"
}



let ricxvi1 = document.querySelector(".p1")
let ricxvi2 = document.querySelector(".p2")
let ricxvi3 = document.querySelector(".p3")
let ricxvi4 = document.querySelector(".p4")
let ricxvi5 = document.querySelector(".p5")
let ricxvi6 = document.querySelector(".p6")



let random = Math.round(Math.random() * 99 + 1)


ricxvi6.innerHTML = random


let chawera = document.querySelector(".inputi")


let cdebi = 0


function shemowmeba() {
    cdebi++

    if (cdebi > 7) {
        ricxvi4.style.display = "block"
        ricxvi6.style.display = "block"
        ricxvi2.style.display = "none"
        

    }



    if (chawera.value > random) {
        ricxvi3.style.display = "block"
        ricxvi2.style.display = "none"
    }


    else if (chawera.value < random) {
        ricxvi2.style.display = "block"
        ricxvi3.style.display = "none"
    }


    else {
        ricxvi1.style.display = "block"
        ricxvi6.style.display = "block"
        ricxvi2.style.display = "none"
        
    }

}
    