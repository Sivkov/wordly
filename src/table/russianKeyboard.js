import React from 'react';

const RussianKeyboard = ({ handleWordArrayClick }) => {
  const russianLetters = Array.from({ length: 32 }, (_, index) => String.fromCharCode(1040 + index));

  return (
    <div>
      <div className="russian-keyboard">
        {russianLetters.map((letter, index) => (
          <button
            key={index}
            className="keyboard-key"
            onClick={() => handleWordArrayClick('addLetter', letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className='d-flex justify-content-center align-items-center mt-2'>
                <button
          className="keyboard-key btn_del"
          onClick={() => handleWordArrayClick('deleteLetter')}
        >
          удалить
        </button>
      </div>
    </div>
  );
};

export default RussianKeyboard;
