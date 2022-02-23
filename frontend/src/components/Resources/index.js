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
      <Slide  direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Flex
          p='40px'
          color='black'
          mt='4'
          bg='148'
          rounded='md'
          shadow='md'
    justifyContent='space-around'

        >
         <a href="https://www.therapytribe.com/therapist/ontario-on-toronto/womens-issues/"><Button colorScheme="pink" >Therapist</Button></a>
        <a href="https://torontoneurofeedback.ca/?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zXDLXXgKDPYAyY-dEYn73XvlL2zIN3y5cCeo0X8ZwWgIZYvS9GuNPRoCOFgQAvD_BwE" ><Button colorScheme="pink">Psychologist</Button></a>
        <a href="https://www.julienutrition.com/" ><Button colorScheme="pink">Nutritionist</Button></a>
        <a href="https://www.womenscollegehospital.ca/patients-and-caregivers/finding-a-doctor" ><Button colorScheme="pink">Doctor</Button></a>
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