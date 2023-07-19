import React, { useState, useEffect, useCallback } from 'react';
import Row from './row';
import Win from './win';
import constants from '../constants/constants';
//import Winner from '../scripts/confetti';


const Field = () => {
	const initialWordArray = Array.from({ length: constants.ATTEMPTS }, (i, ind) => {
		return {
		  word: Array.from({ length: constants.LETTERS }, () => ''),
		  cows: [],
		  bulls: [],
		  status: ind === 0 ? "current" : "clear"
		};
	  });

	const initGameStatus ='ON'

	const [wordArray, setWordArray] = useState({
		ATTEMPTS: initialWordArray,
		KEYWORD: "ТУНЕЦ",
		GAME: initGameStatus
	});

	const handleWordArrayClick = (action , keyPressed = '') => {
		console.log ('handleWordArrayClick '+ action)
		if (action === 'new') {
			console.log ("***New")
			setWordArray({ ATTEMPTS: initialWordArray, KEYWORD: "ТУНЕЦ", GAME: 'ON' });

		} else if (action === 'addLetter') {
			console.log ("***Add letter")
			const updatedWordArray = { ...wordArray };

			if  (updatedWordArray.GAME === 'WIN') {return;
			} else{
				const emptyWordIndex = updatedWordArray.ATTEMPTS.findIndex(
					(word) => word.status === 'current'
				);
					if (emptyWordIndex !== -1) {
					const emptyLetterIndex = updatedWordArray.ATTEMPTS[emptyWordIndex].word.findIndex(
						(letter) => letter === ''
					);
	
					if (emptyLetterIndex === constants.LETTERS) return;
	
					if (emptyLetterIndex !== -1) {
						updatedWordArray.ATTEMPTS[emptyWordIndex].word[emptyLetterIndex] = keyPressed;
						setWordArray(updatedWordArray);
					}
				}
			}
		} else if (action === 'deleteLetter') {
			console.log('***delete letter')
			const updatedWordArray = { ...wordArray };
			const emptyWordIndex = updatedWordArray.ATTEMPTS.findIndex(
				(word) => word.status === 'current'
			);

			if (emptyWordIndex !== -1) {
				const emptyLetterIndex = updatedWordArray.ATTEMPTS[emptyWordIndex].word.findIndex(
					(letter) => letter === ''
				);

				if (emptyLetterIndex !== -1) {
					updatedWordArray.ATTEMPTS[emptyWordIndex].word[emptyLetterIndex - 1] = '';
					setWordArray(updatedWordArray);
				} else {
					updatedWordArray.ATTEMPTS[emptyWordIndex].word[constants.LETTERS - 1] = '';
				}
				setWordArray(updatedWordArray);
			}

		} else if (action === 'submit') {
			console.log("***submit")
			const updatedWordArray = { ...wordArray };
			const emptyWordIndex = updatedWordArray.ATTEMPTS.findIndex(
				(word) => word.status === 'current'
			);
			let bulls=''
			if (emptyWordIndex !== -1 && updatedWordArray.GAME === "ON") {
				bulls = getBulls(updatedWordArray.ATTEMPTS[emptyWordIndex].word) 
				updatedWordArray.ATTEMPTS[emptyWordIndex] = {
					word: updatedWordArray.ATTEMPTS[emptyWordIndex].word,
					cows: getCows(updatedWordArray.ATTEMPTS[emptyWordIndex].word),
					bulls: bulls,
					status: 'used'
				};

				if (emptyWordIndex < constants.ATTEMPTS - 1 && updatedWordArray.GAME === "ON") {
					updatedWordArray.ATTEMPTS[emptyWordIndex + 1] = {
						word: Array.from({ length: constants.LETTERS }, () => ''),
						cows: [],
						bulls: [],
						status: 'current'
					};
				}
				if (bulls.length  ===  5 ) {
 					updatedWordArray.GAME = 'WIN'
					updatedWordArray.KEYWORD = 'КОНЕЦ'
					console.log ("конец!!!!!")

				}
			}
			console.log (updatedWordArray);
			setWordArray(updatedWordArray);
		} 
	};

	const getCows = (word) => {
		let res = []
 		word.map((letter, ind) => {
			if (wordArray.KEYWORD.includes(letter.toUpperCase())
			) {
				res.push(ind)
			}
		})

		return res;
	};

	const getBulls = (word = 'assam') => {
		let res = []
		word.map((letter, ind) => {
			if (wordArray.KEYWORD[ind] === letter.toUpperCase()) {
				res.push(ind)
			}
		})
	 
		return res;
	};
/*
	const handleKeyPress = (event) => {
		const keyPressed = event.key.toLowerCase();
		if (/^[а-яё]$/.test(keyPressed) && wordArray.GAME !== 'WIN') {
			handleWordArrayClick('addLetter', keyPressed)
		} else if (keyPressed === "delete" || keyPressed === "backspace") {
			handleWordArrayClick('deleteLetter', keyPressed)
		} else if (keyPressed === "enter") {
			console.log (keyPressed)
			handleWordArrayClick('submit')
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
		  window.removeEventListener('keydown', handleKeyPress);
		};
	  }, [handleKeyPress]);*/

	  const handleKeyPress = useCallback(
		(event) => {
		  const keyPressed = event.key.toLowerCase();
		  if (/^[а-яё]$/.test(keyPressed) && wordArray.GAME !== 'WIN') {
			// Handle the key press event
			handleWordArrayClick('addLetter', keyPressed)

		  } else if (keyPressed === "delete" || keyPressed === "backspace") {
			// Handle the delete/backspace key press event
			handleWordArrayClick('deleteLetter', keyPressed)

		  } else if (keyPressed === "enter") {
			// Handle the enter key press event
			handleWordArrayClick('submit')

		  }
		},
		[wordArray.GAME]
	  );
	  
	  useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
		  window.removeEventListener('keydown', handleKeyPress);
		};
	  }, [handleKeyPress]);
	  
	  
 

	return (
		<div>
			<button onClick={() => handleWordArrayClick('new')}>Restart</button>
			<button onClick={() => handleWordArrayClick('submit')}>Submit</button>

			{wordArray.ATTEMPTS.map((word, index) => (
				<Row key={index} word={word} />
			))}
		</div>
	);
};

export default Field;