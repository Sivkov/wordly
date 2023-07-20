import React, { useState, useEffect, useCallback } from 'react';
import Row from './row';
import Win from './win';
import constants from '../constants/constants';
import RussianKeyboard from '../table/russianKeyboard';


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

	const getWord = () =>  {
		return 'ПИКАП'
	}

	const [wordArray, setWordArray] = useState({
		ATTEMPTS: initialWordArray,
		KEYWORD: getWord(),
		GAME: initGameStatus
	});

	const handleWordArrayClick = (action , keyPressed = '') => {
		console.log ('handleWordArrayClick '+ action)
		if (action === 'new') {
			console.log ("***New")
			setWordArray({ ATTEMPTS: initialWordArray, KEYWORD: getWord(), GAME: initGameStatus });

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
			if ( updatedWordArray.ATTEMPTS[emptyWordIndex].word.includes('') ) {
				console.log ("Empty letters")
				return
			}
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
					alert ("конец!!!!!")
				}
			}


			console.log (updatedWordArray);
			markUsed()
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

	const markUsed =() => {
		let used=[]
		wordArray.ATTEMPTS.map(a => {
			used=[ ...used, ...a.word]
		})
		document.querySelectorAll('.keyboard-key').forEach((item)=>{
			let letter = item.innerHTML.toUpperCase()
			if ( used.includes(letter)){
				item.classList.add("used")
				if ( wordArray.KEYWORD.includes(letter)) {
					item.classList.add("usefull")
				}
			}
		})
	}

    const handleKeyPress = useCallback(
		(event) => {
		  const keyPressed = event.key.toLowerCase();
		  console.log (keyPressed)
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

		},[wordArray]
	  );
	  
	  useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
		  window.removeEventListener('keydown', handleKeyPress);
		};
	  }); 
	  

	return (
		<div>
			<div className='d-flex justify-content-center'>
				<div className="btn btn-info m-4" onClick={() => handleWordArrayClick('new')}>Restart</div>
				<div className="btn btn-info m-4" onClick={() => handleWordArrayClick('submit')}>Submit</div>
			</div>
			{wordArray.ATTEMPTS.map((word, index) => (
				<Row key={index} word={word} />
			))}
			<div className='mt-2'>
			<RussianKeyboard handleWordArrayClick={handleWordArrayClick} />
			</div>			
		</div>
	);
};

export default Field;