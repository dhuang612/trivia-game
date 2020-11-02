import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Questions.css';

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
    <Card>
    <Card.Header>Question {questionNum}</Card.Header>
    <Card.Title id="question">{tenQuestions[questions].question}</Card.Title>
    {randomizedAnswers.map((answer)=>(
      <Card.Text>
        {answer} <Button variant="outline-primary" className="btnClass"onClick={()=> {setNextQuestion(questions = questions+1); correctAnswerFunc(answer); setQuestNum(questionNum = questionNum +1);}}>choose this answer</Button>
      </Card.Text>
    ))}

{theCorrectAnswers ? theCorrectAnswers.map((answers)=>(
      <div id="showAnswer">The answer for question #{questionNum -1} is {answers}</div>
    )) : null}
    </Card>
  </div>
  )
  } else{
    return(

      <div>Loading...


      </div>
    )
  }
}
