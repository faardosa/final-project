import React from 'react';
import  rsbanner  from '../../images/rsbanner.gif';
import {
  Button,Fade, ScaleFade, Slide, SlideFade,Box, useDisclosure, Stack, Flex
} from '@chakra-ui/react'
 import Cardsmh from './cardsmh'

function SlideEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click here to Access resource contact</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Flex
          p='40px'
          color='white'
          mt='4'
          bg='pink'
          rounded='md'
          shadow='md'
    justifyContent='space-around'

        >
        <Button colorScheme="pink">Therapist </Button>
        <Button colorScheme="pink">Psychologist</Button>
        <Button colorScheme="pink">Nutritious</Button>
        <Button colorScheme="pink">Doctor</Button>
        </Flex>
      </Slide>
    </>
  )
}
export default function Resources() {
  return (
    //   <div>
    //   <h2> Check out these resources below: </h2>
    //   </div>
    <Stack>
    <SlideEx/>

    <img src={rsbanner}  alt="background-img" />
        </Stack>
    //   <Cardsmh/>

    

  )

  
}