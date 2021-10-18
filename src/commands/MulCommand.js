import Command from './Command'
import { round } from './utils'

export default class MulCommand extends Command {
    execute() {
        return round(this.firstOperand * this.secondOperand)
    }
}
