import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from '@reduxjs/toolkit';
import Field from './table/field';


const App = () => {
  //const dispatch = useDispatch();
  return (
    <div className="App">
        <Field />
     </div>
  );
  
}

export default App;