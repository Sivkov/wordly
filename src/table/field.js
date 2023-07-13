import React, { useState, useEffect } from 'react';
import Row from './row';
import constants from '../constants/constants';

const Field = () => {
	const initialWordArray = Array.from({ length: constants.ATTEMPTS }, (i, ind) => {
		if (ind == 0) {
			return {
				word: Array.from({ length: constants.LETTERS }, () => ''),
				cows: [],
				bulls: [],
				status: "current"
			}
		} else {
			return {
				word: Array.from({ length: constants.LETTERS }, () => ''),
				cows: [],
				bulls: [],
				status: "clear"
			}
		}

	})

	const [wordArray, setWordArray] = useState({
		ATTEMPTS: initialWordArray,
		KEYWORD: "ТУНЕЦ"
	});

	const handleWordArrayClick = (action = 'add', keyPressed = '') => {
		if (action === 'new') {
			setWordArray({ ATTEMPTS: initialWordArray, KEYWORD: "ТУНЕЦ" });
		} else if (action === 'addLetter') {
			const updatedWordArray = { ...wordArray };
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
		} else if (action === 'deleteLetter') {
			console.log('delete letter')
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
			console.log ("submit")
			const updatedWordArray = { ...wordArray };
			const emptyWordIndex = updatedWordArray.ATTEMPTS.findIndex(
				(word) => word.status === 'current'
			);
			if (emptyWordIndex !== -1) {
				updatedWordArray.ATTEMPTS[emptyWordIndex] = {
					word: updatedWordArray.ATTEMPTS[emptyWordIndex].word,
					cows: getCows(updatedWordArray.ATTEMPTS[emptyWordIndex].word),
					bulls: getBulls(updatedWordArray.ATTEMPTS[emptyWordIndex].word),
					status: 'used'
				};

				if (emptyWordIndex < constants.ATTEMPTS-1 ) {
					updatedWordArray.ATTEMPTS[emptyWordIndex+1] = {
						word: Array.from({ length: constants.LETTERS }, () => ''),
						cows: [],
						bulls: [],
						status: 'current'
					};
				}
			}
			setWordArray(updatedWordArray);

		}
	};

	const getCows = (word ) => {
		let res=[]
		console.log (wordArray.KEYWORD)
 		word.map((letter, ind)=> {
			if (wordArray.KEYWORD.includes(letter.toUpperCase())
			) {
				res.push(ind)
			}
		})

		return res;
	};

	const getBulls = (word='assam') => {
		let res=[]
		word.map((letter, ind)=> {
			if (wordArray.KEYWORD[ind]== letter.toUpperCase() )
			{
				res.push(ind)
			}
		})	
		return res;
	};


	const handleKeyPress = (event) => {
		// Check if the key pressed is a valid character
		const keyPressed = event.key.toLowerCase();
		if (/^[а-яё]$/.test(keyPressed)) {
			// Handle the key press event
			handleWordArrayClick('addLetter', keyPressed)
		} else if (keyPressed === "delete" || keyPressed === "backspace") {
			handleWordArrayClick('deleteLetter', keyPressed)
		} else if (keyPressed === "enter") {
			handleWordArrayClick('submit')
		}
	};

	useEffect(() => {
		// Add key press listener when the component mounts
		window.addEventListener('keydown', handleKeyPress);

		// Clean up the key press listener when the component unmounts
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, []); // Empty dependency array to run the effect only once on mount

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