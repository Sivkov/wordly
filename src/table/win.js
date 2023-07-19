import React from 'react';

const Win = (arr) => {
 	const detectWin =()=>{
		arr.ATTEMPTS.forEach(element => {
			if (element.bulls.length == 5){
				console.log ('win')
 			}
		});

	}

	return (
		<div>
			<div className="content">
				<div className="trophy"></div>
				<div className="text"></div>
			</div>
		</div>
	);
};

export default Win;
