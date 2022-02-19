import React from 'react';
import mhbanner from '../../images/mhbanner.gif'
// import resources from './images/resources.png'
import './index.css'

// import Cardsmh from './cardsmh'
import { Button, Flex, Box,  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
 } from '@chakra-ui/react'

export default function MentalHealth() {
    const questions = [
        {
            questionText: 'How do you feel today?',
            answerOptions: [
                { answerText: 'Great', isCorrect: true, triggerText:"That's Amazing"},
                { answerText: 'Good', isCorrect: true, triggerText:"Great!" },
                { answerText: 'Alright', isCorrect: true, triggerText:"Let's channel positive vibes" },
                { answerText: 'Could be better', isCorrect: true, triggerText:"Let's visit the resources" },
            ],
        },
        {
            questionText: 'Did you eat sufficiently today?',
            answerOptions: [
                { answerText: 'YES!', isCorrect: true, triggerText:"Keep up the good eating habit" },
                { answerText: 'Needs a little work', isCorrect: true, triggerText:"Let's keep organized" },
                { answerText: 'It is still early', isCorrect: true, triggerText:"Don't forget to set a reminder" },
                { answerText: 'Im going to go eat', isCorrect: true, triggerText:"Let write in our food journal to keep organized" },
            ],
        },
        {
            questionText: 'Have I done any stress relieving activities?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true, triggerText:"Yasss Zen queen!" },
                { answerText: 'No', isCorrect: true, triggerText:"Let's do some mindful breathing" },
                { answerText: 'Going soon', isCorrect: true, triggerText:"Let's set a reminder" },
                { answerText: 'I will try tomorrow!', isCorrect: true, triggerText:"Lets write it in our journel to hold ourselves accountable" },
            ],
        },
        {
            questionText: 'Did I do something I am proud of today?',
            answerOptions: [
                { answerText: 'YES!!', isCorrect: true, triggerText:"We're here for it!! Keep it up!" },
                { answerText: 'No', isCorrect: true, triggerText:"We're still to proud of you" },
                { answerText: 'The day just began', isCorrect: true, triggerText:"I'm sure you'll be great!" },
                { answerText: 'Tomorrow I will!!', isCorrect: true, triggerText:"Let's start" },
            ],
        },
    ];
     
     const qa = questions.map(item => {
         const questionanswer = item.answerOptions.map(itemanswers => {
             return (
<Popover>
  <PopoverTrigger>
    <Button color='pink' >{itemanswers.answerText} </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Thanks for letting us know!</PopoverHeader>
    <PopoverBody>{itemanswers.triggerText}</PopoverBody>
  </PopoverContent>
</Popover>

             )
         })
         return (
             <Box >
             <Button mt='15px' colorScheme='pink' borderColor="none">{item.questionText} </Button>

             <Flex justifyContent='space-between' my="15px">{questionanswer} </Flex>
             
             <hr/>
             </Box>
         )
     })
     
            
    return (
        <>
        <img src={mhbanner}  alt="background-img" />
        {/* <h1>Mental Health Resources</h1> */}
        {/* <h4>Welcome to Divine Enegry. We are women helping women.  
The resources below are available for youth and adults across Canada who want to take some time to </h4> */}
        
        <div>{qa}</div>

          
            <div className='resources'>

                {/* <div className='MoodProgress'> My Daily Mood Tracker: (

                    <div className='mood-tracker'>
                        <div className='daily-track'>
                            <span>How Do I Feel today? </span> 
                            
                            <input type="text" ></input>
                            <br/>
                            <input type="Submit" value="Submit" ></input>
                        </div>
                        <div className='weekly-track'> How I felt this whole week </div>
                        <input type="text" ></input>
                            <br/>
                            <input type="Submit" value="Submit" ></input>
                    </div>
                    <div className='reflection-mood'> Here you can reflect on your mood?
                    <input type="text" ></input>
                            <br/>
                            <input type="Submit" value="Submit" ></input>
                   
                    </div>

                </div> */}
            </div> 
            <h3>Great work on the daily check in!</h3>

{/* 
            <h2> Reaching to professionals
          </h2>
          
             <h4>Here are some of the possible resources regarding mental health, support, and organizations representing the different types of practitioners integrated in the mental health care team, 

please explore the options below !</h4>
           
            <h2> Thank you for visiting! </h2>
          
         
          <h1>Add some more writting </h1> */}
        
        </>
    )
}