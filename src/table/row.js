import React from 'react';
import Letter from './letter';

const Row = ({ word }) => {

 let classNames="letter_row"
 if (word.status === 'used') {
  classNames+=" usedAttempt"
 }

  return (
    <div className={classNames}>
      {word.word.map((letter, letterIndex) => (
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