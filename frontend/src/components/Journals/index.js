import React from 'react';
import  journals  from '../../images/journals.gif';
import {
  Button,Fade, ScaleFade, Slide, SlideFade,Box, useDisclosure, Stack, Flex
} from '@chakra-ui/react'


function SlideEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click here to access your Journals</Button>
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
         <a href="https://www.therapytribe.com/therapist/ontario-on-toronto/womens-issues/"><Button colorScheme="pink" >My Fitness Journal</Button></a>
        <a href="https://torontoneurofeedback.ca/?gclid=CjwKCAiAsNKQBhAPEiwAB-I5zXDLXXgKDPYAyY-dEYn73XvlL2zIN3y5cCeo0X8ZwWgIZYvS9GuNPRoCOFgQAvD_BwE" ><Button colorScheme="pink">My Nutrition Journal</Button></a>
        <a href="https://www.julienutrition.com/" ><Button colorScheme="pink">My Mental Health Journal</Button></a>
        </Flex>
      </Slide>
    </>
  )
}
export default function Journal() {
  return (
    //   <div>
    //   <h2> Check out these resources below: </h2>
    //   </div>
    <Stack>
    <SlideEx/>

    <img src={journals}  alt="background-img" />
        </Stack>
    //   <Cardsmh/>

    

  )

  
}