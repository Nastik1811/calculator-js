import ModCommand from '../commands/ModCommand'

describe('Instanse of ModCommand class', () => {
    test('should return accurate results', () => {
        expect(new ModCommand(4, 2).execute()).toBe(0)
        expect(new ModCommand(4, 3).execute()).toBe(1)
    })
})
