import React from 'react';
import {Questions} from './questions';


export default class Landing extends React.Component{
  constructor(){
    super()
    this.state = {
      triviaData: []
    }
    this.getData = this.getData.bind(this)
    this.shuffle = this.shuffle.bind(this)
    // this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this)
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
    return(
      <div>
       <Questions triviaQuestions={this.state.triviaData}
        shuffleFunc={this.shuffle}
       />
      </div>
    )
  }

}
