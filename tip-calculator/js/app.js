const bill = document.querySelector("#bill"),
      peoples = document.querySelector("#peoples"),
      tip = document.querySelector("#tip"),
      custom = document.querySelector("#custom"),
      tipAmount = document.querySelector("#tip-amount"),
      tipTotal = document.querySelector("#total-amount"),
      reset = document.querySelector("#reset");

tip.addEventListener("click", e => {
    e.stopPropagation()
    if (e.target.parentNode != tip) return
    if (e.target.localName == "div") percent = parseFloat(e.target.textContent)
    validation()
    activateResetButton()
    selectTipButtons(e)
})

bill.addEventListener("click", e => {
    validation()
    activateResetButton()
})

custom.addEventListener('input', e => {
    if (/\d+/.test(custom.value)) percent = parseFloat(custom.value)
    validation()
    activateResetButton()
})

peoples.addEventListener('input', e => {
    validation()
    activateResetButton()
})

reset.addEventListener("click", e => {
    bill.value = ''
    peoples.value = ''
    tip.children[5].value = ''
    tipAmount.textContent = '0.00'
    tipTotal.textContent = '0.00'
    selectTipButtons()
})

const validation = () => {
    if (peoples.value != 0 && bill.value != ' '){
        showResult(peoples.value, bill.value, percent)
        peopleError.textContent = ''
    } else showError()
}

const showResult = (people, bill, percent) => {
    ;(bill = parseFloat(bill)), (people = parseFloat(people))
    if (isNaN(bill)) bill = 0
    let tip = (bill * percent) / 100
    tipAmount.textContent = (tip / people).toFixed(2)
    tipTotal.textContent = ((bill + tip) / people).toFixed(2)
}

const activateResetButton = () => {

}

const selectTipButtons = e => {
    for (let button of selectTipButtons.children) {
        
    }
}

