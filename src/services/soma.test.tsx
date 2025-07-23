import{ soma, multiplica } from './soma'

describe('soma', () => {
    it('deve somar um ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar um número por dois', () => {
        const value = multiplica(2, 2)
        expect(value).toBe(4)
    })

    it('deve multiplicar um número por 3', () => {
        const value = multiplica(2, 3)
        expect(value).toBe(6)
    })
})