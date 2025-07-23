// import { login } from './login'

// describe('login', () => {

//     const mockAlert = jest.fn()
//     window.alert = mockAlert

//     it('Deve exibir um alert com boas vindas', () => {
//         login()
//         expect(mockAlert).toHaveBeenCalledWith('Bem-Vindos!')
//     })
// })

import { login } from './login'

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('Deve exibir um alert com Boas Vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Boas Vindas!')
    })
})