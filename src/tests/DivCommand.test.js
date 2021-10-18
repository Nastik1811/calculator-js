import DivCommand from '../commands/DivCommand'

describe('Instanse of DivCommand class', () => {
    test('should return accurate results', () => {
        expect(new DivCommand(4, 2).execute()).toBe(2)
        expect(new DivCommand(4, 0).execute()).toBeNaN()
    })
})
