import React, {useState} from 'react';

const Seat = () => {
  const [activeSeats, setActiveSeats] = useState([]);
  
  const renderTotal = (userSelection) => {
    document.getElementById('seats-num').innerText = userSelection ? userSelection.activeSeats : 0;
    document.getElementById('total').innerText = userSelection ? userSelection.activeSeats * userSelection.admissionFee : 0;
  };

  const seatActive = (e) => {
    const element = e.currentTarget.element;
    if (element.classList.contains('reserved')) return;
    element.classList.toggle('active');
    setActiveSeats(document.getElementsByClassName('active').length);
    const userSelection = { activeSeats, admissionFee };
    renderTotal(userSelection);
    userSelection.seatsStatus = recordSeatsStatus();
    localStorage.setItem('userSelection', JSON.stringify(userSelection));
  };

  return (
    <div className="seat-wrapper">
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat" onClick={seatActive()}></div>
      <div className="seat reserved" onClick={seatActive()}></div>
    </div>
  )
};

export { Seat as default };