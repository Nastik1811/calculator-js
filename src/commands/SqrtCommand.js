import Command from './Command'

export default class SqrtCommand extends Command {
    execute() {
        return Math.sqrt(this.firstOperand)
    }
}
