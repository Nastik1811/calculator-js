import MulCommand from '../commands/MulCommand'

describe('class MulCommand', () => {
    test('should return accurate results', () => {
        expect(new MulCommand(4, 5).execute()).toBe(20)
        expect(new MulCommand(-4, -5).execute()).toBe(20)
        expect(new MulCommand(0.1, 0.2).execute()).toBe(0.02)
    })
})
