import Command from './Command'

export default class ExpCommand extends Command {
    execute() {
        return Math.exp(this.firstOperand)
    }
}
