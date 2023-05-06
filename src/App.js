import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from '@reduxjs/toolkit';
//import { setStarships } from './store/starship/starships-reducer';
import Table from './table/table';
import Car from './table/car';

const App = () => {
  //const dispatch = useDispatch();


  return (
    <div className="App">
      <Table />
      <Car color="red" />
    </div>
  );
}

export default App;