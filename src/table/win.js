import React from 'react';
import Confetti from './confetti';

const Win = ({ wordArray, handleWordArrayClick }) => {
  return (
    <div>
      {wordArray.GAME === 'WIN' && (
        <div>
        <div className="gameStatus_under"></div>
        <div className="gameStatus">
          <Confetti />
          <div className='gameStatus_wrapper'>
          <h1>ПОБЕДА!</h1>
				  <div className="btn btn-info m-4" onClick={() => handleWordArrayClick('new')}>Restart</div>
          </div>          
        </div>
        </div>
      )}
    </div>
  );
};

export default Win;

