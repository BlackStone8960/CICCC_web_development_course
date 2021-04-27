import React from 'react';
import Seat from './Seat';

const Book = () => {
  return (
    <div class="seat-container">
      <div class="seat-description">
        <div class="seat-dummy"></div><span>N/A</span>
        <div class="seat-dummy active"></div><span>Selected</span>
        <div class="seat-dummy reserved"></div><span>Occupied</span>
      </div>
      <Seat />
      <div class="sum-text">
        <div><span id="seats-num"></span>Seats : </div>
        <div>$<span id="total"></span></div>
      </div>
    </div>
  );
};

export { Book as default };