import Command from './Command'

export default class SqrtCommand extends Command {
    execute() {
        if (this.firstOperand < 0) {
            return NaN
        }
        return Math.sqrt(this.firstOperand)
    }
}
