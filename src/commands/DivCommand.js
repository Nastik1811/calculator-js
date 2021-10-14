import Command from './Command'

export default class DivCommand extends Command {
    execute() {
        return this.firstOperand / this.secondOperand
    }
}
