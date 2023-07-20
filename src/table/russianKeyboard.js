import React from 'react';

const RussianKeyboard = ({ wordArray, handleWordArrayClick }) => {
  const russianLetters = Array.from({ length: 32 }, (_, index) => String.fromCharCode(1040 + index));
  const rClass =(letter)=>{
    let used=[]
    let lClass= 'keyboard-key'
    wordArray.ATTEMPTS.forEach(element => {
        if ( element.status === 'used') {
          used=[...used, ...element.word]
        } 
    });
    if ( used.includes(letter)) {
      lClass+=' used'
      if (wordArray.KEYWORD.includes( letter) )  lClass+=' usefull'
    }
    return lClass
  }

  return (
    <div>
      <div className="russian-keyboard">
        {russianLetters.map((letter, index) => (
          <button
            key={index}
            className={rClass(letter)}
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
