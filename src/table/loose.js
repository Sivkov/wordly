import React, { useEffect } from 'react';

const Loose = ({ wordArray, handleWordArrayClick }) => {

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (wordArray.GAME === 'LOOSE' && (event.key === 'Enter' || event.key === ' ')) {
        handleWordArrayClick('new'); 
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [wordArray, handleWordArrayClick]); 

  return (
    <div>
      {wordArray.GAME === 'LOOSE' && (
        <div>
        <div className="gameStatus_under"></div>
        <div className="gameStatus">
          <div className='gameStatus_wrapper'>
          <h1 className="text-black">НЕ В ЭТОТ РАЗ!</h1>
          <h1 className="text-black">ПОПРОБУЙ ЕЩЕ!</h1>
          <h1 className="text-black">ПРАВИЛЬНЫЙ ОТВЕТ:</h1>
          <h1 className="text-black">{wordArray.KEYWORD}</h1>
				  <div className="btn btn-secondary m-4" onClick={() => handleWordArrayClick('new')}>Рестарт</div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Loose;