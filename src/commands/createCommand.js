import { BIN_OPERATIONS } from '../helper'
import AddCommand from './AddCommand'
import DivCommand from './DivCommand'
import MulCommand from './MulCommand'
import SubCommand from './SubCommand'

export default function createCommand(operator, secondOperand, firstOperand) {
    switch (operator) {
        case BIN_OPERATIONS.ADD:
            return new AddCommand(firstOperand, secondOperand)
        case BIN_OPERATIONS.SUB:
            return new SubCommand(firstOperand, secondOperand)
        case BIN_OPERATIONS.DIV:
            return new DivCommand(firstOperand, secondOperand)
        case BIN_OPERATIONS.MUL:
            return new MulCommand(firstOperand, secondOperand)
        default:
            throw new Error(`This operator "${operator}" is not supported!`)
    }
}
