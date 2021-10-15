import Command from './Command'

export default class LogCommand extends Command {
    execute() {
        if (this.secondOperand === 10) {
            return Math.log10(this.firstOperand)
        }
        return Math.log(this.firstOperand)
    }
}
