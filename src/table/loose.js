import React from 'react';

const Loose = ({ wordArray, handleWordArrayClick }) => {
  return (
    <div>
      {wordArray.GAME === 'LOOSE' && (
        <div>
        <div className="gameStatus_under"></div>
        <div className="gameStatus">
          <div className='gameStatus_wrapper'>
          <h1>YOU LOOSE! TRY AGAIN!</h1>
          <h1>{wordArray.KEYWORD}</h1>
				  <div className="btn btn-info m-4" onClick={() => handleWordArrayClick('new')}>Restart</div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Loose;