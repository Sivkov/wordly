import React from 'react';


const Letter = ({ content, index, bulls, cows }) => {
  const hasCows = cows.includes(index);
  const hasBulls = bulls.includes(index);

  let classNames = 'letter';
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
      {content}
    </div>
  );
};

export default Letter;