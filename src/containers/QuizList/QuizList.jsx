import React, { Component } from 'react';
import axios from 'axios';

import Quiz from '../../components/Quiz/Quiz';

class quizList extends Component {
  state = {
    questions: []
  };
  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        console.log(response.data.results);
        this.setState({ questions: response.data.results });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    let quizlist = this.state.questions.map((question, i) => {
      let allAnswers = [...question.incorrect_answers, question.correct_answer];
      return (
        <Quiz
          key={i}
          question={question.question}
          type={question.type}
          allAnswers={allAnswers}
        />
      );
    });

    return <div>{quizlist}</div>;
  }
}

export default quizList;
