import React from 'react';

const Loose = ({ wordArray }) => {
  return (
    <div>
      {wordArray.GAME == 'LOOSE' && (
        <div>
          {/* Ваш компонент или содержимое, которое будет отображено только при wordArray.GAME !== 'WIN' */}
		  Loose!!
        </div>
      )}
    </div>
  );
};

export default Loose;

