import { isBinary, isUnary } from './helper'

export const APP_STATE = {
    ON_FIRST_OPERAND: 'first operand',
    READY_FOR_SECOND_OPERAND: 'ready for second operand',
    ON_SECOND_OPERAND: 'second operand',
    FINISHED: 'finished',
}

const invalidValueMessage = 'Not a number'

export default class Calculator {
    constructor($resultNode, $operationIndicator, createCommand) {
        this.$resultNode = $resultNode
        this.$operationIndicator = $operationIndicator
        this.createCommand = createCommand
        this.init()
    }

    init() {
        this.appState = APP_STATE.FINISHED
        this.currentValue = '0'
        this.savedValue = null
        this.nextOperation = null
        this.updateIndicator()
    }

    setAppState(newState) {
        this.appState = newState
    }

    setCurrentValue(value) {
        this.currentValue = value
        this.render()
    }

    enterDigit(value) {
        switch (this.appState) {
            case APP_STATE.ON_FIRST_OPERAND:
            case APP_STATE.ON_SECOND_OPERAND:
                if (this.currentValue === '0') {
                    this.setCurrentValue(value)
                } else {
                    this.setCurrentValue(this.currentValue + value)
                }
                break
            case APP_STATE.READY_FOR_SECOND_OPERAND:
                this.setAppState(APP_STATE.ON_SECOND_OPERAND)
                this.setCurrentValue(value)
                break
            case APP_STATE.FINISHED:
                this.setCurrentValue(value)
                this.setAppState(APP_STATE.ON_FIRST_OPERAND)
                break
            default:
                this.setCurrentValue(value)
        }
    }

    addDecimalPoint() {
        if (this.appState === APP_STATE.FINISHED) {
            this.setAppState(APP_STATE.ON_FIRST_OPERAND)
        }
        if (!this.currentValue.includes('.')) {
            this.setCurrentValue(`${this.currentValue}.`)
        }
    }

    setOperation(operator) {
        if (isUnary(operator)) {
            this.setUnaryOperation(operator)
        } else if (isBinary(operator)) {
            this.setBinOperation(operator)
        } else {
            throw new Error('Unsupported operation')
        }
    }

    setUnaryOperation(operator) {
        if (this.nextOperation) {
            this.calculate()
        }
        this.savedValue = this.currentValue
        this.nextOperation = operator
        this.calculate()
    }

    setBinOperation(operator) {
        switch (this.appState) {
            case APP_STATE.ON_FIRST_OPERAND:
                this.savedValue = this.currentValue
                this.setAppState(APP_STATE.READY_FOR_SECOND_OPERAND)
                break
            case APP_STATE.READY_FOR_SECOND_OPERAND:
                break
            case APP_STATE.ON_SECOND_OPERAND:
                this.calculate()
                this.savedValue = this.currentValue
                break
            case APP_STATE.FINISHED:
                this.savedValue = this.currentValue
                this.setCurrentValue('0')
                this.setAppState(APP_STATE.READY_FOR_SECOND_OPERAND)
                break
            default:
                this.setAppState(APP_STATE.FINISHED)
        }
        this.nextOperation = operator
        this.updateIndicator()
    }

    calculate() {
        const command = this.createCommand(
            this.nextOperation,
            this.currentValue,
            this.savedValue
        )
        const result = command.execute()
        if (!Number.isNaN(result)) {
            this.setCurrentValue(result.toString())
            this.savedValue = this.currentValue
            this.nextOperation = null
            this.setAppState(APP_STATE.READY_FOR_SECOND_OPERAND)
        } else {
            this.setCurrentValue(invalidValueMessage)
            this.reset()
        }
    }

    updateIndicator() {
        switch (this.appState) {
            case APP_STATE.READY_FOR_SECOND_OPERAND:
                this.$operationIndicator.innerText = `${this.savedValue} ${this.nextOperation}`
                break
            case APP_STATE.ON_SECOND_OPERAND:
                this.$operationIndicator.innerText = `${this.savedValue} ${this.nextOperation} ${this.currentValue}`
                break
            case APP_STATE.FINISHED:
            case APP_STATE.ON_FIRST_OPERAND:
            default:
                this.$operationIndicator.innerText = `${this.currentValue}`
        }
    }

    finish() {
        if (this.nextOperation) {
            this.calculate()
        }
        this.reset()
        this.updateIndicator()
    }

    clear() {
        this.setCurrentValue('0')
        this.reset()
        this.render()
    }

    reset() {
        this.setAppState(APP_STATE.FINISHED)
        this.savedValue = null
        this.nextOperation = null
    }

    render() {
        this.$resultNode.innerText = this.currentValue
        this.updateIndicator()
    }
}
