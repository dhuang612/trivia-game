import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)
  let [questionNum, setQuestNum] = useState(1)
  const tenQuestions = props.triviaQuestions
  const correctAnswerFunc = props.confirmCorrectAnswer
  const theCorrectAnswers = props.correctAnswers

if(tenQuestions.length !== 0 && questionNum <= 10){
  const correctAnswer = tenQuestions[questions].correct
  const shuffle = props.shuffleFunc
  const answers = []
  answers.push(...tenQuestions[questions].incorrect)
  answers.push(correctAnswer)
  const randomizedAnswers = shuffle(answers)
  return(

  <div>
    <h1>Question {questionNum}</h1>
    {tenQuestions[questions].question}
    {randomizedAnswers.map((answer)=>(
      <div>
        {answer} <Button variant="outline-primary" onClick={()=> {setNextQuestion(questions = questions+1); correctAnswerFunc(answer); setQuestNum(questionNum = questionNum +1)}}>choose this answer</Button>
      </div>
    ))}
    {theCorrectAnswers ? theCorrectAnswers.map((answers)=>(
      <div>The answer for question #{questionNum -1} is {answers}</div>
    )) : null}
  </div>
  )
  } else{
    return(
      <div>Loading...</div>
    )
  }
}
