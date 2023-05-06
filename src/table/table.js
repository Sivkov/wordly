import React from 'react';
//import { useSelector } from 'react-redux';
//import TableHeader from '../table-header/table-header';
//import TableRow from '../table-row';


const Table = () => {
  //const starships = useSelector(({ starships }) => starships.starships);
  const starships = true


  return (
    starships
      ? <div className="table">
        <div className="table__row table__row--header">
          <div className="table__cell">Cargo Capacity</div>
          <div className="table__cell">Const In credits</div>
          <div className="table__cell">Max Atmosphering Speed</div>
          <div className="table__cell">Name</div>
        </div>
      </div>
      : <div>loading...</div>
  )
};

export default Table; 