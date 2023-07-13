import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from '@reduxjs/toolkit';
import Field from './table/field';
import Win from './table/win.js';
import Winner from './scripts/confetti';
 

const App = () => {
  //const dispatch = useDispatch();
  Winner()
  return (
    <div className="App">
        <Field />
        <Win />
     </div>
  );
  
}

export default App;