import React from 'react';

const quiz = (props) => {
  //console.log(props.allAnswers);
  let answers = shuffle(props.allAnswers);
  console.log(answers);
  let answerBtn = answers.map(answer => {
    return <button dangerouslySetInnerHTML={{__html: answer}}></button>
  });
  return (
    <div>
      <p dangerouslySetInnerHTML={{__html: props.question}}></p>
      {answerBtn}
    </div>
  );
};

//  Fisher-Yates (aka Knuth) Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


export default quiz;
