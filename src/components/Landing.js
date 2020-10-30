import React from 'react';
import {Questions} from './questions';


export default class Landing extends React.Component{
  constructor(){
    super()
    this.state = {
      triviaData: [],
      correctAnswers: 0,
      currentQuestNum: 0,
      lastQuestion: false,
      answers: []
    }
    this.getData = this.getData.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this)
  }
  async componentDidMount(){
   await this.getData()
  }

  shuffle(questions){
    if(this.state.triviaData){
      let currIndex = questions.length
      let tmpVal;
      let randomIdx;

      while(0 !== currIndex){
        randomIdx = Math.floor(Math.random() * currIndex);
        currIndex -= 1;

        tmpVal = questions[currIndex];
        questions[currIndex] = questions[randomIdx];
        questions[randomIdx] = tmpVal;
      }
      return questions
    }
  }


  checkCorrectAnswer(answer){
    if(this.state.currentQuestNum <= 9){
      this.setState((prevState, props)=>({
        currentQuestNum: prevState.currentQuestNum + 1
      }))
    if(answer === this.state.triviaData[this.state.currentQuestNum].correct){
      this.setState({correctAnswers: this.state.correctAnswers+1})
    }
    this.setState({answers: [this.state.triviaData[this.state.currentQuestNum].correct]})
    if(this.state.currentQuestNum === 9){
      this.setState({lastQuestion: true})
    }
  }
}

  async getData(){
    try {
    const response = await fetch('/Apprentice_TandemFor400_Data.json')
    const questions = await response.json();
    const shuffledQuestions = this.shuffle(questions)
    const currQuestions = shuffledQuestions.slice(0,10)
      this.setState({triviaData: currQuestions})
    } catch (error) {
      console.log(error)
    }
  }
  render(){
    if(!this.state.lastQuestion){
    return(
      <div>
       <Questions triviaQuestions={this.state.triviaData}
        shuffleFunc={this.shuffle}
        confirmCorrectAnswer={this.checkCorrectAnswer}
        correctAnswers = {this.state.answers}
       />

      </div>
    )
  } else {
    return <div>final score: {this.state.correctAnswers}</div>
  }
  }
}
