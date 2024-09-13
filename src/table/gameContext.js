import React, { createContext, useContext, useState, useEffect } from 'react';
import constants from '../constants/constants';


 const GameContext = createContext();

 export const GameProvider = ({ children }) => {
  const [gameData, setGameData] = useState({
    games: 0,
    wins: 0,
    winChain: 0,
    attempts: Array(Number(constants.ATTEMPTS)).fill(0)
  });

  // Функция для получения данных из localStorage
  const loadGameDataFromLocalStorage = () => {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return { games: 0, wins: 0, winChain: 0, attempts: Array(Number(constants.ATTEMPTS)).fill(0) };
    }
  };

  // Загружаем данные из localStorage при монтировании компонента
  useEffect(() => {
    const data = loadGameDataFromLocalStorage();
    setGameData(data);
  }, []);

  // Обновляем localStorage при изменении состояния
  useEffect(() => {
    localStorage.setItem('gameData', JSON.stringify(gameData));
  }, [gameData]);

  return (
    <GameContext.Provider value={{ gameData, setGameData }}>
      {children}
    </GameContext.Provider>
  );
};

// Хук для использования контекста в других компонентах
export const useGameContext = () => useContext(GameContext);
