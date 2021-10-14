export default class Command {
    constructor(firstOperand, secondOperand = '0') {
        this.firstOperand = parseFloat(firstOperand)
        this.secondOperand = parseFloat(secondOperand)
    }

    // eslint-disable-next-line class-methods-use-this
    execute() {
        throw new Error('This method should be implemented')
    }
}
