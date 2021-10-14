import Command from './Command'

export default class MulCommand extends Command {
    execute() {
        return this.firstOperand * this.secondOperand
    }
}
