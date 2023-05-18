import React from 'react';
  
 

const KeyPress = () => {
  const handleKeyPress = (event) => {
    // Проверяем, является ли клавиша кириллической
    if (/[\u0400-\u04FF]/.test(event.key)) {
      console.log(event.key);
    }  
  };

  React.useEffect(() => {
     window.addEventListener('keydown', handleKeyPress);
     return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      {/* Содержимое компонента */}
    </div>
  );
};

export default KeyPress;
