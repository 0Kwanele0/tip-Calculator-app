let bill = document.getElementById("bill")
let people = document.getElementById("people")
const smallBtns = document.querySelectorAll(".percent_btn")
const submit = document.getElementById("resert_btn")
const custom = document.getElementById("percent_custom")
const tip = document.getElementById("tip_amount")
const total = document.getElementById("total_amount")
let current = document.getElementsByClassName("active")

smallBtns.forEach((el, key) => {
    el.addEventListener('click', () => {
        current[0].className = current[0].className.replace("active", " ")
        el.className += " active"
    })
})

custom.addEventListener("click", ()=> {
    custom.classList.add("touch")
})

submit.addEventListener('click', () => {
    if (bill.value > 0) {
        document.querySelector(".warning").style.visibility = "hidden"
        
        if (people.value > 0) {
            document.querySelector(".warning2").style.visibility = "hidden"
            const active = document.getElementsByClassName("active")
            let answer = null
            
            if (custom.value > 1) {
                answer =  (parseFloat(bill.value) * parseFloat(custom.value))
            } else {
                answer = (parseFloat(bill.value) * parseFloat(active[0].innerText))
            }
            const ans = answer / 100
            const ti = (ans / parseFloat(people.value)).toFixed(2)

            tip.innerText = ti + "$"

            const to = ((parseFloat(bill.value) / parseFloat(people.value)) + parseFloat(ti)).toFixed(2)
            
            total.innerText = to + "$"
        }
        else {
            document.querySelector(".warning2").style.visibility = "visible"
        }
    }
    else {
        document.querySelector(".warning").style.visibility = "visible"
    }
})