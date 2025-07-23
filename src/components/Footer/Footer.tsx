import { Button } from '@chakra-ui/react'
import { login } from '../../services/login'

export const Footer = () => {
    return (
        <Button colorScheme='purple' width='100%' marginTop='20px' onClick={login}>
            Button
        </Button>
    )
}