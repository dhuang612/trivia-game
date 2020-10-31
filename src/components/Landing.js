import React from 'react';
import {Questions} from './Questions';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'

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
    this.resetGame = this.resetGame.bind(this)
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

  async resetGame(){
    this.setState({lastQuestion: !this.state.lastQuestion, correctAnswers: 0, currentQuestNum: 0, answers: []})
    console.log(this.state.triviaData)
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
        numOfCorrectAnswers = {this.state.correctAnswers}
       />

      </div>
    )
  } else {
    return (<div id="correctAnswerTally">
      Thank you for taking this quiz!
      <p id="answers">final number of correct answers: {this.state.correctAnswers}</p>
      <Button onClick={this.resetGame}>Play again?</Button>
      </div>)
  }
  }
}
