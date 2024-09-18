import React, { useEffect } from 'react';

const Noword = ({ wordArray, handleWordArrayClick }) => {

  // Добавляем эффект для отслеживания нажатия клавиши Enter
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleWordArrayClick('noMistake');
      }
    };

    // Добавляем слушатель события
    document.addEventListener('keydown', handleKeyDown);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWordArrayClick]);

  let className = wordArray.MISTAKE ? "" : 'd-none';

  return (
    <div className={className}>
      <div>
        <div className="noWord_under"></div>
        <div className="noWord" onClick={() => handleWordArrayClick('noMistake')}>
          <div className='noWord_wrapper'>
            <h1>НЕТ ТАКОГО СЛОВА!</h1>
            <div className="btn btn-secondary m-4">Продолжить</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noword;
