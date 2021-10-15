import { isBinary, isUnary } from './helper'

export const APP_STATE = {
    ON_FIRST_OPERAND: 'first operand',
    READY_FOR_SECOND_OPERAND: 'ready for second operand',
    ON_SECOND_OPERAND: 'second operand',
    FINISHED: 'finished',
}

export default class Calculator {
    constructor($resultNode, createCommand) {
        this.$resultNode = $resultNode
        this.createCommand = createCommand
        this.setDefaultState()
    }

    setDefaultState() {
        this.currentValue = '0'
        this.appState = APP_STATE.FINISHED
        this.reset()
        this.render()
    }

    reset() {
        this.savedValue = null
        this.nextOperation = null
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
                this.setCurrentValue(value)
                this.setState(APP_STATE.ON_SECOND_OPERAND)
                break
            case APP_STATE.FINISHED:
                this.setState(APP_STATE.ON_FIRST_OPERAND)
                this.setCurrentValue(value)
                break
            default:
                this.setCurrentValue(value)
        }
    }

    addDecimalPoint() {
        if (this.appState === APP_STATE.FINISHED) {
            this.setState(APP_STATE.ON_FIRST_OPERAND)
        }
        if (!this.currentValue.includes('.')) {
            this.setCurrentValue(`${this.currentValue}.`)
        }
    }

    setState(newState) {
        this.appState = newState
    }

    setCurrentValue(value) {
        this.currentValue = value
        this.render()
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
        this.nextOperation = operator
        this.calculate()
    }

    setBinOperation(operator) {
        switch (this.appState) {
            case APP_STATE.ON_FIRST_OPERAND:
                this.savedValue = this.currentValue
                this.setState(APP_STATE.READY_FOR_SECOND_OPERAND)
                this.nextOperation = operator
                break
            case APP_STATE.READY_FOR_SECOND_OPERAND:
                this.nextOperation = operator
                break
            case APP_STATE.ON_SECOND_OPERAND:
                this.calculate()
                this.savedValue = this.currentValue
                this.nextOperation = operator
                break
            case APP_STATE.FINISHED:
                this.savedValue = '0'
                this.appState = APP_STATE.READY_FOR_SECOND_OPERAND
                this.nextOperation = operator
                break
            default:
                this.appState = APP_STATE.FINISHED
        }
    }

    calculate() {
        const command = this.createCommand(
            this.nextOperation,
            this.currentValue,
            this.savedValue
        )
        const result = command.execute()
        this.setCurrentValue(result.toString())
        this.setState(APP_STATE.READY_FOR_SECOND_OPERAND)
    }

    finish() {
        if (this.nextOperation) {
            this.calculate()
        }
        this.setState(APP_STATE.FINISHED)
        this.reset()
    }

    render() {
        this.$resultNode.innerText = this.currentValue
    }
}
