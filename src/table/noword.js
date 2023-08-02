import React from 'react';

const Noword = ({ wordArray, handleWordArrayClick }) => {

  let className= wordArray.MISTAKE ? "" :'d-none'
  return (
    <div className={className}>
      <div>
        <div className="noWord_under"></div>
        <div className="noWord" onClick={()=> handleWordArrayClick('noMistake')}>
          <div className='noWord_wrapper'>
            <h1>No such word!</h1>
            <div className="btn btn-info m-4" >CONTINUE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noword;