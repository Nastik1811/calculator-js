import Command from './Command'

export default class PowerCommand extends Command {
    execute() {
        return this.firstOperand ** this.secondOperand
    }
}
