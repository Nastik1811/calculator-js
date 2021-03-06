import './style.css'
import Calculator from './Calculator'
import ThemeManager from './ThemeManager'
import createCommand from './commands/createCommand'

const $numericBtns = document.querySelectorAll('.key-numeric')
const $operatorBtns = document.querySelectorAll('.key-operator')
const $clearBtn = document.querySelector('#clear')
const $equalBtn = document.querySelector('#equal')
const $resultNode = document.querySelector('#result')
const $indicator = document.querySelector('#indicator')
const $menu = document.querySelector('#menu')
const $root = document.querySelector(':root')
const $decimal = document.querySelector('#decimal')

const app = new Calculator($resultNode, $indicator, createCommand)
const themeManager = new ThemeManager($menu, $root)

themeManager.initColorInput()

$numericBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        app.enterDigit(btn.value)
    })
})

$operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        app.setOperation(btn.value)
    })
})

$clearBtn.addEventListener('click', () => {
    app.clear()
})

$equalBtn.addEventListener('click', () => {
    app.finish()
})

$decimal.addEventListener('click', () => {
    app.addDecimalPoint()
})

document.addEventListener('keypress', (event) => {
    event.preventDefault()
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
            app.setOperation(event.key)
            break
        case '=':
        case 'Enter':
            app.finish()
            break
        default:
            break
    }
})
