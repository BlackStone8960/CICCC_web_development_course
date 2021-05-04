import React, {useState, useEffect} from 'react';

const Seats = () => {
  // const [movies, dispatch] = useReducer(moviesReducer, {});
  const [seats, setSeats] = useState([
    -1, 0, 0, -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1,
    -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, -1,
    -1, 0, -1, -1, -1, -1, -1, 0, -1, -1, 0, -1, -1, -1, 0, -1, -1, -1,
    -1, 0, 0, -1, 0, -1, -1, -1, -1, -1
  ]); // Reducerをつかったほうがいい？いいかもしれないが、SQLを使ってサーバに情報を保存したりする可能性があるのでいったん後回しでホームページなどのUIを作っていく
  const [activeSeats, setActiveSeats] = useState(0);
  const [admissionFee, setAdmissionFee] = useState(15);

  useEffect(() => {
    const seatsObj = JSON.parse(localStorage.getItem('seats'));
    if (seatsObj) {
      setSeats(seatsObj.seats);
      setActiveSeats(seatsObj.activeSeats);
      setAdmissionFee(seatsObj.admissionFee);
    }
  }, [])

  useEffect(() => {
    setActiveSeats(seats.filter((seat) => seat === 1).length);
    localStorage.setItem('seats', JSON.stringify({ seats, activeSeats, admissionFee }))
  }, [seats, activeSeats, admissionFee])

  const seatActive = (seat, index) => {
    if (seat === 0) return;
    const newSeats = [...seats];
    newSeats[index] *= -1;
    setSeats(newSeats);
  };

  const switchSeat = (seat) => {
    switch(seat){
      case -1: // default
        return "seat"
      case 0: // reserved seat
        return "seat reserved";
      case 1: // when clicked
        return "seat active"
      default:
        return "seat" // create error state?
    }
  }

  return (
    <>
      <div className="seat-wrapper">
        {seats.map((seat, index) => (
          <div
            className={switchSeat(seat)}
            onClick={() => seatActive(seat, index)}
            key={index}
          ></div>
        ))}
      </div>
      <div className="sum-text">
        <div>{activeSeats} Seats : {activeSeats * admissionFee}</div>
      </div>
    </>
  )
};

export { Seats as default };