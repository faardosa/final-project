import React from 'react';
import mhbanner from '../../images/mhbanner.gif'
// import resources from './images/resources.png'
import './index.css'
import Carditems from './carditems'
import Cardsmh from './cardsmh'

export default function MentalHealth() {
    const questions = [
        {
            questionText: 'How do you feel today?',
            answerOptions: [
                { answerText: 'Great', isCorrect: true },
                { answerText: 'Good', isCorrect: true },
                { answerText: 'Alright', isCorrect: true },
                { answerText: 'Could be better', isCorrect: true },
            ],
        },
        {
            questionText: 'Did you eat sufficiently today?',
            answerOptions: [
                { answerText: 'YES!', isCorrect: true },
                { answerText: 'Needs a little work', isCorrect: true },
                { answerText: 'It is still early', isCorrect: true },
                { answerText: 'Im going to go eat', isCorrect: true },
            ],
        },
        {
            questionText: 'Have I done any stress relieving activities?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true },
                { answerText: 'No', isCorrect: true },
                { answerText: 'Going soon', isCorrect: true },
                { answerText: 'I will try tomorrow!', isCorrect: true },
            ],
        },
        {
            questionText: 'Did I do something I am proud of today?',
            answerOptions: [
                { answerText: 'YES!!', isCorrect: true },
                { answerText: 'No', isCorrect: true },
                { answerText: 'The day just began', isCorrect: true },
                { answerText: 'Tomorrow I will!!', isCorrect: true },
            ],
        },
    ];
     
     const qa = questions.map(item => {
         const questionanswer = item.answerOptions.map(itemanswers => {
             return (
               
                 <button className="quiz">{itemanswers.answerText}</button>
             )
         })
         return (
             <>
             <div className="Questions" > {item.questionText}</div>
             <p className="answers">{questionanswer} </p>
             <hr/>
             </>
         )
     })
     
            
    return (
        <>
        <img src={mhbanner} alt="background-img" />
        
        <h3><h3/>
        
        <div>{qa}</div>

            
            <div className='resources'>

                <div className='MoodProgress'> My Daily Mood Tracker: (

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
                    {/* <button> </button> */}
                    </div>

                </div>
            </div>
             <Cardsmh/>
             
             
          

        </>
    )
}