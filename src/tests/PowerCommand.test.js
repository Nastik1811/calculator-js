import PowerCommand from '../commands/PowerCommand'

describe('Instanse of PowerCommand class', () => {
    test('should return accurate results', () => {
        expect(new PowerCommand(4, 2).execute()).toBe(16)
        expect(new PowerCommand(4, 0).execute()).toBe(1)
        expect(new PowerCommand(4, 0.5).execute()).toBe(2)
        expect(new PowerCommand(2, -2).execute()).toBe(0.25)
    })
})
