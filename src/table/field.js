import React, { useState } from 'react';
import Row from './row';
import constants from '../constants/constants';


const Field = () => {
  const [wordArray, setWordArray] = useState([
    {word:['п', 'и', 'п', 'п', 'а'], cows:[1,2,4], bulls:[2,4]},
    {word:['', '', '', '', ''], bulls:[] , cows:[]},
  ]);

  return (
    <div>
      {wordArray.map((word, index) => (
        <Row key={index} word={word} />
      ))}
    </div>
  );
};

export default Field;