import { BIN_OPERATIONS, UNARY_OPERATIONS } from '../helper'
import createCommand from '../commands/createCommand'
import Command from '../commands/Command'

describe('createCommand', () => {
    test('should handle all commands', () => {
        Object.values(BIN_OPERATIONS).forEach((op) => {
            expect(createCommand(op, 1, 1)).toBeInstanceOf(Command)
        })
        Object.values(UNARY_OPERATIONS).forEach((op) => {
            expect(createCommand(op, 2)).toBeInstanceOf(Command)
        })
    })
})
