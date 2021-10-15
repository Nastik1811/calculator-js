// eslint-disable-next-line max-classes-per-file
import './style.css'

import Calculator from './Calculator'
import createCommand from './commands/createCommand'
import ThemeManager from './ThemeManager'

const $numericBtns = document.querySelectorAll('.key-numeric')
const $operatorBtns = document.querySelectorAll('.key-operator')
const $clearBtn = document.querySelector('#clear')
const $equalBtn = document.querySelector('#equal')
const $resultNode = document.querySelector('#result')
const $menu = document.querySelector('#menu')
const $root = document.querySelector(':root')

const app = new Calculator($resultNode, createCommand)
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
    app.setDefaultState()
})

$equalBtn.addEventListener('click', () => {
    app.finish()
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
