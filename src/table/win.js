import React from 'react';
import Confetti from './confetti';
import Player from './player';


const Win = ({ wordArray, handleWordArrayClick }) => {
  return (
    <div>
      {wordArray.GAME === 'WIN' && (
        <div>
        <div className="gameStatus_under"></div>
        <div className="gameStatus">
          <Confetti />
          <Player  wordArray={wordArray} />
          <div className='gameStatus_wrapper'>
          <h1>ПОБЕДА!</h1>
				  <div className="btn btn-secondary m-4" onClick={() => handleWordArrayClick('new')}>Рестарт</div>
          </div>          
        </div>
        </div>
      )}
    </div>
  );
};

export default Win;

