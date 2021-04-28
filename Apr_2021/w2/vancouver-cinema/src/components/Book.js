import React from 'react';
import Seat from './Seat';

const Book = () => {
  return (
    <div className="seat-container">
      <div className="seat-description">
        <div className="seat-dummy"></div><span>N/A</span>
        <div className="seat-dummy active"></div><span>Selected</span>
        <div className="seat-dummy reserved"></div><span>Occupied</span>
      </div>
      <Seat />
    </div>
  );
};

export { Book as default };