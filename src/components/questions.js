import React, {useState} from 'react';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)

  const tenQuestions = props.triviaQuestions
console.log(props)
if(tenQuestions.length !== 0){
  const correctAnswer = tenQuestions[questions].correct
  const shuffle = props.shuffleFunc
  const answers = []
  answers.push(...tenQuestions[questions].incorrect)
  answers.push(correctAnswer)
  console.log(answers)
  const randomizedAnswers = shuffle(answers)
  console.log(questions)
  return(

  <div>
    <h1>Question </h1>
    {tenQuestions[questions].question}
    {randomizedAnswers.map((answer)=>(
      <div>
        {answer}<button onClick={()=> setNextQuestion(questions = questions+1)}>choose this answer</button>
      </div>
    ))}
  </div>
  )
  } else{
    return(
      <div>Loading...</div>
    )
  }
}
