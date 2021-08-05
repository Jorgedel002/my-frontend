const bill = document.querySelector("#bill"),
      peoples = document.querySelector("#peoples"),
      tip = document.querySelector("#tip"),
      custom = document.querySelector("#custom"),
      tipAmount = document.querySelector("#tip-amount"),
      tipTotal = document.querySelector("#total-amount"),
      reset = document.querySelector("#reset");



function validateKey(evt){
    let code = (evt.which) ? evt.which : evt.keyCode;

    if (code==8){
        return true;
    }else if (code >=48 && code <=57){
        return true;
    }else{
        return false;
    }
}      

tip.addEventListener("click", e => {
    e.stopPropagation()
    if (e.target.parentNode != tip) return
    if (e.target.localName == "div") percent = parseFloat(e.target.textContent)
    validation()
    activateResetButton()
    selectTipButtons(e)
})

bill.addEventListener("click", e => {
    validation();
    activateResetButton();
    validateKey();
})

custom.addEventListener('input', e => {
    if (/\d+/.test(custom.value)) percent = parseFloat(custom.value)
    validation();
    activateResetButton();
    validateKey();
})

peoples.addEventListener('input', e => {
    validation();
    activateResetButton();
    validateKey();
})

reset.addEventListener("click", e => {
    bill.value = ''
    peoples.value = ''
    tip.children[5].value = ''
    tipAmount.textContent = '0.00'
    tipTotal.textContent = '0.00'
    reset.classList.add('btn-ghost')
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
	reset.classList.remove('btn-ghost')
}

const selectTipButtons = e => {
    for (let button of tip.children) {
        button.classList.remove('tip-active')
        button.classList.remove('input-active')
    }

    if (e == undefined) return
	if (tip.children[5] == e.target) e.target.classList.add('input-active');
	else if (e.target.parentNode == tip) e.target.classList.add('tip-active');
}

