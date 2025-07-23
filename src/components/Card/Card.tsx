import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import {
  AbsoluteCenter,
  Box,
  ChakraProvider,
  Input,
} from '@chakra-ui/react'

export const Card = () => {
    return (
        <>
            <ChakraProvider>
                <Box backgroundColor='#9933ff' position='relative' minHeight='100vh'>
                    <AbsoluteCenter p='4' axis='both'>
                        <Box backgroundColor='white' borderRadius='25px' padding='15px' height='300px'>
                            <Header />
                            <Input placeholder='email' marginBottom='20px' />
                            <Input placeholder='password' />
                            <Footer />
                        </Box>
                    </AbsoluteCenter>
                </Box>
            </ChakraProvider>
        </>
    )
}