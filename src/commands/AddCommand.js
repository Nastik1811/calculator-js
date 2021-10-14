import Command from './Command'

export default class AddCommand extends Command {
    execute() {
        return this.firstOperand + this.secondOperand
    }
}
