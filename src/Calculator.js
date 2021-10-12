/* eslint-disable spaced-comment */
export const APP_STATE = {
    ON_FIRST_OPERAND: 'first operand',
    READY_FOR_SECOND_OPERAND: 'ready for second operand',
    ON_SECOND_OPERAND: 'second operand',
    FINISHED: 'finished',
}

export default class Calculator {
    constructor($resultNode) {
        this.nextOperation = null
        this.appState = APP_STATE.FINISHED
        this.$resultNode = $resultNode
        this.currentValue = this.$resultNode.innerText
        this.result = 0
        this.commandHistory = []
    }

    undo() {
        return this.result
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
                this.setCurrentValue(value)
                this.setState(APP_STATE.ON_FIRST_OPERAND)
                break
            default:
                this.setState(APP_STATE.FINISHED)
        }
    }

    addDecimalPoint() {
        if (!this.currentValue.includes('.')) {
            this.setCurrentValue(`${this.currentValue}.`)
        }
    }

    enterOperator(operator) {
        switch (this.appState) {
            case APP_STATE.ON_FIRST_OPERAND:
                this.setResult(this.currentValue)
                this.setOperator(operator)
                this.setState(APP_STATE.READY_FOR_SECOND_OPERAND)
                break
            case APP_STATE.READY_FOR_SECOND_OPERAND:
                this.setOperator(operator)
                break
            case APP_STATE.ON_SECOND_OPERAND:
                //execute command
                //createCommand(nextOperation, firstOperand, currentValue.innerHTML)
                break
            case APP_STATE.FINISHED:
                this.setCurrentValue('0')
                this.appState = APP_STATE.ON_FIRST_OPERAND
                break
            default:
                this.appState = APP_STATE.FINISHED
        }
    }

    setState(newState) {
        this.appState = newState
    }

    setCurrentValue(value) {
        this.currentValue = value
        this.render()
    }

    setResult(value) {
        this.result = parseFloat(value)
    }

    setOperator(operator) {
        this.nextOperation = operator
    }

    clear() {
        this.setOperator(null)
        this.setResult(0)
        this.appState = APP_STATE.FINISHED
        this.setCurrentValue('0')
    }

    render() {
        this.$resultNode.innerText = this.currentValue
    }
}
