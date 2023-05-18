import React, { useState } from 'react';
import Row from './row';
import constants from '../constants/constants';


const Field = () => {
    let word = []
    for (let i = 0; i < constants.LETTERS; i++) {
        word.push('')
    }
    
    let cell = {
        word: word,
        cows: [],
        bulls: [],
    };
    let updatedWordArray = []
    for (let i = 0; i < constants.ATTEMPTS; i++) {
        updatedWordArray.push(cell)
    }
    const [wordArray, setWordArray] = useState(updatedWordArray);

    const handleWordArrayClick = (action = 'add', index = 0) => {
        if (action == 'add') {
            // Создаем новый массив, чтобы избежать мутации состояния
            let updatedWordArray = [...wordArray];
            // Производим изменения в элементе массива по заданному индексу
            updatedWordArray[0] = {
                word: ['н', 'о', 'в', 'о', 'е'],
                cows: [0, 2, 4],
                bulls: [1, 3],
            };
            // Обновляем состояние wordArray
            setWordArray(updatedWordArray);

        } else if (action == "new") {

            setWordArray(updatedWordArray);

        }

    };

    return (
        <div>
            <button onClick={() => handleWordArrayClick('add')}>Add</button>
            <button onClick={() => handleWordArrayClick('new')}>Restart</button>

            {wordArray.map((word, index) => (
                <Row key={index} word={word} />
            ))}
        </div>
    );
};

export default Field;