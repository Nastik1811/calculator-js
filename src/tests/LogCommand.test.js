import LogCommand from '../commands/LogCommand'

describe('Instanse of LogCommand class', () => {
    test('should return accurate results', () => {
        expect(new LogCommand(100, 10).execute()).toBe(2)
    })
})
