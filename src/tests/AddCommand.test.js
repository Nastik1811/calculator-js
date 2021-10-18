import AddCommand from '../commands/AddCommand'

describe('Instanse of AddCommand class', () => {
    test('should return accurate results', () => {
        expect(new AddCommand(4, 2).execute()).toBe(6)
        expect(new AddCommand(0.1, 0.2).execute()).toBe(0.3)
    })
})
