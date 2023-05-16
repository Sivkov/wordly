import React from 'react';
import Letter from './letter';
import constants from '../constants/constants';

const Row = ({ word }) => {
  return (
    <div className="letter_row">
      {word.word.split('').map((letter, letterIndex) => (
        <Letter
          key={letterIndex}
          content={letter}
          index={letterIndex}
          bulls={word.bulls}
          cows={word.cows}
        />
      ))}
    </div>
  );
};

export default Row;