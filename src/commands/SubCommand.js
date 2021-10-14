import Command from './Command'

export default class SubCommand extends Command {
    execute() {
        return this.firstOperand - this.secondOperand
    }
}
