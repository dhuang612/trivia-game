import React, {useState} from 'react';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)
  let [questionNum, setQuestNum] = useState(1)
  const tenQuestions = props.triviaQuestions
  const correctAnswerFunc = props.confirmCorrectAnswer
  const theCorrectAnswers = props.correctAnswers
console.log(props)
console.log(theCorrectAnswers)
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
        {answer}<button onClick={()=> {setNextQuestion(questions = questions+1); correctAnswerFunc(answer); setQuestNum(questionNum = questionNum +1)}}>choose this answer</button>
      </div>
    ))}
    {theCorrectAnswers ? theCorrectAnswers.map((answer)=>(
      <div>The answer for question #{questionNum -1} is {theCorrectAnswers}</div>
    )) : null}
  </div>
  )
  } else{
    return(
      <div>Loading...</div>
    )
  }
}
