import React from 'react';

const Loose = ({ wordArray, handleWordArrayClick }) => {
  return (
    <div>
      {wordArray.GAME === 'LOOSE' && (
        <div>
        <div className="gameStatus_under"></div>
        <div className="gameStatus">
          <div className='gameStatus_wrapper'>
          <h1 className="text-black">ТЫ ПРОИГРАЛ! ПОПРОБУЙ ЕЩЕ!</h1>
          <h1 className="text-black">ПРАВИЛЬНЫЙ ОТВЕТ:</h1>
          <h1 className="text-black">{wordArray.KEYWORD}</h1>
				  <div className="btn btn-info m-4" onClick={() => handleWordArrayClick('new')}>Restart</div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Loose;