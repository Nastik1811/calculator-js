import Command from './Command'
import { round } from './utils'

export default class DivCommand extends Command {
    execute() {
        if (this.secondOperand === 0) {
            return NaN
        }
        return round(this.firstOperand / this.secondOperand)
    }
}
