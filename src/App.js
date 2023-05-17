import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from '@reduxjs/toolkit';
//import { setStarships } from './store/starship/starships-reducer';
import Field from './table/field';
import KeyPress from './table/keyPress.js';

import constants from './constants/constants';


const App = () => {
  //const dispatch = useDispatch();
  return (
    <div className="App">
        <Field />
        <KeyPress />
        <div>{ constants.LETTERS }</div>
    </div>
  );
}

export default App;