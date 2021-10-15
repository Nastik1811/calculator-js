import { BIN_OPERATIONS, UNARY_OPERATIONS } from '../helper'
import AddCommand from './AddCommand'
import DivCommand from './DivCommand'
import MulCommand from './MulCommand'
import ModCommand from './ModCommand'
import PowerCommand from './PowerCommand'
import SqrtCommand from './SqrtCommand'
import SubCommand from './SubCommand'
import LogCommand from './LogCommand'
import ExpCommand from './ExpCommand'

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
        case BIN_OPERATIONS.MOD:
            return new ModCommand(firstOperand, secondOperand)
        case BIN_OPERATIONS.POWER:
            return new PowerCommand(firstOperand, secondOperand)
        case BIN_OPERATIONS.Y_SQRT:
            return new SqrtCommand(firstOperand, secondOperand)
        case UNARY_OPERATIONS.NEG:
            return new MulCommand(firstOperand, -1)
        case UNARY_OPERATIONS.POWER_OF_TWO:
            return new PowerCommand(2, firstOperand)
        case UNARY_OPERATIONS.SQUARE:
            return new PowerCommand(firstOperand, 2)
        case UNARY_OPERATIONS.SQRT:
            return new SqrtCommand(firstOperand, 2)
        case UNARY_OPERATIONS.LN:
            return new LogCommand(firstOperand)
        case UNARY_OPERATIONS.LG:
            return new LogCommand(firstOperand, 10)
        case UNARY_OPERATIONS.TENX:
            return new PowerCommand(10, firstOperand)
        case UNARY_OPERATIONS.EX:
            return new ExpCommand(firstOperand, secondOperand)
        case UNARY_OPERATIONS.REVERSE:
            return new DivCommand(1, firstOperand)
        default:
            throw new Error(`This operator "${operator}" is not supported!`)
    }
}
