import SubCommand from '../commands/SubCommand'

describe('class SqrtCommand', () => {
    test('should return accurate results', () => {
        expect(new SubCommand(4, 5).execute()).toBe(-1)
        expect(new SubCommand(-4, 5).execute()).toBe(-9)
        expect(new SubCommand(4, -5).execute()).toBe(9)
    })
})
