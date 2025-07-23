import {
  Center,
  ChakraProvider,
  Text,
} from '@chakra-ui/react'

export const Header = () => {
    return (
    <ChakraProvider>
        <Center>
            <Text as='b' fontSize='30px' marginBottom='20px' marginTop='20px' color='#9933ff'>
                Faça o Login
            </Text>
        </Center>
    </ChakraProvider>
    )
}