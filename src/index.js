// eslint-disable-next-line max-classes-per-file
import './style.css'

import Calculator from './Calculator'

const numericButtons = document.querySelectorAll('.key-numeric')
const clearBtn = document.querySelector('#clear-btn')
const $resultNode = document.querySelector('#result')

const app = new Calculator($resultNode)

numericButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        app.enterDigit(btn.value)
    })
})

clearBtn.addEventListener('click', () => {
    app.clear()
})

document.addEventListener('keypress', (event) => {
    switch (event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            app.enterDigit(event.key)
            break
        case '.':
            app.addDecimalPoint()
            break
        case '*':
        case '/':
        case '+':
        case '-':
            app.enterOperator(event.key)
            break
        default:
    }
})
