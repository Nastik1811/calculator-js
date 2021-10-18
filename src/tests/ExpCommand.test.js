import ExpCommand from '../commands/ExpCommand'

describe('class SqrtCommand', () => {
    test('should return accurate results', () => {
        expect(new ExpCommand(0).execute()).toBe(1)
    })
})
