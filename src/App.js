import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from '@reduxjs/toolkit';
import Field from './table/field';


const App = () => {
  //const dispatch = useDispatch();
  return (
    <div className="App">
        <Field />
        <div className="cardLetter">
          <div className="cardLetter-side front">
            <div>Front Side</div>
          </div>
          <div className="cardLetter-side back">
            <div>Back Side</div>
          </div>
        </div> 
               
     </div>
  );
  
}

export default App;