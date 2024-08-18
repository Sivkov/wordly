import React from 'react';


const Letter = ({ content, index, bulls, cows }) => {
  const hasCows = cows.includes(index);
  const hasBulls = bulls.includes(index);

  let classNames = 'letter flip-card letterContainer';
  if (content.length) {
    classNames += ' used';
  }
  if (hasCows) {
    classNames += ' cows';
  } 
  if (hasBulls) {
    classNames += ' bulls';
  }

  return (
    <div className={classNames}>
      <div className="flip-card-inner">
        <div className="flip-card-back cardLetter">
          <div>{content}</div>
        </div>
        <div className="flip-card-front cardLetter">
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Letter;


