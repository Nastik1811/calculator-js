import Command from './Command'

export default class ModCommand extends Command {
    execute() {
        return this.firstOperand % this.secondOperand
    }
}
