import React, {useState} from 'react';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)

  const tenQuestions = props.triviaQuestions
console.log(props)
if(tenQuestions.length !== 0){
  const shuffle = props.shuffleFunc
  const answers = []
  answers.push(...tenQuestions[0].incorrect)
  answers.push(tenQuestions[0].correct)
  console.log(answers)
  const randomizedAnswers = shuffle(answers)
  return(

  <div>
    <h1>Question</h1>
    {tenQuestions[0].question}
    {randomizedAnswers.map((answer)=>(
      <div>{answer}</div>
    ))}
  </div>
  )
  } else{
    return(
      <div>Loading...</div>
    )
  }
}
