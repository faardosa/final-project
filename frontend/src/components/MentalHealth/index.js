import React from 'react';
import mhbanner from '../../images/mhbanner.gif';
import './index.css'


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
                 <button>{itemanswers.answerText}</button>
             )
         })
         return (
             <>
             <div> Question - {item.questionText}</div>
             <p>{questionanswer} </p>
             <hr/>
             </>
         )
     })

    return (
        <>
        <img src={mhbanner} alt="background-img" />
        <div>{qa}</div>

            
            <div className='resources'>

                <div className='Mood Progress'> My Daily Mood Tracker: (

                    <div className='mood-tracker'>
                        <div className='daily-track'>
                            <span>How Do I Feel today? </span>
                        </div>
                        <div className='weekly-track'> How I felt this whole week </div>
                    </div>
                    <div className='reflection-mood'> Here you can reflect on your mood?
                    </div>

                </div>

            </div>
        </>
    )

}