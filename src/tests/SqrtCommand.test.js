import SqrtCommand from '../commands/SqrtCommand'

describe('class SqrtCommand', () => {
    test('should return accurate results', () => {
        expect(new SqrtCommand(4).execute()).toBe(2)
        expect(new SqrtCommand(-4).execute()).toBeNaN()
    })
})
