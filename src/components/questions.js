import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Questions.css';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)
  let [questionNum, setQuestNum] = useState(1)
  const tenQuestions = props.triviaQuestions
  const correctAnswerFunc = props.confirmCorrectAnswer
  const theCorrectAnswers = props.correctAnswers

if(tenQuestions.length !== 0 && questionNum <= 10 && theCorrectAnswers !== []){
  const correctAnswer = tenQuestions[questions].correct
  const shuffle = props.shuffleFunc
  const answers = []
  answers.push(...tenQuestions[questions].incorrect)
  answers.push(correctAnswer)
  const randomizedAnswers = shuffle(answers)
  return(

  <div>
    <h1>Question {questionNum}</h1>
    <div id="question">{tenQuestions[questions].question}</div>
    {randomizedAnswers.map((answer)=>(
      <div>
        {answer} <Button variant="outline-primary" onClick={()=> {setNextQuestion(questions = questions+1); correctAnswerFunc(answer); setQuestNum(questionNum = questionNum +1);}}>choose this answer</Button>
      </div>
    ))}

    {questionNum === 10 ? theCorrectAnswers === [] : (theCorrectAnswers ? theCorrectAnswers.map((answers)=>(
      <div id="showAnswer">The answer for question #{questionNum -1} is {answers}</div>
    )): <div>Please play again!</div> )}
  </div>
  )
  } else{
    return(

      <div>Loading...


      </div>
    )
  }
}
