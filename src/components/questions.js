import React, {useState} from 'react';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)

  const tenQuestions = props.triviaQuestions
  console.log(tenQuestions)
  return(
  <div>{tenQuestions[0].question}</div>
  )

}
