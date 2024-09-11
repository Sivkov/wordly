import React from 'react';



const RussianKeyboard = ({ wordArray, handleWordArrayClick }) => {
	const russianLetters = [
		["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"], // первая строка
		["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],       // вторая строка
		["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю"],                  // третья строка
	];
	const rClass = (letter) => {
		let used = []
		let lClass = 'keyboard-key'
		wordArray.ATTEMPTS.forEach(element => {
			if (element.status === 'used') {
				used = [...used, ...element.word]
			}
		});

		used = [...new Set(used)];
		//console.log(used)


		if (used.includes(letter)) {
			lClass += ' used'
			if (wordArray.KEYWORD.includes(letter)) lClass += ' usefull'
		}

		wordArray.ATTEMPTS.forEach(element => {
			if (element.status === 'used') {
				let lIndex = wordArray.KEYWORD.indexOf(letter)
				if (lIndex !== -1 && element.word[lIndex] === letter) {
					lClass += ' usefullOnPlace'
				}
			}
		});

		return lClass
	}

	return (
		<div>
			<div className="russian-keyboard">
				{russianLetters.map((letters, ind) => (
					<div className="lettersLine" key={ind}>
						{letters.map((letter, index) => (
						<React.Fragment key={ind + '' + index}>
							<button
							className={rClass(letter)}
							onClick={() => handleWordArrayClick('addLetter', letter)}
							>
							{letter}
							</button>
							{letter === 'Ю' ? 
								<button
								className="keyboard-key btn_del"
								onClick={() => handleWordArrayClick('deleteLetter')}>
								&#9003;
								</button> : ''
							}
						</React.Fragment>
						))}
					</div>
					))
				}
			</div>
			<div className='d-flex justify-content-center align-items-center mt-2'>
				<button
					className="keyboard-key btn_answer"
					onClick={() => handleWordArrayClick('submit')}>
					ответ
				</button>
			</div>
		</div>

	);
};

export default RussianKeyboard;
