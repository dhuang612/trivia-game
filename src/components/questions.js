import React, {useState} from 'react';

export const Questions = (props)=>{
  let [questions, setNextQuestion] = useState(0)

  const tenQuestions = props.triviaQuestions
  console.log(tenQuestions)
if(tenQuestions.length !== 0){
  return(

  <div>
    <h1>Question</h1>
    {tenQuestions[0].question}

  </div>
  )
  } else{
    return(
      <div>Loading...</div>
    )
  }
}
